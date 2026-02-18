'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scale, Target, Pill, Calendar, MessageSquare, FileText, ArrowRight, TrendingDown } from 'lucide-react';
import { PortalHeader } from '@/components/portal/Sidebar';
import StatsCard from '@/components/portal/StatsCard';
import WeightChart from '@/components/portal/WeightChart';
import { AppointmentList } from '@/components/portal/AppointmentCard';
import ProgressRing from '@/components/ui/ProgressRing';
import Button from '@/components/ui/Button';
import { mockPatient, mockAppointments, mockMessages } from '@/lib/mock-data';

export default function Dashboard() {
  const upcomingAppointments = mockAppointments.filter(a => a.status === 'upcoming' || a.status === 'scheduled').slice(0, 2);
  const unreadMessages = mockMessages.filter(m => !m.read).length;

  return (
    <div className="min-h-screen">
      <PortalHeader
        title={`Welcome back, ${mockPatient.name.split(' ')[0]}`}
        subtitle="Here's an overview of your weight management journey"
      />

      <div className="p-6 lg:p-8 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Current Weight"
            value={`${mockPatient.currentWeight} lbs`}
            subtitle={`Started at ${mockPatient.startingWeight} lbs`}
            icon={<Scale className="w-6 h-6" />}
            trend="down"
            trendValue="-37 lbs"
            color="primary"
          />
          <StatsCard
            title="Goal Weight"
            value={`${mockPatient.goalWeight} lbs`}
            subtitle={`${mockPatient.currentWeight - mockPatient.goalWeight} lbs to go`}
            icon={<Target className="w-6 h-6" />}
            color="accent"
          />
          <StatsCard
            title="Current Medication"
            value={mockPatient.currentMedication}
            subtitle={mockPatient.currentDosage}
            icon={<Pill className="w-6 h-6" />}
            color="success"
          />
          <StatsCard
            title="Next Appointment"
            value="Feb 25"
            subtitle="10:00 AM with Dr. Chen"
            icon={<Calendar className="w-6 h-6" />}
            color="primary"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weight Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <WeightChart />
          </div>

          {/* Progress Ring */}
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
            <h3 className="text-lg font-semibold text-text-primary mb-6">Treatment Progress</h3>
            <div className="flex flex-col items-center">
              <ProgressRing
                progress={mockPatient.treatmentProgress}
                size={180}
                strokeWidth={12}
                color="#0D4F4F"
                label="Complete"
              />
              <div className="mt-6 text-center">
                <p className="text-text-secondary mb-2">You&apos;ve lost</p>
                <p className="text-4xl font-bold text-primary">
                  {mockPatient.startingWeight - mockPatient.currentWeight} lbs
                </p>
                <p className="text-text-secondary mt-2">since {mockPatient.startDate}</p>
              </div>
              <div className="w-full mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">BMI Change</span>
                  <div className="flex items-center gap-1 text-success">
                    <TrendingDown className="w-4 h-4" />
                    <span className="font-medium">{(mockPatient.startingBmi - mockPatient.bmi).toFixed(1)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-text-secondary">Current BMI</span>
                  <span className="font-medium text-text-primary">{mockPatient.bmi}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">Upcoming Appointments</h3>
              <Link href="/portal/appointments">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </div>
            {upcomingAppointments.length > 0 ? (
              <AppointmentList appointments={upcomingAppointments} />
            ) : (
              <p className="text-text-secondary text-center py-8">No upcoming appointments</p>
            )}
            <Link href="/portal/appointments" className="block mt-4">
              <Button variant="outline" className="w-full" icon={<Calendar className="w-5 h-5" />}>
                Book New Appointment
              </Button>
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
            <h3 className="text-lg font-semibold text-text-primary mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/portal/appointments">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl cursor-pointer group"
                >
                  <Calendar className="w-8 h-8 text-primary mb-3" />
                  <p className="font-medium text-text-primary group-hover:text-primary transition-colors">
                    Book Appointment
                  </p>
                </motion.div>
              </Link>
              <Link href="/portal/messages">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl cursor-pointer group relative"
                >
                  <MessageSquare className="w-8 h-8 text-accent-600 mb-3" />
                  <p className="font-medium text-text-primary group-hover:text-accent-600 transition-colors">
                    Message Provider
                  </p>
                  {unreadMessages > 0 && (
                    <span className="absolute top-3 right-3 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadMessages}
                    </span>
                  )}
                </motion.div>
              </Link>
              <Link href="/portal/medications">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-xl cursor-pointer group"
                >
                  <Pill className="w-8 h-8 text-green-600 mb-3" />
                  <p className="font-medium text-text-primary group-hover:text-green-600 transition-colors">
                    Refill Medication
                  </p>
                </motion.div>
              </Link>
              <Link href="/portal/records">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl cursor-pointer group"
                >
                  <FileText className="w-8 h-8 text-purple-600 mb-3" />
                  <p className="font-medium text-text-primary group-hover:text-purple-600 transition-colors">
                    View Records
                  </p>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Message Preview */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text-primary">Recent Messages</h3>
            <Link href="/portal/messages">
              <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                View All
              </Button>
            </Link>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">EC</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-text-primary">Dr. Emily Chen</span>
                <span className="text-xs text-text-secondary">Today, 9:00 AM</span>
                {unreadMessages > 0 && (
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full font-medium">New</span>
                )}
              </div>
              <p className="text-text-secondary truncate">
                Quick reminder: Your appointment is coming up on Feb 25th at 10:00 AM...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
