'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Search,
  MoreVertical,
  Eye,
  UserPlus,
  Activity,
  CreditCard,
  Calendar,
  Star,
  Filter,
} from 'lucide-react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import {
  dashboardStats,
  recentPatients,
  pendingApprovals,
  revenueData,
  providers,
  systemAlerts,
  adminUser,
} from '@/lib/admin-data';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuthenticated');
    if (!auth) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const stats = [
    {
      label: 'Total Patients',
      value: dashboardStats.totalPatients.toLocaleString(),
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Active Subscriptions',
      value: dashboardStats.activeSubscriptions.toLocaleString(),
      change: '+8.2%',
      trend: 'up',
      icon: CreditCard,
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'Monthly Revenue',
      value: `$${(dashboardStats.monthlyRevenue / 1000).toFixed(0)}K`,
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-accent to-accent-600',
    },
    {
      label: 'Pending Approvals',
      value: dashboardStats.pendingApprovals.toString(),
      change: '-5 today',
      trend: 'down',
      icon: Clock,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <AdminSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main
        className={`transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-[280px]'
        }`}
      >
        {/* Top Header */}
        <header className="bg-dark/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-serif text-white">Dashboard</h1>
              <p className="text-gray-400 text-sm">Welcome back, {adminUser.name}</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patients, providers..."
                  className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Notifications */}
              <button className="relative p-2 bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              {/* Profile */}
              <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center">
                  <span className="text-dark font-semibold text-sm">SM</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* System Alerts */}
          {systemAlerts.length > 0 && (
            <div className="space-y-2">
              {systemAlerts.slice(0, 2).map((alert) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                    alert.type === 'warning'
                      ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-300'
                      : alert.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-300'
                      : 'bg-blue-500/10 border border-blue-500/20 text-blue-300'
                  }`}
                >
                  {alert.type === 'warning' ? (
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  ) : alert.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Bell className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm flex-1">{alert.message}</span>
                  <button className="text-white/50 hover:text-white">
                    <XCircle className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                      <p className="text-3xl font-semibold text-white mt-1">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {stat.trend === 'up' ? (
                          <ArrowUpRight className="w-4 h-4 text-green-400" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-400" />
                        )}
                        <span className={stat.trend === 'up' ? 'text-green-400 text-sm' : 'text-red-400 text-sm'}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2">
              <Card className="bg-white/5 border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-white">Revenue Overview</h2>
                    <p className="text-gray-400 text-sm">Last 6 months performance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                {/* Simple Bar Chart */}
                <div className="flex items-end justify-between h-48 gap-4">
                  {revenueData.map((item, index) => {
                    const maxRevenue = Math.max(...revenueData.map(d => d.revenue));
                    const height = (item.revenue / maxRevenue) * 100;
                    return (
                      <div key={item.month} className="flex-1 flex flex-col items-center">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="w-full bg-gradient-to-t from-primary to-primary-400 rounded-t-lg relative group cursor-pointer"
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            ${(item.revenue / 1000).toFixed(0)}K
                          </div>
                        </motion.div>
                        <span className="text-gray-400 text-sm mt-2">{item.month}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Pending Approvals */}
            <Card className="bg-white/5 border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Pending Approvals</h2>
                <Badge variant="warning">{pendingApprovals.length} pending</Badge>
              </div>
              <div className="space-y-4">
                {pendingApprovals.slice(0, 4).map((approval) => (
                  <div
                    key={approval.id}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      approval.urgency === 'high' ? 'bg-red-500' :
                      approval.urgency === 'normal' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{approval.patientName}</p>
                      <p className="text-gray-400 text-xs">{approval.type}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-primary">
                View All Approvals
              </Button>
            </Card>
          </div>

          {/* Bottom Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Patients */}
            <Card className="bg-white/5 border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Patients</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Patient
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 text-sm border-b border-white/10">
                      <th className="pb-3 font-medium">Patient</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Plan</th>
                      <th className="pb-3 font-medium">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentPatients.map((patient) => (
                      <tr key={patient.id} className="text-sm">
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                              {patient.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-white font-medium">{patient.name}</p>
                              <p className="text-gray-400 text-xs">{patient.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <Badge
                            variant={
                              patient.status === 'active' ? 'success' :
                              patient.status === 'pending' ? 'warning' : 'default'
                            }
                          >
                            {patient.status}
                          </Badge>
                        </td>
                        <td className="py-3 text-gray-300">{patient.plan}</td>
                        <td className="py-3">
                          {patient.weightLoss > 0 ? (
                            <span className="text-green-400">-{patient.weightLoss} lbs</span>
                          ) : (
                            <span className="text-gray-400">--</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Providers */}
            <Card className="bg-white/5 border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Active Providers</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {providers.map((provider) => (
                  <div
                    key={provider.id}
                    className="flex items-center gap-4 p-3 bg-white/5 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center text-dark font-semibold">
                      {provider.name.split(' ').slice(1).map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-white font-medium">{provider.name}</p>
                        <span className={`w-2 h-2 rounded-full ${
                          provider.status === 'online' ? 'bg-green-500' :
                          provider.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`} />
                      </div>
                      <p className="text-gray-400 text-sm">{provider.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{provider.rating}</span>
                      </div>
                      <p className="text-gray-400 text-xs">{provider.patientsAssigned} patients</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
