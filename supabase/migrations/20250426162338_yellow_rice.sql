/*
  # Initial Schema Setup

  1. New Tables
    - `users`
      - `id` (uuid, primary key) - Maps to Supabase Auth user ID
      - `name` (text) - User's full name
      - `email` (text) - User's email address
      - `phone_number` (text) - User's phone number
      - `role` (text) - User's role (civilian, police, admin)
      - `created_at` (timestamptz) - Account creation timestamp
    
    - `incidents`
      - `id` (uuid, primary key)
      - `title` (text) - Incident title
      - `description` (text) - Detailed description
      - `location` (jsonb) - Location data including lat, lng, address
      - `severity` (int) - Severity level (1-10)
      - `status` (text) - Current status (pending, verified, resolved, rejected)
      - `reported_by` (uuid) - Reference to users.id
      - `created_at` (timestamptz) - Report timestamp
      - `images` (text[]) - Array of image URLs
    
    - `events`
      - `id` (uuid, primary key)
      - `title` (text) - Event title
      - `description` (text) - Event description
      - `location` (jsonb) - Location data
      - `date` (date) - Event date
      - `time` (text) - Event time
      - `category` (text) - Event category
      - `organizer_id` (uuid) - Reference to users.id
      - `created_at` (timestamptz) - Creation timestamp
      - `image` (text) - Event image URL

    - `messages`
      - `id` (uuid, primary key)
      - `content` (text) - Message content
      - `sender_id` (uuid) - Reference to users.id
      - `receiver_id` (uuid) - Reference to users.id
      - `created_at` (timestamptz) - Message timestamp
      - `is_read` (boolean) - Message read status

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone_number text,
  role text NOT NULL DEFAULT 'civilian',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_role CHECK (role IN ('civilian', 'police', 'admin'))
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create incidents table
CREATE TABLE IF NOT EXISTS incidents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  location jsonb NOT NULL,
  severity int NOT NULL CHECK (severity BETWEEN 1 AND 10),
  status text NOT NULL DEFAULT 'pending',
  reported_by uuid REFERENCES users(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  images text[],
  CONSTRAINT valid_status CHECK (status IN ('pending', 'verified', 'resolved', 'rejected'))
);

ALTER TABLE incidents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read incidents"
  ON incidents
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create incidents"
  ON incidents
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = reported_by);

CREATE POLICY "Users can update own incidents"
  ON incidents
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = reported_by);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  location jsonb NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  category text NOT NULL,
  organizer_id uuid REFERENCES users(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  image text,
  CONSTRAINT valid_category CHECK (category IN ('cultural', 'educational', 'community', 'safety'))
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read events"
  ON events
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = organizer_id);

CREATE POLICY "Users can update own events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = organizer_id);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  sender_id uuid REFERENCES users(id) NOT NULL,
  receiver_id uuid REFERENCES users(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_read boolean DEFAULT false
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their messages"
  ON messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = sender_id OR auth.uid() = receiver_id);

CREATE POLICY "Users can send messages"
  ON messages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = sender_id);

CREATE POLICY "Users can mark messages as read"
  ON messages
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = receiver_id);