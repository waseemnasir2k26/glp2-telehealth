'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Shield, CheckCircle, Building, HeartPulse, CreditCard } from 'lucide-react';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '../ui/AnimatedSection';

const benefits = [
  {
    icon: UserCheck,
    title: 'Board-Certified Physicians',
    description: 'All providers are licensed, board-certified physicians specializing in weight management and metabolic health.',
  },
  {
    icon: Shield,
    title: 'HIPAA-Compliant Platform',
    description: 'Your health information is protected with enterprise-grade security and strict HIPAA compliance.',
  },
  {
    icon: CheckCircle,
    title: 'LegitScript Certified',
    description: 'Verified by LegitScript, the leading certification for legitimate online healthcare services.',
  },
  {
    icon: Building,
    title: 'FDA-Registered Pharmacy Partners',
    description: 'Medications sourced from licensed, FDA-registered 503B compounding pharmacies.',
  },
  {
    icon: HeartPulse,
    title: 'Ongoing Medical Supervision',
    description: 'Regular check-ins and continuous monitoring to ensure your safety and optimize results.',
  },
  {
    icon: CreditCard,
    title: 'Insurance & HSA/FSA Accepted',
    description: 'Flexible payment options including HSA/FSA eligibility and insurance reimbursement assistance.',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif text-text-primary">
            Why Choose VitalPath?
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            We combine medical expertise with convenience to deliver the highest
            standard of care in weight management.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <StaggeredItem key={index}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)' }}
                className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 h-full transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
