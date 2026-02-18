'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/mock-data';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '../ui/AnimatedSection';

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wide">
            Success Stories
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
            Real Results from Real Patients
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands who have transformed their lives with VitalPath.
            See what our patients have to say about their journey.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggeredItem key={testimonial.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-accent/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">-{testimonial.weightLost}lbs</div>
                    <div className="text-xs text-gray-400">{testimonial.duration}</div>
                  </div>
                </div>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
