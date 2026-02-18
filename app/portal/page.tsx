'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { ComplianceBadge } from '@/components/ui/Badge';

export default function PortalLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      router.push('/portal/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-600 to-primary-800 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
            <span className="text-primary font-bold text-xl">V</span>
          </div>
          <span className="text-2xl font-bold text-white font-serif">VitalPath</span>
        </Link>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-strong p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-serif text-text-primary mb-2">Patient Portal</h1>
            <p className="text-text-secondary">
              Sign in to access your health dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="w-5 h-5" />}
              required
            />

            <div>
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock className="w-5 h-5" />}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="text-sm text-text-secondary">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              isLoading={isLoading}
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-text-secondary mb-4">
              New patient?{' '}
              <Link href="/assessment" className="text-primary font-medium hover:underline">
                Start your assessment
              </Link>
            </p>

            <div className="flex justify-center gap-4">
              <ComplianceBadge type="hipaa" />
              <ComplianceBadge type="ssl" />
            </div>
          </div>
        </div>

        {/* Demo notice */}
        <p className="text-center text-white/60 text-sm mt-6">
          Demo Mode: Click &quot;Sign In&quot; to access the patient dashboard
        </p>
      </motion.div>
    </div>
  );
}
