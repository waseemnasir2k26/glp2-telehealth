'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color?: 'primary' | 'accent' | 'success' | 'warning';
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  color = 'primary',
}: StatsCardProps) {
  const colors = {
    primary: 'from-primary/10 to-primary/5 text-primary',
    accent: 'from-accent/10 to-accent/5 text-accent-600',
    success: 'from-green-100 to-green-50 text-green-600',
    warning: 'from-yellow-100 to-yellow-50 text-yellow-600',
  };

  const trendColors = {
    up: 'text-green-500 bg-green-50',
    down: 'text-red-500 bg-red-50',
    neutral: 'text-gray-500 bg-gray-50',
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center`}>
          {icon}
        </div>
        {trend && trendValue && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${trendColors[trend]}`}>
            <TrendIcon className="w-4 h-4" />
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-sm font-medium text-text-secondary">{title}</h3>
        <p className="text-2xl font-bold text-text-primary mt-1">{value}</p>
        {subtitle && (
          <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
