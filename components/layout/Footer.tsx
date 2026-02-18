'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Shield, CheckCircle } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '#' },
  ],
  services: [
    { name: 'GLP-2 Therapy', href: '/glp-2-therapy' },
    { name: 'Weight Management', href: '#' },
    { name: 'Patient Portal', href: '/portal' },
    { name: 'Start Assessment', href: '/assessment' },
  ],
  resources: [
    { name: 'FAQ', href: '/#faq' },
    { name: 'Patient Resources', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'HIPAA Notice', href: '/notice-of-privacy' },
    { name: 'Telehealth Consent', href: '/telehealth-consent' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-400 flex items-center justify-center">
                <span className="text-dark font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-white font-serif">
                VitalPath
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Science-backed weight management with board-certified physicians.
              Start your transformation today with personalized GLP-2 therapy.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {/* HIPAA Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-white">HIPAA Compliant</span>
            </div>

            {/* LegitScript Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium text-white">LegitScript Certified</span>
            </div>

            {/* BBB Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-xs font-bold text-white">A+</span>
              </div>
              <span className="text-sm font-medium text-white">BBB Accredited</span>
            </div>

            {/* SSL Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-white">256-bit SSL</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
            <a href="tel:1-800-VITALPATH" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              1-800-VITAL (84825)
            </a>
            <a href="mailto:support@vitalpath.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              support@vitalpath.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-4 text-xs text-gray-500">
            <p className="text-center">
              Healthcare services provided by VitalPath Medical Group, P.C., a physician-owned professional corporation.
              Available in 48 states. Medications dispensed by licensed pharmacies.
            </p>
            <p className="text-center">
              <strong>Medical Disclaimer:</strong> Individual results may vary. GLP-2 medications require medical
              evaluation and prescription by a licensed healthcare provider. This is not an emergency service.
              If you are experiencing a medical emergency, call 911.
            </p>
            <p className="text-center">
              <strong>FDA Disclaimer:</strong> Compounded medications are prepared at FDA-registered 503B pharmacies.
              Compounded medications are not FDA-approved.
            </p>
            <p className="text-center mt-4">
              © {new Date().getFullYear()} VitalPath Health, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
