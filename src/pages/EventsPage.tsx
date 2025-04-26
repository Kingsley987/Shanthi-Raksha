import React from 'react';
import { Calendar } from 'lucide-react';
import EventCard from '../components/events/EventCard';
import { mockEvents } from '../data/mockData';

const EventsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Calendar className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-3xl font-bold text-neutral-900">Peacebuilding Events</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">Upcoming Events</h2>
              <button className="btn btn-primary">Create Event</button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Event Categories</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-50 text-primary-700">
                Cultural Events (12)
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-50 text-primary-700">
                Safety Workshops (8)
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-50 text-primary-700">
                Community Meetings (5)
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary-50 text-primary-700">
                Peace Initiatives (7)
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Your Calendar</h2>
            <div className="space-y-3">
              {[1, 2, 3].map(event => (
                <div key={event} className="p-3 border rounded-lg">
                  <p className="font-medium text-neutral-900">Event {event}</p>
                  <p className="text-sm text-neutral-600">Tomorrow, 2:00 PM</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;