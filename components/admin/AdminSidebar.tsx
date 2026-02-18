'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  UserCog,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  Shield,
  Bell,
  BarChart3,
  Pill,
  Calendar,
  MessageSquare,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { adminUser } from '@/lib/admin-data';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Users, label: 'Patients', href: '/admin/patients' },
  { icon: UserCog, label: 'Providers', href: '/admin/providers' },
  { icon: FileText, label: 'Approvals', href: '/admin/approvals', badge: 47 },
  { icon: Pill, label: 'Medications', href: '/admin/medications' },
  { icon: Calendar, label: 'Appointments', href: '/admin/appointments' },
  { icon: MessageSquare, label: 'Messages', href: '/admin/messages', badge: 12 },
  { icon: CreditCard, label: 'Billing', href: '/admin/billing' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    router.push('/admin');
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-screen bg-dark border-r border-white/10 flex flex-col z-40"
    >
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-white font-semibold">VitalPath</h1>
              <p className="text-xs text-gray-400">Admin Portal</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary-600 transition-colors"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="flex-1 text-sm font-medium">{item.label}</span>
                  )}
                  {!collapsed && item.badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Help Link */}
      <div className="px-3 py-2 border-t border-white/10">
        <Link
          href="/admin/help"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
        >
          <HelpCircle className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Help & Support</span>}
        </Link>
      </div>

      {/* User Profile */}
      <div className="p-3 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-dark font-semibold text-sm">SM</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{adminUser.name}</p>
              <p className="text-gray-400 text-xs truncate">{adminUser.role}</p>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all w-full mt-2"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Sign Out</span>}
        </button>
      </div>
    </motion.aside>
  );
}
