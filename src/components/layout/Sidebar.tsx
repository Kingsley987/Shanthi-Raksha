import React, { useEffect } from 'react';
import {
  Home,
  AlertCircle,
  Users,
  BarChart,
  MessageSquare,
  Calendar,
  BookOpen,
  Settings,
  HelpCircle,
  Shield,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Report Incident', href: '/report', icon: AlertCircle },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Crisis Center', href: '/crisis', icon: BarChart },
    { name: 'Communications', href: '/communications', icon: MessageSquare },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Resources', href: '/resources', icon: BookOpen },
  ];

  const bottomNavItems = [
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Help & Support', href: '/help', icon: HelpCircle },
  ];

  // Close sidebar on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-neutral-200 w-64 pt-16 z-30 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col justify-between overflow-y-auto relative">
          {/* Close buttons (mobile only) */}
          <div className="absolute top-4 right-4 flex flex-col items-center space-y-2 lg:hidden">
            <button
              onClick={onClose}
              className="p-1 rounded-md text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={onClose}
              className="text-xs font-semibold px-2 py-1 rounded-md text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              style={{ border: '1px solid #ccc' }}
            >
              Esc
            </button>
          </div>

          <div className="px-4 py-6">
            <div className="mb-8 px-2">
              <div className="flex items-center justify-center space-x-2 p-3 bg-primary-50 rounded-lg">
                <Shield className="h-6 w-6 text-primary-700" />
                <div>
                  <p className="text-sm font-medium text-primary-900">Safety Status</p>
                  <p className="text-xs text-primary-700">Normal</p>
                </div>
              </div>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-primary-50 hover:text-primary-700"
                >
                  <item.icon className="mr-3 h-5 w-5 text-neutral-500 group-hover:text-primary-600" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="px-4 py-6 border-t border-neutral-200">
            <nav className="space-y-1">
              {bottomNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-primary-50 hover:text-primary-700"
                >
                  <item.icon className="mr-3 h-5 w-5 text-neutral-500 group-hover:text-primary-600" />
                  {item.name}
                </a>
              ))}
            </nav>

            {user && (
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center px-2">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-900">{user.name}</p>
                    <p className="text-xs text-neutral-500">{user.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
