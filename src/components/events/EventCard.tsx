import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Event, EventType } from '../../types';

interface EventCardProps {
  event: Event;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getEventTypeBadge = (type: EventType) => {
    switch (type) {
      case EventType.CULTURAL:
        return <span className="badge bg-primary-50 text-primary-800">Cultural</span>;
      case EventType.SAFETY_AWARENESS:
        return <span className="badge bg-error-50 text-error-800">Safety Awareness</span>;
      case EventType.COMMUNITY_BUILDING:
        return <span className="badge bg-success-50 text-success-900">Community Building</span>;
      case EventType.WORKSHOP:
        return <span className="badge bg-accent-50 text-accent-800">Workshop</span>;
      case EventType.OTHER:
        return <span className="badge bg-neutral-50 text-neutral-800">Other</span>;
      default:
        return <span className="badge bg-neutral-50 text-neutral-800">Other</span>;
    }
  };

  return (
    <div 
      className="card card-hover cursor-pointer transition-all"
      onClick={onClick}
    >
      <div className="h-48 w-full relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          {getEventTypeBadge(event.type)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-neutral-900 mb-2">{event.title}</h3>
        
        <div className="flex items-center mb-2 text-sm text-neutral-600">
          <Calendar size={16} className="mr-2 text-primary-600" />
          <span>{formatDate(event.startDate)}</span>
        </div>
        
        <div className="flex items-center mb-3 text-sm text-neutral-600">
          <MapPin size={16} className="mr-2 text-primary-600" />
          <span className="truncate">{event.location.address}</span>
        </div>
        
        <p className="text-neutral-700 text-sm mb-4 line-clamp-2">{event.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-neutral-600">
            <Users size={16} className="mr-1" />
            <span>
              {event.attendees} 
              {event.maxAttendees ? ` / ${event.maxAttendees}` : ''}
            </span>
          </div>
          <button className="text-primary-600 hover:text-primary-800 flex items-center text-sm">
            Learn More
            <ExternalLink size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;