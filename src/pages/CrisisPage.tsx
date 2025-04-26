import React from 'react';
import { AlertTriangle, BarChart3, MapPin } from 'lucide-react';
import AlertBanner from '../components/dashboard/AlertBanner';
import { mockAlerts } from '../data/mockData';

const CrisisPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <AlertTriangle className="h-8 w-8 text-error-600 mr-3" />
        <h1 className="text-3xl font-bold text-neutral-900">Crisis Management Center</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            {mockAlerts.map(alert => (
              <AlertBanner key={alert.id} alert={alert} />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Crisis Response Teams</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(team => (
                <div key={team} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium text-neutral-900">Response Team {team}</h3>
                    <p className="text-sm text-neutral-600">Status: Active</p>
                  </div>
                  <button className="btn btn-outline">Contact</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Emergency Resources</h2>
            <div className="space-y-4">
              <button className="w-full btn btn-primary">Emergency Hotline</button>
              <button className="w-full btn btn-outline">Download Emergency Plan</button>
              <button className="w-full btn btn-outline">View Safety Guidelines</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Crisis Statistics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Active Incidents</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Teams Deployed</span>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Response Time</span>
                <span className="font-semibold">15 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisPage;