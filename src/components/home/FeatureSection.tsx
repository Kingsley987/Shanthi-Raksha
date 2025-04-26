import React from 'react';
import { 
  AlertTriangle, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Calendar, 
  Shield, 
  Lock, 
  FileText 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 bg-white rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Incident Reporting",
      description: "Report suspicious activities or emergencies in real-time with photo evidence and location data."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Engagement",
      description: "Connect with neighbors through moderated forums and cultural exchange opportunities."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Crisis Management",
      description: "Access real-time alerts and resource allocation during emergencies."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Secure Communication",
      description: "Encrypted messaging between citizens and law enforcement for sensitive information."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Peacebuilding Events",
      description: "Discover and participate in cultural events and safety awareness programs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI-Powered Verification",
      description: "Advanced algorithms assess report credibility to reduce false positives."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      description: "Your personal information is encrypted and protected at all times."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Educational Resources",
      description: "Access materials on safety practices, peace history, and crisis preparedness."
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Core Platform Features
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-600 mx-auto">
            Comprehensive tools designed to enhance public safety and foster community peace.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;