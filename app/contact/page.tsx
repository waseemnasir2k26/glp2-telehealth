'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input, { Textarea, Select } from '@/components/ui/Input';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    value: '1-800-VITAL (84825)',
    description: 'Mon-Fri 8am-8pm EST',
    action: 'tel:1-800-848254',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'support@vitalpath.com',
    description: 'Response within 24 hours',
    action: 'mailto:support@vitalpath.com',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    value: 'Chat with us',
    description: 'Available 24/7',
    action: '#',
  },
];

const faqLinks = [
  { question: 'How do I reset my password?', href: '#' },
  { question: 'How do I update my payment method?', href: '#' },
  { question: 'What if I miss a dose?', href: '#' },
  { question: 'How do I cancel my subscription?', href: '#' },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary to-primary-700 text-white overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Have questions about GLP-2 therapy or your care? We&apos;re here to help.
                Reach out anytime and our team will get back to you promptly.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Methods */}
              <div className="lg:col-span-1 space-y-6">
                <AnimatedSection>
                  <h2 className="text-2xl font-serif text-text-primary mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.action}
                        className="block"
                      >
                        <Card hover className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <method.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-text-primary">{method.title}</h3>
                            <p className="text-primary font-medium">{method.value}</p>
                            <p className="text-sm text-text-secondary">{method.description}</p>
                          </div>
                        </Card>
                      </a>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <Card>
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-text-primary">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Monday - Friday</span>
                        <span className="text-text-primary font-medium">8:00 AM - 8:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Saturday</span>
                        <span className="text-text-primary font-medium">9:00 AM - 5:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Sunday</span>
                        <span className="text-text-primary font-medium">Closed</span>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <Card>
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-text-primary">Headquarters</h3>
                    </div>
                    <p className="text-text-secondary">
                      VitalPath Health, Inc.<br />
                      548 Market Street, Suite 95673<br />
                      San Francisco, CA 94104
                    </p>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <Card>
                    <h3 className="font-semibold text-text-primary mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      {faqLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-primary hover:underline text-sm"
                          >
                            {link.question}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <AnimatedSection delay={0.1}>
                  <Card padding="lg">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-serif text-text-primary mb-4">
                          Message Sent!
                        </h3>
                        <p className="text-text-secondary mb-6">
                          Thank you for reaching out. A member of our team will get back to you
                          within 24 hours.
                        </p>
                        <Button variant="ghost" onClick={() => setIsSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-2xl font-serif text-text-primary mb-2">
                          Send Us a Message
                        </h2>
                        <p className="text-text-secondary mb-8">
                          Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <Input
                              label="First Name"
                              placeholder="Enter your first name"
                              required
                            />
                            <Input
                              label="Last Name"
                              placeholder="Enter your last name"
                              required
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <Input
                              label="Email Address"
                              type="email"
                              placeholder="you@example.com"
                              required
                            />
                            <Input
                              label="Phone Number"
                              type="tel"
                              placeholder="(555) 123-4567"
                            />
                          </div>

                          <Select
                            label="What can we help you with?"
                            options={[
                              { value: '', label: 'Select a topic' },
                              { value: 'general', label: 'General Inquiry' },
                              { value: 'eligibility', label: 'Eligibility Questions' },
                              { value: 'treatment', label: 'Treatment Information' },
                              { value: 'billing', label: 'Billing & Insurance' },
                              { value: 'technical', label: 'Technical Support' },
                              { value: 'feedback', label: 'Feedback / Suggestions' },
                              { value: 'other', label: 'Other' },
                            ]}
                            required
                          />

                          <Textarea
                            label="Message"
                            placeholder="Tell us how we can help..."
                            required
                          />

                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              id="consent"
                              className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                              required
                            />
                            <label htmlFor="consent" className="text-sm text-text-secondary">
                              I consent to VitalPath contacting me regarding my inquiry. I understand
                              my information will be handled according to the{' '}
                              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                            </label>
                          </div>

                          <Button
                            type="submit"
                            variant="primary"
                            className="w-full md:w-auto"
                            isLoading={isSubmitting}
                            icon={<Send className="w-5 h-5" />}
                          >
                            Send Message
                          </Button>
                        </form>
                      </>
                    )}
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Notice */}
        <section className="py-12 bg-red-50 border-y border-red-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-red-800 font-medium">
              <strong>Medical Emergency?</strong> This is not an emergency service.
              If you are experiencing a medical emergency, please call 911 or go to your
              nearest emergency room immediately.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
