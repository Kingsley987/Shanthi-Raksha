import React, { useState } from 'react';
import { Shield, Menu, X, Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle, isSidebarOpen }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    if (notificationsOpen) setNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (userMenuOpen) setUserMenuOpen(false);
  };

  return (
    <header 
      className={`bg-white shadow-sm fixed top-0 z-20 w-full transition-all duration-300 ${
        isSidebarOpen ? 'left-64' : 'left-0'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="mr-4 lg:hidden text-neutral-700 hover:text-primary-700 focus:outline-none"
            onClick={onMenuToggle}
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="/" className="flex items-center">
            <Shield className="h-8 w-8 text-primary-700" />
            <span className="ml-2 text-xl font-semibold text-primary-800">Shanthi Raksha</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              {/* Notification Button */}
              <div className="relative">
                <button
                  className="p-2 text-neutral-700 hover:text-primary-700 hover:bg-primary-50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                  onClick={toggleNotifications}
                  aria-label="Notifications"
                >
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-4 w-4 bg-error-500 rounded-full text-white text-xs flex items-center justify-center">
                    3
                  </span>
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-30 animate-fade-in">
                    <div className="px-4 py-2 border-b border-neutral-100">
                      <h3 className="font-medium text-neutral-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <a href="#" className="block px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100">
                        <p className="text-sm font-medium text-neutral-900">Incident #123 status updated</p>
                        <p className="text-xs text-neutral-500 mt-1">2 minutes ago</p>
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100">
                        <p className="text-sm font-medium text-neutral-900">New safety alert in your area</p>
                        <p className="text-xs text-neutral-500 mt-1">1 hour ago</p>
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-neutral-50">
                        <p className="text-sm font-medium text-neutral-900">Your incident report has been verified</p>
                        <p className="text-xs text-neutral-500 mt-1">Yesterday</p>
                      </a>
                    </div>
                    <div className="px-4 py-2 border-t border-neutral-100">
                      <a href="#" className="text-sm text-primary-600 hover:text-primary-800">View all notifications</a>
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={toggleUserMenu}
                  aria-label="User menu"
                >
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                    <User size={20} />
                  </div>
                  <span className="hidden md:block text-sm font-medium text-neutral-700">{user?.name}</span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-30 animate-fade-in">
                    <a href="/profile" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">Your Profile</a>
                    <a href="/settings" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">Settings</a>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-error-700 hover:bg-neutral-50 flex items-center"
                      onClick={logout}
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="space-x-2 flex items-center">
              <a href="/login" className="text-primary-700 hover:text-primary-800 px-3 py-2 text-sm font-medium">
                Log in
              </a>
              <a href="/register" className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sign up
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
