'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { pricingPlans } from '@/lib/mock-data';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '../ui/AnimatedSection';
import Button from '../ui/Button';

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            Pricing
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif text-text-primary">
            Transparent, All-Inclusive Pricing
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            All plans include provider consultations, medication, and ongoing support.
            Choose the level of care that&apos;s right for you.
          </p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <StaggeredItem key={plan.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl p-8 h-full ${
                  plan.popular
                    ? 'bg-gradient-to-br from-primary to-primary-600 text-white shadow-strong ring-4 ring-primary/20'
                    : 'bg-white border border-gray-200 shadow-soft'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-dark text-sm font-semibold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-2xl font-serif ${plan.popular ? 'text-white' : 'text-text-primary'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-2 text-sm ${plan.popular ? 'text-white/70' : 'text-text-secondary'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-text-primary'}`}>
                      ${plan.price}
                    </span>
                    <span className={`ml-2 ${plan.popular ? 'text-white/70' : 'text-text-secondary'}`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <Link href="/assessment">
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className={`w-full mb-8 ${plan.popular ? 'bg-white text-primary hover:bg-gray-100' : ''}`}
                  >
                    Get Started
                  </Button>
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-accent' : 'text-success'
                      }`} />
                      <span className={plan.popular ? 'text-white/90' : 'text-text-secondary'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-white/30' : 'text-gray-300'
                      }`} />
                      <span className={plan.popular ? 'text-white/40' : 'text-gray-400'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <p className="text-text-secondary">
            All plans include a 30-day satisfaction guarantee.{' '}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contact us
            </Link>{' '}
            for custom enterprise pricing.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
