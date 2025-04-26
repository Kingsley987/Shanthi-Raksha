import React from 'react';
import { MessageSquare, Phone, Shield, Users } from 'lucide-react';

const CommunicationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <MessageSquare className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-3xl font-bold text-neutral-900">Secure Communications</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">Recent Messages</h2>
              <button className="btn btn-primary">New Message</button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4].map(message => (
                <div key={message} className="p-4 border rounded-lg hover:bg-neutral-50 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-neutral-900">Message Subject {message}</h3>
                    <span className="text-sm text-neutral-500">2 hours ago</span>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
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
                <Phone className="w-4 h-4 mr-2" />
                Emergency Call
              </button>
              <button className="w-full btn btn-outline flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2" />
                Contact Authority
              </button>
              <button className="w-full btn btn-outline flex items-center justify-center">
                <Users className="w-4 h-4 mr-2" />
                Group Chat
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Encryption Status</h2>
            <div className="space-y-4">
              <div className="flex items-center text-success-600">
                <Shield className="w-5 h-5 mr-2" />
                <span>End-to-End Encrypted</span>
              </div>
              <p className="text-sm text-neutral-600">
                All your communications are protected with military-grade encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationsPage;