'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Pill,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
  X,
  HelpCircle,
  Bell,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/portal/dashboard', icon: LayoutDashboard },
  { name: 'Appointments', href: '/portal/appointments', icon: Calendar },
  { name: 'Messages', href: '/portal/messages', icon: MessageSquare, badge: 1 },
  { name: 'Medications', href: '/portal/medications', icon: Pill },
  { name: 'Health Records', href: '/portal/records', icon: FileText },
  { name: 'Settings', href: '/portal/settings', icon: Settings },
];

const bottomNavigation = [
  { name: 'Help Center', href: '#', icon: HelpCircle },
  { name: 'Log Out', href: '/', icon: LogOut },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-4 right-4 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-strong flex items-center justify-center"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-dark/50 backdrop-blur-sm z-50"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 280 }}
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-50 lg:z-auto
          bg-white border-r border-gray-100 flex flex-col
          transform transition-transform duration-300
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-400 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold text-primary font-serif"
              >
                VitalPath
              </motion.span>
            )}
          </Link>

          {/* Mobile close button */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Desktop collapse button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className={`w-5 h-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                      ${isActive
                        ? 'bg-primary text-white shadow-soft'
                        : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
                      }
                    `}
                  >
                    <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : ''}`} />
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-1 font-medium"
                      >
                        {item.name}
                      </motion.span>
                    )}
                    {!isCollapsed && item.badge && (
                      <span className={`
                        w-5 h-5 rounded-full text-xs font-medium flex items-center justify-center
                        ${isActive ? 'bg-white text-primary' : 'bg-red-500 text-white'}
                      `}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom navigation */}
        <div className="border-t border-gray-100 py-4 px-3">
          <ul className="space-y-1">
            {bottomNavigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-all duration-200"
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </>
  );
}

export function PortalHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif text-text-primary">{title}</h1>
          {subtitle && <p className="text-text-secondary mt-1">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-text-secondary" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-semibold">SM</span>
          </div>
        </div>
      </div>
    </header>
  );
}
