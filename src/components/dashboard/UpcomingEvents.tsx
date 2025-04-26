import React from 'react';
import { Calendar } from 'lucide-react';
import { Event } from '../../types';
import EventCard from '../events/EventCard';

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Calendar className="text-primary-600 mr-2" />
          <h3 className="text-lg font-medium text-neutral-900">Upcoming Events</h3>
        </div>
        <a href="/events" className="text-sm text-primary-600 hover:text-primary-800">
          View All
        </a>
      </div>
      
      {events.length === 0 ? (
        <div className="text-center py-6 text-neutral-500">
          No upcoming events scheduled.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;