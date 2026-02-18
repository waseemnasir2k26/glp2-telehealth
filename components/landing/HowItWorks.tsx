'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Video, FileText, Truck } from 'lucide-react';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '../ui/AnimatedSection';

const steps = [
  {
    icon: ClipboardList,
    title: 'Complete Online Assessment',
    description: '5-minute health questionnaire reviewed by our medical team',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Video,
    title: 'Physician Consultation',
    description: '1-on-1 telehealth visit with a board-certified provider',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: FileText,
    title: 'Personalized Treatment Plan',
    description: 'Custom GLP-2 protocol tailored to your goals',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Truck,
    title: 'Medication Delivered',
    description: 'Discreet delivery from licensed US pharmacies',
    color: 'bg-accent-50 text-accent-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            Simple Process
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif text-text-primary">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Get started with GLP-2 therapy in four simple steps. Our streamlined
            process makes it easy to begin your weight management journey.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StaggeredItem key={index}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0" />
                )}

                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
