'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortalHeader } from '@/components/portal/Sidebar';
import AppointmentCard from '@/components/portal/AppointmentCard';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { mockAppointments, mockProviders } from '@/lib/mock-data';

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
];

const appointmentTypes = [
  { id: 'followup', name: 'Follow-up Consultation', duration: '15 min' },
  { id: 'checkin', name: 'Monthly Check-in', duration: '20 min' },
  { id: 'dosage', name: 'Dosage Adjustment', duration: '15 min' },
  { id: 'initial', name: 'Initial Consultation', duration: '30 min' },
];

export default function AppointmentsPage() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const upcomingAppointments = mockAppointments.filter(a => a.status === 'upcoming' || a.status === 'scheduled');
  const pastAppointments = mockAppointments.filter(a => a.status === 'completed');

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();

  return (
    <div className="min-h-screen">
      <PortalHeader title="Appointments" subtitle="Manage your telehealth appointments" />

      <div className="p-6 lg:p-8 space-y-8">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Your Appointments</h2>
            <p className="text-text-secondary">Schedule and manage your telehealth visits</p>
          </div>
          <Button
            variant="primary"
            icon={<Plus className="w-5 h-5" />}
            onClick={() => setShowBookingModal(true)}
          >
            Book Appointment
          </Button>
        </div>

        {/* Upcoming Appointments */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Upcoming</h3>
          {upcomingAppointments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingAppointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center shadow-soft border border-gray-100">
              <Calendar className="w-12 h-12 text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary mb-4">No upcoming appointments</p>
              <Button variant="primary" onClick={() => setShowBookingModal(true)}>
                Schedule Now
              </Button>
            </div>
          )}
        </div>

        {/* Past Appointments */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Past Appointments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} showActions={false} />
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        title="Book Appointment"
        size="xl"
      >
        <div className="space-y-6">
          {/* Appointment Type */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Appointment Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {appointmentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedType === type.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <p className="font-medium text-text-primary">{type.name}</p>
                  <p className="text-sm text-text-secondary">{type.duration}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Select Date
            </label>
            <div className="bg-gray-50 rounded-xl p-4">
              {/* Month navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-semibold text-text-primary">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Days header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-text-secondary py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => {
                  if (!day) {
                    return <div key={index} />;
                  }

                  const isToday = day.toDateString() === today.toDateString();
                  const isPast = day < today && !isToday;
                  const isSelected = selectedDate?.toDateString() === day.toDateString();
                  const isWeekend = day.getDay() === 0 || day.getDay() === 6;

                  return (
                    <button
                      key={index}
                      onClick={() => !isPast && !isWeekend && setSelectedDate(day)}
                      disabled={isPast || isWeekend}
                      className={`
                        aspect-square rounded-lg flex items-center justify-center text-sm transition-all
                        ${isPast || isWeekend ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-primary/10 cursor-pointer'}
                        ${isToday ? 'font-bold text-primary' : ''}
                        ${isSelected ? 'bg-primary text-white hover:bg-primary' : ''}
                      `}
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <label className="block text-sm font-medium text-text-primary mb-3">
                Select Time
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      py-2 px-3 rounded-lg text-sm transition-all
                      ${selectedTime === time
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Provider */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Provider
            </label>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-semibold">EC</span>
              </div>
              <div>
                <p className="font-medium text-text-primary">{mockProviders[0].name}</p>
                <p className="text-sm text-text-secondary">{mockProviders[0].specialty}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <Button variant="ghost" className="flex-1" onClick={() => setShowBookingModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              className="flex-1"
              disabled={!selectedType || !selectedDate || !selectedTime}
              onClick={() => {
                alert('Appointment booked! (Demo)');
                setShowBookingModal(false);
              }}
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
