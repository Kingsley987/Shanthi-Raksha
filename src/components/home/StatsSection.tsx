import React from 'react';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-primary-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Making a Difference
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-primary-200 mx-auto">
            Our platform is helping communities build peace and safety every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-primary-700 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-4">
              <CheckCircle className="w-6 h-6 text-primary-200" />
            </div>
            <p className="text-4xl font-bold text-white">94%</p>
            <p className="text-lg text-primary-200 mt-2">Incident Resolution Rate</p>
          </div>
          
          <div className="bg-primary-700 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-4">
              <Shield className="w-6 h-6 text-primary-200" />
            </div>
            <p className="text-4xl font-bold text-white">1,240+</p>
            <p className="text-lg text-primary-200 mt-2">Safety Reports Processed</p>
          </div>
          
          <div className="bg-primary-700 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-4">
              <Clock className="w-6 h-6 text-primary-200" />
            </div>
            <p className="text-4xl font-bold text-white">15 min</p>
            <p className="text-lg text-primary-200 mt-2">Average Response Time</p>
          </div>
          
          <div className="bg-primary-700 rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full mb-4">
              <Users className="w-6 h-6 text-primary-200" />
            </div>
            <p className="text-4xl font-bold text-white">25K+</p>
            <p className="text-lg text-primary-200 mt-2">Active Community Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;