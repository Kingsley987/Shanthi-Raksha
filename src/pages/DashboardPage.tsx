import React, { useState } from 'react';
import { MapPin, AlertCircle, BarChart3, Shield } from 'lucide-react';
import RecentIncidents from '../components/dashboard/RecentIncidents';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';
import CommunityForum from '../components/dashboard/CommunityForum';
import AlertBanner from '../components/dashboard/AlertBanner';
import { mockIncidents, mockEvents, mockForumPosts, mockAlerts } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [activeAlerts, setActiveAlerts] = useState(mockAlerts);

  const dismissAlert = (alertId: string) => {
    setActiveAlerts(activeAlerts.filter(alert => alert.id !== alertId));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
        
        <div className="flex items-center text-sm text-neutral-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span>
            {user?.location ? `Lat: ${user.location.lat}, Lng: ${user.location.lng}` : 'Location not available'}
          </span>
        </div>
      </div>
      
      {activeAlerts.map(alert => (
        <AlertBanner 
          key={alert.id} 
          alert={alert} 
          onDismiss={() => dismissAlert(alert.id)} 
        />
      ))}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-primary-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <AlertCircle className="w-5 h-5 text-primary-700" />
          </div>
          <div>
            <p className="text-sm text-primary-700">Active Incidents</p>
            <p className="text-2xl font-bold text-primary-900">12</p>
          </div>
        </div>
        
        <div className="bg-success-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-success-100 flex items-center justify-center mr-3">
            <Shield className="w-5 h-5 text-success-700" />
          </div>
          <div>
            <p className="text-sm text-success-700">Safety Score</p>
            <p className="text-2xl font-bold text-success-900">92%</p>
          </div>
        </div>
        
        <div className="bg-accent-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mr-3">
            <BarChart3 className="w-5 h-5 text-accent-700" />
          </div>
          <div>
            <p className="text-sm text-accent-700">Reports Submitted</p>
            <p className="text-2xl font-bold text-accent-900">47</p>
          </div>
        </div>
        
        <div className="bg-warning-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-warning-100 flex items-center justify-center mr-3">
            <MapPin className="w-5 h-5 text-warning-700" />
          </div>
          <div>
            <p className="text-sm text-warning-700">Nearby Events</p>
            <p className="text-2xl font-bold text-warning-900">5</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <RecentIncidents incidents={mockIncidents} />
        <UpcomingEvents events={mockEvents} />
        <CommunityForum posts={mockForumPosts} />
      </div>
    </div>
  );
};

export default DashboardPage;