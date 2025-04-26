import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Incident } from '../../types';
import IncidentCard from '../incident/IncidentCard';

interface RecentIncidentsProps {
  incidents: Incident[];
}

const RecentIncidents: React.FC<RecentIncidentsProps> = ({ incidents }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <AlertCircle className="text-primary-600 mr-2" />
          <h3 className="text-lg font-medium text-neutral-900">Recent Incidents</h3>
        </div>
        <a href="/incidents" className="text-sm text-primary-600 hover:text-primary-800">
          View All
        </a>
      </div>
      
      {incidents.length === 0 ? (
        <div className="text-center py-6 text-neutral-500">
          No incidents reported recently.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {incidents.slice(0, 3).map((incident) => (
            <IncidentCard key={incident.id} incident={incident} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentIncidents;