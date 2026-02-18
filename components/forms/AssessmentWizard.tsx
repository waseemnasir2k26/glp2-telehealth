'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Clipboard, Target, AlertCircle, FileCheck, CreditCard, Check,
  ChevronRight, ChevronLeft, Calendar, Scale, Ruler
} from 'lucide-react';
import Button from '../ui/Button';
import Input, { Select, Checkbox, Textarea } from '../ui/Input';
import Card from '../ui/Card';
import { ProgressBar } from '../ui/ProgressRing';
import { states, medicalConditions } from '@/lib/mock-data';
import { calculateBMI, getBMICategory } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Medical History', icon: Clipboard },
  { id: 3, title: 'Goals', icon: Target },
  { id: 4, title: 'Eligibility', icon: AlertCircle },
  { id: 5, title: 'Consent', icon: FileCheck },
  { id: 6, title: 'Schedule', icon: Calendar },
];

interface FormData {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  heightFeet: string;
  heightInches: string;
  weight: string;
  state: string;
  // Medical History
  currentMedications: string;
  allergies: string;
  previousWeightLoss: string;
  conditions: string[];
  // Goals
  goalWeight: string;
  motivations: string[];
  previousMedications: string;
  exerciseFrequency: string;
  dietaryPreferences: string;
  // Consent
  telehealthConsent: boolean;
  hipaaConsent: boolean;
  financialConsent: boolean;
  signature: string;
}

export default function AssessmentWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    heightFeet: '',
    heightInches: '',
    weight: '',
    state: '',
    currentMedications: '',
    allergies: '',
    previousWeightLoss: '',
    conditions: [],
    goalWeight: '',
    motivations: [],
    previousMedications: '',
    exerciseFrequency: '',
    dietaryPreferences: '',
    telehealthConsent: false,
    hipaaConsent: false,
    financialConsent: false,
    signature: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const updateFormData = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleCondition = (condition: string) => {
    setFormData(prev => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter(c => c !== condition)
        : [...prev.conditions, condition]
    }));
  };

  const toggleMotivation = (motivation: string) => {
    setFormData(prev => ({
      ...prev,
      motivations: prev.motivations.includes(motivation)
        ? prev.motivations.filter(m => m !== motivation)
        : [...prev.motivations, motivation]
    }));
  };

  const calculateUserBMI = () => {
    if (formData.heightFeet && formData.heightInches && formData.weight) {
      const totalInches = parseInt(formData.heightFeet) * 12 + parseInt(formData.heightInches);
      return calculateBMI(parseInt(formData.weight), totalInches);
    }
    return null;
  };

  const bmi = calculateUserBMI();
  const bmiCategory = bmi ? getBMICategory(bmi) : null;
  const isEligible = bmi ? bmi >= 27 : false;

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 2000);
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-serif text-text-primary mb-4">
          Assessment Submitted!
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          Thank you, {formData.firstName}! Your assessment has been received and will be
          reviewed by a licensed provider within 24 hours.
        </p>
        <Card className="text-left max-w-md mx-auto">
          <h3 className="font-semibold text-text-primary mb-4">What happens next?</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium text-primary">1</span>
              <span className="text-text-secondary">A physician will review your assessment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium text-primary">2</span>
              <span className="text-text-secondary">You&apos;ll receive an email with your appointment details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium text-primary">3</span>
              <span className="text-text-secondary">Complete your video consultation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium text-primary">4</span>
              <span className="text-text-secondary">If approved, receive your medication at home</span>
            </li>
          </ol>
        </Card>
        <p className="mt-8 text-text-secondary">
          Confirmation email sent to: <strong className="text-text-primary">{formData.email || 'your email'}</strong>
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all
                  ${currentStep >= step.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-text-secondary'
                  }
                `}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`hidden sm:block w-16 lg:w-24 h-1 mx-2 rounded ${
                    currentStep > step.id ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <ProgressBar
          progress={(currentStep / 6) * 100}
          height={4}
          color="#0D4F4F"
          label={`Step ${currentStep} of 6: ${steps[currentStep - 1].title}`}
          showLabel
        />
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-2">Personal Information</h2>
                  <p className="text-text-secondary">Let&apos;s start with some basic information about you.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    required
                  />
                  <Input
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    required
                  />
                  <Input
                    label="Date of Birth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                    required
                  />
                  <Select
                    label="Gender"
                    value={formData.gender}
                    onChange={(e) => updateFormData('gender', e.target.value)}
                    options={[
                      { value: '', label: 'Select gender' },
                      { value: 'female', label: 'Female' },
                      { value: 'male', label: 'Male' },
                      { value: 'other', label: 'Other' },
                      { value: 'prefer-not', label: 'Prefer not to say' },
                    ]}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Height <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Input
                          type="number"
                          placeholder="ft"
                          value={formData.heightFeet}
                          onChange={(e) => updateFormData('heightFeet', e.target.value)}
                          icon={<Ruler className="w-4 h-4" />}
                        />
                      </div>
                      <div className="flex-1">
                        <Input
                          type="number"
                          placeholder="in"
                          value={formData.heightInches}
                          onChange={(e) => updateFormData('heightInches', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <Input
                    label="Current Weight (lbs)"
                    type="number"
                    placeholder="Enter weight"
                    value={formData.weight}
                    onChange={(e) => updateFormData('weight', e.target.value)}
                    icon={<Scale className="w-4 h-4" />}
                    required
                  />
                  <Select
                    label="State of Residence"
                    value={formData.state}
                    onChange={(e) => updateFormData('state', e.target.value)}
                    options={[
                      { value: '', label: 'Select state' },
                      ...states.map(s => ({ value: s, label: s }))
                    ]}
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Medical History */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-2">Medical History</h2>
                  <p className="text-text-secondary">Please provide information about your health history.</p>
                </div>

                <div className="space-y-6">
                  <Textarea
                    label="Current Medications"
                    placeholder="List any medications you're currently taking, including dosage..."
                    value={formData.currentMedications}
                    onChange={(e) => updateFormData('currentMedications', e.target.value)}
                    helperText="Include prescription and over-the-counter medications"
                  />

                  <Textarea
                    label="Known Allergies"
                    placeholder="List any allergies to medications, foods, or other substances..."
                    value={formData.allergies}
                    onChange={(e) => updateFormData('allergies', e.target.value)}
                  />

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-3">
                      Medical Conditions <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-text-secondary mb-4">
                      Please select any conditions that apply to you:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {medicalConditions.map((condition) => (
                        <label
                          key={condition}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                            formData.conditions.includes(condition)
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.conditions.includes(condition)}
                            onChange={() => toggleCondition(condition)}
                            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <span className="text-text-primary">{condition}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Goals */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-2">Weight Loss Goals</h2>
                  <p className="text-text-secondary">Tell us about your weight management goals.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Goal Weight (lbs)"
                    type="number"
                    placeholder="Enter your goal weight"
                    value={formData.goalWeight}
                    onChange={(e) => updateFormData('goalWeight', e.target.value)}
                    icon={<Target className="w-4 h-4" />}
                    required
                  />
                  <Select
                    label="Exercise Frequency"
                    value={formData.exerciseFrequency}
                    onChange={(e) => updateFormData('exerciseFrequency', e.target.value)}
                    options={[
                      { value: '', label: 'Select frequency' },
                      { value: 'none', label: 'No regular exercise' },
                      { value: '1-2', label: '1-2 times per week' },
                      { value: '3-4', label: '3-4 times per week' },
                      { value: '5+', label: '5+ times per week' },
                    ]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    What motivates your weight loss journey?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Better health', 'More energy', 'Improved mobility', 'Medical recommendation', 'Appearance', 'Mental health', 'Family/relationships', 'Career/confidence'].map((motivation) => (
                      <button
                        key={motivation}
                        type="button"
                        onClick={() => toggleMotivation(motivation)}
                        className={`px-4 py-2 rounded-full border transition-all ${
                          formData.motivations.includes(motivation)
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-200 text-text-primary hover:border-gray-300'
                        }`}
                      >
                        {motivation}
                      </button>
                    ))}
                  </div>
                </div>

                <Textarea
                  label="Previous Weight Loss Medications"
                  placeholder="List any weight loss medications you've tried before..."
                  value={formData.previousMedications}
                  onChange={(e) => updateFormData('previousMedications', e.target.value)}
                />

                <Select
                  label="Dietary Preferences"
                  value={formData.dietaryPreferences}
                  onChange={(e) => updateFormData('dietaryPreferences', e.target.value)}
                  options={[
                    { value: '', label: 'Select preference' },
                    { value: 'none', label: 'No specific diet' },
                    { value: 'low-carb', label: 'Low carb / Keto' },
                    { value: 'vegetarian', label: 'Vegetarian' },
                    { value: 'vegan', label: 'Vegan' },
                    { value: 'mediterranean', label: 'Mediterranean' },
                    { value: 'other', label: 'Other' },
                  ]}
                />
              </div>
            )}

            {/* Step 4: Eligibility */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-2">Eligibility Screening</h2>
                  <p className="text-text-secondary">Let&apos;s check if you&apos;re a candidate for GLP-2 therapy.</p>
                </div>

                {bmi && (
                  <div className={`p-6 rounded-xl border-2 ${isEligible ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isEligible ? 'bg-green-100' : 'bg-yellow-100'}`}>
                        {isEligible ? (
                          <Check className="w-6 h-6 text-green-600" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-yellow-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                          Your BMI: {bmi.toFixed(1)}
                        </h3>
                        <p className={`font-medium ${bmiCategory?.color}`}>
                          Category: {bmiCategory?.category}
                        </p>
                        <p className="text-text-secondary mt-2">
                          {isEligible
                            ? 'Based on your BMI, you may be a candidate for GLP-2 therapy. A physician will review your complete assessment.'
                            : 'GLP-2 therapy is typically prescribed for patients with a BMI of 27 or higher. A physician will review your assessment to determine eligibility.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {formData.conditions.includes('Pregnancy/Breastfeeding') && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Important Notice</p>
                      <p className="text-red-700 text-sm">
                        GLP-2 therapy is not recommended during pregnancy or breastfeeding.
                        Please consult with your healthcare provider.
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">What happens next?</h4>
                  <p className="text-blue-700 text-sm">
                    After you complete this assessment, a licensed physician will review your
                    information and determine if GLP-2 therapy is right for you. You&apos;ll receive
                    a response within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Consent */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-2">Consent & Agreement</h2>
                  <p className="text-text-secondary">Please review and agree to the following terms.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl max-h-40 overflow-y-auto text-sm text-text-secondary">
                    <h4 className="font-semibold text-text-primary mb-2">Telehealth Informed Consent</h4>
                    <p className="mb-2">
                      I understand that telehealth involves the use of electronic communications to enable healthcare
                      providers at different locations to share individual patient medical information for the purpose
                      of improving patient care. I understand that I may expect the anticipated benefits from the use
                      of telehealth in my care, but that no results can be guaranteed or assured.
                    </p>
                    <p>
                      I understand that the laws that protect the privacy and confidentiality of medical information
                      also apply to telehealth. I have been advised of all the potential risks and benefits associated
                      with telehealth services and have had my questions answered to my satisfaction.
                    </p>
                  </div>
                  <Checkbox
                    label="I have read and agree to the Telehealth Informed Consent"
                    checked={formData.telehealthConsent}
                    onChange={(e) => updateFormData('telehealthConsent', e.target.checked)}
                  />

                  <div className="p-4 bg-gray-50 rounded-xl max-h-40 overflow-y-auto text-sm text-text-secondary">
                    <h4 className="font-semibold text-text-primary mb-2">HIPAA Notice of Privacy Practices</h4>
                    <p className="mb-2">
                      This notice describes how medical information about you may be used and disclosed and how you
                      can get access to this information. We are required by law to maintain the privacy of your
                      protected health information and to provide you with this notice of our legal duties and privacy
                      practices with respect to your protected health information.
                    </p>
                    <p>
                      We will not use or disclose your health information without your authorization, except as
                      described in this notice.
                    </p>
                  </div>
                  <Checkbox
                    label="I acknowledge receipt of the HIPAA Notice of Privacy Practices"
                    checked={formData.hipaaConsent}
                    onChange={(e) => updateFormData('hipaaConsent', e.target.checked)}
                  />

                  <Checkbox
                    label="I understand and agree to the financial terms and treatment costs"
                    description="I understand that payment is due at the time of service and agree to the subscription pricing."
                    checked={formData.financialConsent}
                    onChange={(e) => updateFormData('financialConsent', e.target.checked)}
                  />

                  <div className="pt-4">
                    <Input
                      label="Electronic Signature (Type your full name)"
                      placeholder="Type your full legal name"
                      value={formData.signature}
                      onChange={(e) => updateFormData('signature', e.target.value)}
                      helperText="By typing your name, you are electronically signing these agreements"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Schedule & Payment */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif text-text-primary mb-2">Schedule & Payment</h2>
                  <p className="text-text-secondary">Choose your consultation time and complete payment.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-3">
                      Preferred Consultation Date
                    </label>
                    <Input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <Select
                    label="Preferred Time"
                    options={[
                      { value: '', label: 'Select time' },
                      { value: 'morning', label: 'Morning (9am - 12pm)' },
                      { value: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
                      { value: 'evening', label: 'Evening (5pm - 8pm)' },
                    ]}
                  />
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-medium text-text-primary mb-2">Payment Information</h4>
                  <p className="text-sm text-text-secondary mb-4">
                    Your card will be charged after your consultation if treatment is prescribed.
                  </p>
                  <div className="space-y-4">
                    <Input
                      label="Card Number"
                      placeholder="4242 4242 4242 4242"
                      icon={<CreditCard className="w-4 h-4" />}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Expiry Date"
                        placeholder="MM/YY"
                      />
                      <Input
                        label="CVC"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-primary">Initial Consultation</span>
                    <span className="font-semibold text-primary">FREE</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    After your consultation, if GLP-2 therapy is prescribed, your monthly subscription will begin.
                    Plans start at $199/month.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={currentStep === 1}
          icon={<ChevronLeft className="w-5 h-5" />}
        >
          Previous
        </Button>

        {currentStep < 6 ? (
          <Button
            variant="primary"
            onClick={handleNext}
            icon={<ChevronRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Continue
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            isLoading={isSubmitting}
            disabled={!formData.telehealthConsent || !formData.hipaaConsent || !formData.financialConsent || !formData.signature}
          >
            Submit Assessment
          </Button>
        )}
      </div>
    </div>
  );
}
