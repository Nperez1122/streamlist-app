import React from 'react';
import { Home, Calendar, Video, Radio, Settings, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../types';
import { useAuth } from '../contexts/AuthContext';

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Schedule', href: '/schedule', icon: Calendar },
  { label: 'Videos', href: '/videos', icon: Video },
  { label: 'Podcasts', href: '/podcasts', icon: Radio },
  { label: 'Settings', href: '/settings', icon: Settings },
];

export function Navigation() {
  const { logout } = useAuth();

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center space-x-2 transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
        <button
          onClick={logout}
          className="text-gray-600 hover:text-blue-600 flex items-center space-x-2"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </nav>
  );
}