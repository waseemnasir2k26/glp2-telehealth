'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pill, Clock, Calendar, AlertCircle, CheckCircle, RefreshCw, Syringe, Info } from 'lucide-react';
import { PortalHeader } from '@/components/portal/Sidebar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import { mockMedications, mockMedicationHistory, injectionSites } from '@/lib/mock-data';

export default function MedicationsPage() {
  const [showRefillModal, setShowRefillModal] = useState(false);
  const [showSideEffectsModal, setShowSideEffectsModal] = useState(false);
  const medication = mockMedications[0];

  return (
    <div className="min-h-screen">
      <PortalHeader title="Medications" subtitle="Manage your prescriptions and track side effects" />

      <div className="p-6 lg:p-8 space-y-8">
        {/* Current Medication Card */}
        <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-8 text-white shadow-strong">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge variant="success" className="mb-2">Active Prescription</Badge>
                <h2 className="text-2xl font-serif mb-1">{medication.name}</h2>
                <p className="text-white/80">{medication.dosage} • {medication.frequency}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                className="bg-white text-primary hover:bg-white/90"
                icon={<RefreshCw className="w-5 h-5" />}
                onClick={() => setShowRefillModal(true)}
              >
                Request Refill
              </Button>
              <Button
                variant="ghost"
                className="border-white text-white hover:bg-white/10"
                icon={<AlertCircle className="w-5 h-5" />}
                onClick={() => setShowSideEffectsModal(true)}
              >
                Log Side Effects
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/20">
            <div>
              <p className="text-white/60 text-sm">Next Refill</p>
              <p className="text-lg font-semibold">{medication.nextRefill}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Refills Remaining</p>
              <p className="text-lg font-semibold">{medication.refillsRemaining}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Start Date</p>
              <p className="text-lg font-semibold">{medication.startDate}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Status</p>
              <p className="text-lg font-semibold capitalize">{medication.status}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dosage History */}
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Dosage History
            </h3>
            <div className="space-y-4">
              {mockMedicationHistory.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{entry.dosage}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-text-primary">{entry.date}</p>
                    <p className="text-sm text-text-secondary">{entry.note}</p>
                  </div>
                  {index === 0 && (
                    <Badge variant="primary">Current</Badge>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Injection Site Guide */}
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
              <Syringe className="w-5 h-5 text-primary" />
              Injection Site Rotation
            </h3>
            <p className="text-text-secondary mb-4">
              Rotate injection sites to prevent lipodystrophy (skin changes). Use each site only once per week.
            </p>
            <div className="space-y-3">
              {injectionSites.map((site, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${
                    site.recommended ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    site.recommended ? 'bg-green-100' : 'bg-gray-200'
                  }`}>
                    {site.recommended ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Info className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{site.name}</p>
                    <p className="text-sm text-text-secondary">{site.description}</p>
                  </div>
                  {site.recommended && (
                    <Badge variant="success" className="ml-auto">Recommended</Badge>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Instructions */}
        <Card>
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            Medication Instructions
          </h3>
          <p className="text-text-secondary leading-relaxed">{medication.instructions}</p>

          {medication.sideEffects.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="font-medium text-text-primary mb-3">Reported Side Effects</h4>
              <div className="flex flex-wrap gap-2">
                {medication.sideEffects.map((effect, index) => (
                  <Badge key={index} variant="warning">{effect}</Badge>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Refill Modal */}
      <Modal
        isOpen={showRefillModal}
        onClose={() => setShowRefillModal(false)}
        title="Request Refill"
        size="md"
      >
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="font-medium text-text-primary">{medication.name} {medication.dosage}</p>
            <p className="text-sm text-text-secondary">{medication.frequency}</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-blue-800">Refill Information</p>
              <p className="text-sm text-blue-700">
                You have {medication.refillsRemaining} refills remaining. Your refill will be processed
                and shipped within 2-3 business days.
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="ghost" className="flex-1" onClick={() => setShowRefillModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              className="flex-1"
              onClick={() => {
                alert('Refill requested! (Demo)');
                setShowRefillModal(false);
              }}
            >
              Confirm Refill
            </Button>
          </div>
        </div>
      </Modal>

      {/* Side Effects Modal */}
      <Modal
        isOpen={showSideEffectsModal}
        onClose={() => setShowSideEffectsModal(false)}
        title="Log Side Effects"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-text-secondary">
            Please select any side effects you&apos;ve experienced. This helps your provider
            optimize your treatment.
          </p>

          <div className="space-y-2">
            {['Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Headache', 'Fatigue', 'Injection site reaction', 'Loss of appetite', 'Other'].map((effect) => (
              <label key={effect} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="text-text-primary">{effect}</span>
              </label>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Describe your symptoms..."
              className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="ghost" className="flex-1" onClick={() => setShowSideEffectsModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              className="flex-1"
              onClick={() => {
                alert('Side effects logged! (Demo)');
                setShowSideEffectsModal(false);
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
