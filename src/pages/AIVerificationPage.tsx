import React from 'react';
import { Brain, CheckCircle, AlertTriangle } from 'lucide-react';

const AIVerificationPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Brain className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-3xl font-bold text-neutral-900">AI Verification System</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Recent Verifications</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-neutral-900">Report #{item}</h3>
                    <div className="flex items-center text-success-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">Verified (92%)</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    AI analysis completed successfully. Report content has been verified against historical data and known patterns.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Verification Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Reports Analyzed</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Average Accuracy</span>
                <span className="font-semibold">94%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">False Positives</span>
                <span className="font-semibold">2%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">AI Model Status</h2>
            <div className="space-y-4">
              <div className="flex items-center text-success-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>System Operational</span>
              </div>
              <p className="text-sm text-neutral-600">
                Last model update: 2 hours ago
              </p>
              <div className="flex items-center text-warning-600">
                <AlertTriangle className="w-5 h-5 mr-2" />
                <span>Processing load: 75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVerificationPage;