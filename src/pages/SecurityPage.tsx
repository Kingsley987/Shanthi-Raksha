import React from 'react';
import { Shield, Lock, Key, FileText } from 'lucide-react';

const SecurityPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Shield className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-3xl font-bold text-neutral-900">Data Security Center</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Security Overview</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-primary-600 mr-2" />
                  <h3 className="font-medium text-neutral-900">Encryption Status</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  All data is encrypted using AES-256 encryption at rest and in transit.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <Key className="w-6 h-6 text-primary-600 mr-2" />
                  <h3 className="font-medium text-neutral-900">Access Control</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Role-based access control is enforced for all system resources.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Security Logs</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map(log => (
                <div key={log} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-neutral-900">Security Scan #{log}</p>
                    <p className="text-sm text-neutral-600">Completed 2 hours ago</p>
                  </div>
                  <span className="badge bg-success-50 text-success-700">Passed</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full btn btn-primary flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2" />
                Security Audit
              </button>
              <button className="w-full btn btn-outline flex items-center justify-center">
                <Key className="w-4 h-4 mr-2" />
                Access Review
              </button>
              <button className="w-full btn btn-outline flex items-center justify-center">
                <FileText className="w-4 h-4 mr-2" />
                Download Report
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Security Metrics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Threat Detections</span>
                <span className="font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Security Score</span>
                <span className="font-semibold">98/100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Last Audit</span>
                <span className="font-semibold">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;