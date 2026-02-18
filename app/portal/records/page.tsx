'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingDown, TrendingUp, Minus, CheckCircle, ExternalLink } from 'lucide-react';
import { PortalHeader } from '@/components/portal/Sidebar';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { mockLabResults, mockConsentForms, mockPatient } from '@/lib/mock-data';

export default function RecordsPage() {
  const [activeTab, setActiveTab] = useState<'labs' | 'documents'>('labs');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'high':
        return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'low':
        return <TrendingDown className="w-4 h-4 text-yellow-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'text-green-600 bg-green-50';
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'low':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen">
      <PortalHeader title="Health Records" subtitle="View your lab results and medical documents" />

      <div className="p-6 lg:p-8 space-y-8">
        {/* Patient Summary Card */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-text-primary">{mockPatient.name}</h2>
              <p className="text-text-secondary">
                Patient ID: {mockPatient.id} • DOB: {mockPatient.dateOfBirth} • Height: {mockPatient.height}
              </p>
            </div>
            <Button variant="ghost" icon={<Download className="w-5 h-5" />}>
              Download All Records
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('labs')}
            className={`pb-4 px-2 font-medium transition-colors relative ${
              activeTab === 'labs' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Lab Results
            {activeTab === 'labs' && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-4 px-2 font-medium transition-colors relative ${
              activeTab === 'documents' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Documents
            {activeTab === 'documents' && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </button>
        </div>

        {/* Lab Results */}
        {activeTab === 'labs' && (
          <div className="space-y-6">
            {mockLabResults.map((labResult, index) => (
              <motion.div
                key={labResult.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{labResult.type}</h3>
                        <p className="text-sm text-text-secondary flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {labResult.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" icon={<Download className="w-4 h-4" />}>
                      PDF
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="text-left py-3 text-sm font-medium text-text-secondary">Test</th>
                          <th className="text-left py-3 text-sm font-medium text-text-secondary">Result</th>
                          <th className="text-left py-3 text-sm font-medium text-text-secondary">Reference Range</th>
                          <th className="text-left py-3 text-sm font-medium text-text-secondary">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {labResult.results.map((result, resultIndex) => (
                          <tr key={resultIndex} className="border-b border-gray-50 last:border-0">
                            <td className="py-3 text-text-primary font-medium">{result.name}</td>
                            <td className="py-3 text-text-primary">
                              {result.value} {result.unit}
                            </td>
                            <td className="py-3 text-text-secondary">{result.range}</td>
                            <td className="py-3">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                                {getStatusIcon(result.status)}
                                {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Documents */}
        {activeTab === 'documents' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Signed Documents</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {mockConsentForms.map((form, index) => (
                <motion.div
                  key={form.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-medium transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-text-primary truncate">{form.name}</h4>
                        <p className="text-sm text-text-secondary">Signed on {form.signedDate}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                          View
                        </Button>
                        <Button variant="ghost" size="sm" icon={<Download className="w-4 h-4" />}>
                          PDF
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Medical History Summary */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Medical History Summary</h3>
              <Card>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-text-secondary mb-2">Current Conditions</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default">Obesity (Class 1)</Badge>
                      <Badge variant="default">Prediabetes</Badge>
                      <Badge variant="default">Hyperlipidemia</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-secondary mb-2">Allergies</h4>
                    <p className="text-text-primary">No known allergies</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-secondary mb-2">Current Medications</h4>
                    <p className="text-text-primary">Semaglutide 1.0mg weekly</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-secondary mb-2">Primary Provider</h4>
                    <p className="text-text-primary">{mockPatient.provider}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
