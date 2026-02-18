'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { mockWeightHistory } from '@/lib/mock-data';

export default function WeightChart() {
  const data = mockWeightHistory;
  const maxWeight = Math.max(...data.map(d => d.weight));
  const minWeight = Math.min(...data.map(d => d.weight));
  const range = maxWeight - minWeight;
  const padding = range * 0.1;

  const chartHeight = 200;
  const chartWidth = 100;

  const getY = (weight: number) => {
    return ((maxWeight + padding - weight) / (range + 2 * padding)) * chartHeight;
  };

  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * chartWidth,
    y: getY(d.weight),
  }));

  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    return `${acc} L ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">Weight Progress</h3>
          <p className="text-sm text-text-secondary">Last 6 months</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-text-secondary">Weight (lbs)</span>
          </div>
        </div>
      </div>

      <div className="relative h-52">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-text-secondary">
          <span>{Math.round(maxWeight + padding)}</span>
          <span>{Math.round((maxWeight + minWeight) / 2)}</span>
          <span>{Math.round(minWeight - padding)}</span>
        </div>

        {/* Chart area */}
        <div className="ml-12 h-full relative">
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {/* Grid lines */}
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0D4F4F" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0D4F4F" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Horizontal grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
              <line
                key={i}
                x1="0"
                y1={ratio * chartHeight}
                x2={chartWidth}
                y2={ratio * chartHeight}
                stroke="#E5E7EB"
                strokeWidth="0.5"
              />
            ))}

            {/* Area fill */}
            <motion.path
              d={areaD}
              fill="url(#areaGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Line */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="#0D4F4F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Data points */}
            {points.map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="3"
                fill="white"
                stroke="#0D4F4F"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </svg>

          {/* X-axis labels */}
          <div className="flex justify-between mt-2 text-xs text-text-secondary">
            {data.map((d, i) => (
              <span key={i}>{d.date}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
        <div>
          <p className="text-sm text-text-secondary">Starting</p>
          <p className="text-lg font-bold text-text-primary">{data[0].weight} lbs</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Current</p>
          <p className="text-lg font-bold text-primary">{data[data.length - 1].weight} lbs</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Lost</p>
          <p className="text-lg font-bold text-success">-{data[0].weight - data[data.length - 1].weight} lbs</p>
        </div>
      </div>
    </div>
  );
}
