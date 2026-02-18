'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Download,
  UserPlus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  Bell,
} from 'lucide-react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { adminUser } from '@/lib/admin-data';

const allPatients = [
  { id: 'P001', name: 'Jennifer Adams', email: 'jennifer.adams@email.com', phone: '(555) 123-4567', status: 'active', plan: 'Premium', joinedDate: '2025-02-15', weightLoss: 12.5, bmi: 28.4 },
  { id: 'P002', name: 'Michael Chen', email: 'michael.chen@email.com', phone: '(555) 234-5678', status: 'pending', plan: 'Standard', joinedDate: '2025-02-17', weightLoss: 0, bmi: 32.1 },
  { id: 'P003', name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '(555) 345-6789', status: 'active', plan: 'Premium', joinedDate: '2025-01-20', weightLoss: 28.3, bmi: 27.2 },
  { id: 'P004', name: 'David Williams', email: 'david.w@email.com', phone: '(555) 456-7890', status: 'active', plan: 'Basic', joinedDate: '2025-02-01', weightLoss: 8.7, bmi: 30.5 },
  { id: 'P005', name: 'Emily Rodriguez', email: 'emily.r@email.com', phone: '(555) 567-8901', status: 'paused', plan: 'Premium', joinedDate: '2024-12-10', weightLoss: 35.2, bmi: 26.8 },
  { id: 'P006', name: 'James Wilson', email: 'james.w@email.com', phone: '(555) 678-9012', status: 'active', plan: 'Standard', joinedDate: '2025-01-15', weightLoss: 18.9, bmi: 29.1 },
  { id: 'P007', name: 'Lisa Martinez', email: 'lisa.m@email.com', phone: '(555) 789-0123', status: 'active', plan: 'Premium', joinedDate: '2024-11-20', weightLoss: 42.1, bmi: 25.4 },
  { id: 'P008', name: 'Robert Thompson', email: 'robert.t@email.com', phone: '(555) 890-1234', status: 'pending', plan: 'Basic', joinedDate: '2025-02-18', weightLoss: 0, bmi: 33.2 },
  { id: 'P009', name: 'Amanda Brown', email: 'amanda.b@email.com', phone: '(555) 901-2345', status: 'active', plan: 'Standard', joinedDate: '2025-01-05', weightLoss: 15.6, bmi: 28.9 },
  { id: 'P010', name: 'Christopher Lee', email: 'chris.lee@email.com', phone: '(555) 012-3456', status: 'cancelled', plan: 'Basic', joinedDate: '2024-10-15', weightLoss: 5.2, bmi: 31.7 },
];

export default function AdminPatientsPage() {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedPatients, setSelectedPatients] = useState<string[]>([]);

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

  const filteredPatients = allPatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          patient.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleSelectPatient = (id: string) => {
    setSelectedPatients(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedPatients.length === filteredPatients.length) {
      setSelectedPatients([]);
    } else {
      setSelectedPatients(filteredPatients.map(p => p.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <AdminSidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-[280px]'}`}>
        {/* Header */}
        <header className="bg-dark/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-serif text-white">Patients</h1>
              <p className="text-gray-400 text-sm">Manage all patient accounts</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center">
                <span className="text-dark font-semibold text-sm">SM</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Actions Bar */}
          <Card className="bg-white/5 border-white/10 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patients by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="paused">Paused</option>
                <option value="cancelled">Cancelled</option>
              </select>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" className="text-gray-400">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="primary">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Patient
                </Button>
              </div>
            </div>
          </Card>

          {/* Patients Table */}
          <Card className="bg-white/5 border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 text-sm border-b border-white/10">
                    <th className="pb-4 pr-4">
                      <input
                        type="checkbox"
                        checked={selectedPatients.length === filteredPatients.length && filteredPatients.length > 0}
                        onChange={toggleSelectAll}
                        className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-primary focus:ring-primary"
                      />
                    </th>
                    <th className="pb-4 font-medium">Patient</th>
                    <th className="pb-4 font-medium">Contact</th>
                    <th className="pb-4 font-medium">Status</th>
                    <th className="pb-4 font-medium">Plan</th>
                    <th className="pb-4 font-medium">BMI</th>
                    <th className="pb-4 font-medium">Progress</th>
                    <th className="pb-4 font-medium">Joined</th>
                    <th className="pb-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredPatients.map((patient, index) => (
                    <motion.tr
                      key={patient.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-sm hover:bg-white/5"
                    >
                      <td className="py-4 pr-4">
                        <input
                          type="checkbox"
                          checked={selectedPatients.includes(patient.id)}
                          onChange={() => toggleSelectPatient(patient.id)}
                          className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-primary focus:ring-primary"
                        />
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-white font-medium">{patient.name}</p>
                            <p className="text-gray-400 text-xs">ID: {patient.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Mail className="w-3 h-3" />
                            <span className="text-xs">{patient.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Phone className="w-3 h-3" />
                            <span className="text-xs">{patient.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <Badge
                          variant={
                            patient.status === 'active' ? 'success' :
                            patient.status === 'pending' ? 'warning' :
                            patient.status === 'paused' ? 'default' : 'error'
                          }
                        >
                          {patient.status}
                        </Badge>
                      </td>
                      <td className="py-4 text-gray-300">{patient.plan}</td>
                      <td className="py-4 text-gray-300">{patient.bmi}</td>
                      <td className="py-4">
                        {patient.weightLoss > 0 ? (
                          <span className="text-green-400 font-medium">-{patient.weightLoss} lbs</span>
                        ) : (
                          <span className="text-gray-500">--</span>
                        )}
                      </td>
                      <td className="py-4 text-gray-400">{patient.joinedDate}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Showing {filteredPatients.length} of {allPatients.length} patients
              </p>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors disabled:opacity-50" disabled>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="px-3 py-1 bg-primary rounded-lg text-white text-sm">1</span>
                <button className="px-3 py-1 hover:bg-white/10 rounded-lg text-gray-400 text-sm">2</button>
                <button className="px-3 py-1 hover:bg-white/10 rounded-lg text-gray-400 text-sm">3</button>
                <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
