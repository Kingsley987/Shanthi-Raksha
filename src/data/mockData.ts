import { 
  Incident, 
  IncidentSeverity, 
  IncidentStatus,
  ForumPost,
  Event,
  EventType,
  Alert,
  AlertLevel,
  Resource
} from '../types';

// Mock incidents
export const mockIncidents: Incident[] = [
  {
    id: '1',
    title: 'Suspicious activity near City Park',
    description: 'A group of individuals acting suspiciously near the south entrance of City Park. They appear to be monitoring pedestrian movements.',
    location: {
      address: 'City Park, South Entrance',
      lat: 28.6139,
      lng: 77.2090,
    },
    reportedBy: 'user123',
    reportedAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    severity: IncidentSeverity.MEDIUM,
    status: IncidentStatus.VERIFIED,
    images: [
      'https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    aiVerificationScore: 0.87,
  },
  {
    id: '2',
    title: 'Traffic accident on Highway 42',
    description: 'Multiple vehicle collision causing major traffic congestion. At least 3 cars involved.',
    location: {
      address: 'Highway 42, Kilometer 15',
      lat: 28.5355,
      lng: 77.3910,
    },
    reportedBy: 'user456',
    reportedAt: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    severity: IncidentSeverity.HIGH,
    status: IncidentStatus.IN_PROGRESS,
    assignedTo: 'officer789',
    aiVerificationScore: 0.95,
  },
  {
    id: '3',
    title: 'Abandoned bag at mall entrance',
    description: 'An unattended backpack left near the main entrance of Central Mall for over 30 minutes. Security has been notified.',
    location: {
      address: 'Central Mall, Main Entrance',
      lat: 28.6429,
      lng: 77.1180,
    },
    reportedBy: 'user789',
    reportedAt: new Date(Date.now() - 10800000).toISOString(), // 3 hours ago
    severity: IncidentSeverity.HIGH,
    status: IncidentStatus.RESOLVED,
    images: [
      'https://images.pexels.com/photos/2269701/pexels-photo-2269701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    assignedTo: 'officer123',
    updatedAt: new Date(Date.now() - 9000000).toISOString(), // 2.5 hours ago
    aiVerificationScore: 0.78,
  },
  {
    id: '4',
    title: 'Water main break flooding street',
    description: 'A burst water pipe is causing significant flooding on Rose Avenue. Water level is rising rapidly.',
    location: {
      address: 'Rose Avenue, between 5th and 6th Street',
      lat: 28.7041,
      lng: 77.1025,
    },
    reportedBy: 'user321',
    reportedAt: new Date(Date.now() - 14400000).toISOString(), // 4 hours ago
    severity: IncidentSeverity.MEDIUM,
    status: IncidentStatus.IN_PROGRESS,
    assignedTo: 'officer456',
    updatedAt: new Date(Date.now() - 10800000).toISOString(), // 3 hours ago
    aiVerificationScore: 0.92,
  },
  {
    id: '5',
    title: 'Graffiti on community center wall',
    description: 'New graffiti tags appeared overnight on the east wall of the community center. Some content appears to be hateful.',
    location: {
      address: 'Community Center, East Wall',
      lat: 28.5672,
      lng: 77.3219,
    },
    reportedBy: 'user654',
    reportedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    severity: IncidentSeverity.LOW,
    status: IncidentStatus.REPORTED,
    images: [
      'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    aiVerificationScore: 0.83,
  },
];

// Mock forum posts
export const mockForumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Community watch program in Riverside neighborhood',
    content: 'I would like to propose starting a community watch program in our neighborhood. We\'ve seen an increase in minor incidents, and I believe working together we can create a safer environment for everyone. Would anyone be interested in participating?',
    author: {
      id: 'user123',
      name: 'Rahul Sharma',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    tags: ['community-watch', 'safety', 'neighborhood', 'riverside'],
    likes: 24,
    comments: [
      {
        id: 'comment1',
        content: 'This is a great idea! I would definitely like to participate. We should coordinate with the local police station as well.',
        author: {
          id: 'user456',
          name: 'Priya Patel',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        createdAt: new Date(Date.now() - 169200000).toISOString(), // 1.95 days ago
        likes: 8,
      },
      {
        id: 'comment2',
        content: 'Count me in! I can help organize the schedule.',
        author: {
          id: 'user789',
          name: 'Amit Kumar',
          avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
        },
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        likes: 5,
      },
    ],
  },
  {
    id: '2',
    title: 'Cultural diversity celebration next month',
    content: 'Our annual cultural diversity celebration is coming up next month at the Community Center. We\'re looking for volunteers and participants to share their cultural traditions, food, music, and stories. This event has been a wonderful way to bring our diverse community together in previous years.',
    author: {
      id: 'user321',
      name: 'Fatima Ahmed',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    tags: ['cultural-event', 'diversity', 'community', 'volunteers'],
    likes: 37,
    comments: [
      {
        id: 'comment3',
        content: 'I would love to share some traditional recipes and stories from my homeland. This event always brings such joy to our community!',
        author: {
          id: 'user654',
          name: 'Liu Wei',
          avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
        },
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        likes: 12,
      },
    ],
  },
  {
    id: '3',
    title: 'Emergency preparedness workshop recap',
    content: 'I wanted to share some key takeaways from yesterday\'s emergency preparedness workshop. We learned about creating family emergency plans, assembling emergency kits, and how to respond to different types of emergencies. The fire department provided excellent resources that I\'m happy to share with anyone who couldn\'t attend.',
    author: {
      id: 'user567',
      name: 'David Singh',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    tags: ['emergency-preparedness', 'safety', 'workshop', 'resources'],
    likes: 19,
    comments: [],
  },
];

// Mock events
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Cultural Heritage Festival',
    description: 'Join us for a celebration of the diverse cultural heritage in our community. The festival will feature traditional music, dance, art, and cuisine from various cultural groups.',
    type: EventType.CULTURAL,
    startDate: new Date(Date.now() + 604800000).toISOString(), // 7 days from now
    endDate: new Date(Date.now() + 691200000).toISOString(), // 8 days from now
    location: {
      address: 'City Park Amphitheater',
      lat: 28.6139,
      lng: 77.2090,
    },
    organizer: {
      id: 'org123',
      name: 'Community Cultural Association',
    },
    attendees: 156,
    maxAttendees: 500,
    image: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['culture', 'festival', 'diversity', 'community'],
  },
  {
    id: '2',
    title: 'Personal Safety Workshop',
    description: 'Learn essential personal safety skills and awareness techniques from trained professionals. This workshop will cover situational awareness, basic self-defense, and emergency response.',
    type: EventType.SAFETY_AWARENESS,
    startDate: new Date(Date.now() + 1209600000).toISOString(), // 14 days from now
    endDate: new Date(Date.now() + 1224000000).toISOString(), // 14 days + 4 hours from now
    location: {
      address: 'Community Center, Room 204',
      lat: 28.5672,
      lng: 77.3219,
    },
    organizer: {
      id: 'org456',
      name: 'Safety First Coalition',
    },
    attendees: 42,
    maxAttendees: 50,
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['safety', 'workshop', 'self-defense', 'education'],
  },
  {
    id: '3',
    title: 'Neighborhood Clean-up Day',
    description: 'Let\'s come together to clean up our neighborhood! This community-building event will focus on litter collection, graffiti removal, and beautification efforts.',
    type: EventType.COMMUNITY_BUILDING,
    startDate: new Date(Date.now() + 259200000).toISOString(), // 3 days from now
    endDate: new Date(Date.now() + 280800000).toISOString(), // 3 days + 6 hours from now
    location: {
      address: 'Riverside Park Entrance',
      lat: 28.7041,
      lng: 77.1025,
    },
    organizer: {
      id: 'org789',
      name: 'Green Neighborhood Initiative',
    },
    attendees: 67,
    maxAttendees: 100,
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['environment', 'clean-up', 'community', 'volunteer'],
  },
];

// Mock alerts
export const mockAlerts: Alert[] = [
  {
    id: '1',
    title: 'Flash Flood Warning',
    message: 'Heavy rainfall expected in the next 24 hours. Potential for flash flooding in low-lying areas. Residents advised to avoid riverbanks and prepare for possible evacuation.',
    level: AlertLevel.WARNING,
    affectedAreas: ['Riverside', 'Valley View', 'Downtown'],
    createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    expiresAt: new Date(Date.now() + 86400000).toISOString(), // 24 hours from now
    isActive: true,
    source: 'Meteorological Department',
  },
  {
    id: '2',
    title: 'Planned Power Outage',
    message: 'Scheduled maintenance will cause a power outage in the affected areas from 10:00 AM to 2:00 PM tomorrow. Please plan accordingly.',
    level: AlertLevel.INFO,
    affectedAreas: ['North Hills', 'Central District'],
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 24 hours ago
    expiresAt: new Date(Date.now() + 172800000).toISOString(), // 48 hours from now
    isActive: true,
    source: 'Power Distribution Company',
  },
  {
    id: '3',
    title: 'Chemical Spill Emergency',
    message: 'Hazardous material spill reported on Highway 42. Emergency services responding. Avoid the area and follow evacuation orders if in affected zones.',
    level: AlertLevel.EMERGENCY,
    affectedAreas: ['Industrial Zone', 'South Suburb', 'Highway 42 Corridor'],
    createdAt: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    expiresAt: new Date(Date.now() + 14400000).toISOString(), // 4 hours from now
    isActive: true,
    source: 'Emergency Response Center',
  },
];

// Mock resources
export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Family Emergency Plan Template',
    description: 'A comprehensive template to help families create their own emergency plan. Includes contact information sheets, meeting point designations, and evacuation routes.',
    category: 'Emergency Preparedness',
    fileUrl: '/resources/family-emergency-plan.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date(Date.now() - 2592000000).toISOString(), // 30 days ago
    author: {
      id: 'org123',
      name: 'Emergency Management Office',
    },
    tags: ['emergency', 'family', 'planning', 'preparedness'],
  },
  {
    id: '2',
    title: 'Cultural Integration Guide',
    description: 'A guide to understanding and appreciating the diverse cultures in our community. Includes historical context, cultural practices, and suggestions for respectful engagement.',
    category: 'Cultural Resources',
    fileUrl: '/resources/cultural-integration-guide.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date(Date.now() - 5184000000).toISOString(), // 60 days ago
    author: {
      id: 'org456',
      name: 'Multicultural Resource Center',
    },
    tags: ['culture', 'diversity', 'integration', 'community'],
  },
  {
    id: '3',
    title: 'Personal Safety Tips',
    description: 'Essential tips for staying safe in various situations, including at home, in public, and online. Created by safety experts and local law enforcement.',
    category: 'Safety Education',
    fileUrl: '/resources/personal-safety-tips.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/8942872/pexels-photo-8942872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date(Date.now() - 1296000000).toISOString(), // 15 days ago
    author: {
      id: 'org789',
      name: 'Public Safety Department',
    },
    tags: ['safety', 'security', 'tips', 'protection'],
  },
];