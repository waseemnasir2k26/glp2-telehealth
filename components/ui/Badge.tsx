'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
}: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
    primary: 'bg-primary-100 text-primary',
    accent: 'bg-accent-100 text-accent-700',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}

export function TrustBadge({
  title,
  icon,
  className = ''
}: {
  title: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-soft border border-gray-100 ${className}`}>
      <span className="text-primary">{icon}</span>
      <span className="text-sm font-medium text-text-primary">{title}</span>
    </div>
  );
}

export function ComplianceBadge({
  type,
  className = '',
}: {
  type: 'hipaa' | 'legitscript' | 'bbb' | 'ssl';
  className?: string;
}) {
  const badges = {
    hipaa: {
      title: 'HIPAA Compliant',
      bg: 'bg-blue-50 border-blue-100',
      text: 'text-blue-700',
    },
    legitscript: {
      title: 'LegitScript Certified',
      bg: 'bg-green-50 border-green-100',
      text: 'text-green-700',
    },
    bbb: {
      title: 'BBB Accredited',
      bg: 'bg-gray-50 border-gray-100',
      text: 'text-gray-700',
    },
    ssl: {
      title: '256-bit SSL',
      bg: 'bg-primary-50 border-primary-100',
      text: 'text-primary',
    },
  };

  const badge = badges[type];

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${badge.bg} ${className}`}>
      <svg className={`w-5 h-5 ${badge.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <span className={`text-sm font-medium ${badge.text}`}>{badge.title}</span>
    </div>
  );
}
