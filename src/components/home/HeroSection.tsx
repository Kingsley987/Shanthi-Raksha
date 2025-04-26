import React from 'react';
import { Shield, AlertTriangle, Users, Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-primary-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <h1>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-accent-400">
                      Building a Safer Community
                    </span>
                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                      <span className="block text-white">Shanthi Raksha</span>
                      <span className="block text-primary-400 mt-1">PeaceTech Platform</span>
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-neutral-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Leveraging technology for real-time public safety reporting, community engagement, and peacebuilding to foster trust and swift response.
                  </p>
                  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <a
                        href="/report"
                        className="btn bg-accent-500 hover:bg-accent-600 focus:ring-accent-400 text-white px-6 py-3 flex items-center justify-center"
                      >
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Report Incident
                      </a>
                      <a
                        href="/register"
                        className="btn bg-white hover:bg-neutral-100 text-primary-700 px-6 py-3 flex items-center justify-center"
                      >
                        Join Our Community
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="People from diverse cultures working together"
        />
      </div>
    </div>
  );
};

export default HeroSection;