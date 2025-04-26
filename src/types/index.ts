// Incident types
export enum IncidentSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum IncidentStatus {
  REPORTED = 'reported',
  VERIFIED = 'verified',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed',
  REJECTED = 'rejected',
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  reportedBy: string;
  reportedAt: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  images?: string[];
  assignedTo?: string;
  updatedAt?: string;
  aiVerificationScore?: number;
}

// Forum types
export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt?: string;
  tags: string[];
  likes: number;
  comments: ForumComment[];
}

export interface ForumComment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  updatedAt?: string;
  likes: number;
}

// Event types
export enum EventType {
  CULTURAL = 'cultural',
  SAFETY_AWARENESS = 'safety_awareness',
  COMMUNITY_BUILDING = 'community_building',
  WORKSHOP = 'workshop',
  OTHER = 'other',
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  startDate: string;
  endDate: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  organizer: {
    id: string;
    name: string;
  };
  attendees: number;
  maxAttendees?: number;
  image?: string;
  tags: string[];
}

// Alert types
export enum AlertLevel {
  INFO = 'info',
  WARNING = 'warning',
  EMERGENCY = 'emergency',
}

export interface Alert {
  id: string;
  title: string;
  message: string;
  level: AlertLevel;
  affectedAreas: string[];
  createdAt: string;
  expiresAt?: string;
  isActive: boolean;
  source: string;
}

// Resource types
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  fileUrl?: string;
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt?: string;
  author: {
    id: string;
    name: string;
  };
  tags: string[];
}