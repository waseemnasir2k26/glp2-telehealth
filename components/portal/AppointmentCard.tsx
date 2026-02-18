'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Phone, User, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface Appointment {
  id: string;
  date: string;
  time: string;
  type: string;
  provider: string;
  status: string;
  isVideo: boolean;
}

interface AppointmentCardProps {
  appointment: Appointment;
  variant?: 'default' | 'compact';
  showActions?: boolean;
}

export default function AppointmentCard({
  appointment,
  variant = 'default',
  showActions = true,
}: AppointmentCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const statusColors = {
    upcoming: 'primary',
    scheduled: 'info',
    completed: 'success',
    cancelled: 'error',
  } as const;

  if (variant === 'compact') {
    return (
      <motion.div
        whileHover={{ x: 4 }}
        className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl cursor-pointer group"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          {appointment.isVideo ? (
            <Video className="w-6 h-6 text-primary" />
          ) : (
            <Phone className="w-6 h-6 text-primary" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-text-primary truncate">{appointment.type}</p>
          <p className="text-sm text-text-secondary">{formatDate(appointment.date)} at {appointment.time}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100"
    >
      <div className="flex items-start justify-between mb-4">
        <Badge variant={statusColors[appointment.status as keyof typeof statusColors] || 'default'}>
          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
        </Badge>
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          {appointment.isVideo ? (
            <Video className="w-5 h-5 text-primary" />
          ) : (
            <Phone className="w-5 h-5 text-primary" />
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-text-primary mb-3">{appointment.type}</h3>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-text-secondary">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(appointment.date)}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <Clock className="w-4 h-4" />
          <span>{appointment.time}</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <User className="w-4 h-4" />
          <span>{appointment.provider}</span>
        </div>
      </div>

      {showActions && appointment.status === 'upcoming' && (
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <Button variant="primary" size="sm" className="flex-1">
            Join Call
          </Button>
          <Button variant="ghost" size="sm">
            Reschedule
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export function AppointmentList({ appointments }: { appointments: Appointment[] }) {
  return (
    <div className="space-y-3">
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} variant="compact" />
      ))}
    </div>
  );
}
