'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, CreditCard, Bell, Shield, Eye, EyeOff, Save, Plus, Trash2 } from 'lucide-react';
import { PortalHeader } from '@/components/portal/Sidebar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input, { Select, Checkbox } from '@/components/ui/Input';
import { mockPatient, states } from '@/lib/mock-data';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'payment' | 'notifications' | 'privacy'>('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
  ] as const;

  return (
    <div className="min-h-screen">
      <PortalHeader title="Settings" subtitle="Manage your account preferences" />

      <div className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Card padding="sm" className="lg:sticky lg:top-24">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                      ${activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
                      }
                    `}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </Card>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Personal Information */}
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      defaultValue={mockPatient.name.split(' ')[0]}
                    />
                    <Input
                      label="Last Name"
                      defaultValue={mockPatient.name.split(' ')[1]}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      defaultValue={mockPatient.email}
                      icon={<Mail className="w-5 h-5" />}
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      defaultValue={mockPatient.phone}
                      icon={<Phone className="w-5 h-5" />}
                    />
                    <Input
                      label="Date of Birth"
                      type="date"
                      defaultValue={mockPatient.dateOfBirth}
                    />
                    <Select
                      label="State"
                      defaultValue="California"
                      options={states.map(s => ({ value: s, label: s }))}
                    />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button variant="primary" icon={<Save className="w-5 h-5" />}>
                      Save Changes
                    </Button>
                  </div>
                </Card>

                {/* Change Password */}
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">Change Password</h3>
                  <div className="space-y-4 max-w-md">
                    <div className="relative">
                      <Input
                        label="Current Password"
                        type={showCurrentPassword ? 'text' : 'password'}
                        placeholder="Enter current password"
                      />
                    </div>
                    <div className="relative">
                      <Input
                        label="New Password"
                        type={showNewPassword ? 'text' : 'password'}
                        placeholder="Enter new password"
                        helperText="At least 8 characters with a number and special character"
                      />
                    </div>
                    <Input
                      label="Confirm New Password"
                      type="password"
                      placeholder="Confirm new password"
                    />
                    <Button variant="secondary">
                      Update Password
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Saved Payment Methods */}
                <Card>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-text-primary">Payment Methods</h3>
                    <Button variant="ghost" size="sm" icon={<Plus className="w-4 h-4" />}>
                      Add New
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {/* Credit Card */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">VISA</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-text-primary">•••• •••• •••• 4242</p>
                        <p className="text-sm text-text-secondary">Expires 12/25</p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Default</span>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-text-secondary" />
                      </button>
                    </div>
                  </div>
                </Card>

                {/* Insurance Information */}
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">Insurance Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Insurance Provider"
                      placeholder="e.g., Blue Cross Blue Shield"
                    />
                    <Input
                      label="Member ID"
                      placeholder="Enter member ID"
                    />
                    <Input
                      label="Group Number"
                      placeholder="Enter group number"
                    />
                    <Input
                      label="Policy Holder Name"
                      placeholder="Enter policy holder name"
                    />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button variant="primary" icon={<Save className="w-5 h-5" />}>
                      Save Insurance Info
                    </Button>
                  </div>
                </Card>

                {/* Billing History */}
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">Billing History</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="text-left py-3 text-sm font-medium text-text-secondary">Date</th>
                          <th className="text-left py-3 text-sm font-medium text-text-secondary">Description</th>
                          <th className="text-left py-3 text-sm font-medium text-text-secondary">Amount</th>
                          <th className="text-left py-3 text-sm font-medium text-text-secondary">Status</th>
                          <th className="text-right py-3 text-sm font-medium text-text-secondary">Receipt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { date: 'Feb 1, 2025', desc: 'Monthly Subscription - Complete', amount: '$299.00', status: 'Paid' },
                          { date: 'Jan 1, 2025', desc: 'Monthly Subscription - Complete', amount: '$299.00', status: 'Paid' },
                          { date: 'Dec 1, 2024', desc: 'Monthly Subscription - Complete', amount: '$299.00', status: 'Paid' },
                        ].map((item, index) => (
                          <tr key={index} className="border-b border-gray-50 last:border-0">
                            <td className="py-3 text-text-primary">{item.date}</td>
                            <td className="py-3 text-text-primary">{item.desc}</td>
                            <td className="py-3 text-text-primary font-medium">{item.amount}</td>
                            <td className="py-3">
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                {item.status}
                              </span>
                            </td>
                            <td className="py-3 text-right">
                              <Button variant="ghost" size="sm">Download</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">Notification Preferences</h3>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-text-secondary uppercase tracking-wide">Email Notifications</h4>
                      <Checkbox
                        label="Appointment Reminders"
                        description="Receive email reminders 24 hours before appointments"
                        defaultChecked
                      />
                      <Checkbox
                        label="Medication Reminders"
                        description="Get notified when it's time for your medication"
                        defaultChecked
                      />
                      <Checkbox
                        label="Lab Results"
                        description="Receive notifications when new lab results are available"
                        defaultChecked
                      />
                      <Checkbox
                        label="Provider Messages"
                        description="Get notified when your provider sends a message"
                        defaultChecked
                      />
                      <Checkbox
                        label="Billing Updates"
                        description="Receive invoices and payment confirmations"
                        defaultChecked
                      />
                      <Checkbox
                        label="Newsletter"
                        description="Receive health tips and company updates"
                      />
                    </div>

                    <div className="pt-6 border-t border-gray-100 space-y-4">
                      <h4 className="text-sm font-medium text-text-secondary uppercase tracking-wide">SMS Notifications</h4>
                      <Checkbox
                        label="Appointment Reminders"
                        description="Receive text message reminders for appointments"
                        defaultChecked
                      />
                      <Checkbox
                        label="Medication Reminders"
                        description="Get text reminders for your medication schedule"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button variant="primary" icon={<Save className="w-5 h-5" />}>
                      Save Preferences
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">Privacy Settings</h3>
                  <div className="space-y-4">
                    <Checkbox
                      label="Share Health Data for Research"
                      description="Allow anonymized health data to be used for medical research"
                    />
                    <Checkbox
                      label="Marketing Communications"
                      description="Receive personalized offers and promotions"
                    />
                    <Checkbox
                      label="Two-Factor Authentication"
                      description="Add an extra layer of security to your account"
                      defaultChecked
                    />
                  </div>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Data & Privacy</h3>
                  <p className="text-text-secondary mb-6">
                    Your health information is protected under HIPAA. You can request a copy of your
                    data or request account deletion at any time.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="ghost">
                      Download My Data
                    </Button>
                    <Button variant="ghost" className="text-red-600 hover:bg-red-50 hover:text-red-700">
                      Delete Account
                    </Button>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Active Sessions</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <div>
                        <p className="font-medium text-text-primary">Current Session</p>
                        <p className="text-sm text-text-secondary">Chrome on Windows • San Francisco, CA</p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-medium text-text-primary">iPhone 14 Pro</p>
                        <p className="text-sm text-text-secondary">Safari on iOS • Last active 2 days ago</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
