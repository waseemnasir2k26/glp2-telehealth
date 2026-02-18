'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-500 to-primary-700" />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier you. Our board-certified physicians
            are ready to create your personalized treatment plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/assessment">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Start Free Assessment
              </Button>
            </Link>
            <a href="tel:1-800-VITALPATH">
              <Button
                variant="ghost"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                Call 1-800-VITAL
              </Button>
            </a>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            Free assessment • No commitment required • Results in 24 hours
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
