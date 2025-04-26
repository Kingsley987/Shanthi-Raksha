import React from 'react';
import { Shield } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-accent-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Join Our PeaceTech Movement
            </h2>
            <p className="mt-4 text-lg text-accent-100 max-w-2xl">
              Be part of building a safer, more peaceful community. Sign up today to report incidents, participate in community forums, and stay informed about safety in your area.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/register"
                className="btn bg-white text-accent-600 hover:bg-accent-50 focus:ring-white px-6 py-3 flex items-center justify-center"
              >
                Create an Account
              </a>
              <a
                href="/about"
                className="btn bg-transparent border border-white text-white hover:bg-accent-600 focus:ring-white px-6 py-3 flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-accent-600 flex items-center justify-center animate-pulse-once">
              <Shield className="w-24 h-24 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;