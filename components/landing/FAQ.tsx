'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { faqs } from '@/lib/mock-data';
import Accordion from '../ui/Accordion';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif text-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Get answers to common questions about GLP-2 therapy and our telehealth services.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion items={faqs} />
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <Link href="/contact">
            <Button variant="ghost" icon={<MessageCircle className="w-5 h-5" />}>
              Contact Our Team
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
