import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import {
  ClipboardList, Video, FileText, Truck, ArrowRight,
  CheckCircle, Clock, Shield, MessageSquare, Scale,
  Calendar, Pill, HeartPulse
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Complete Online Assessment',
    duration: '5 minutes',
    description: 'Answer questions about your health history, current medications, and weight management goals. Our secure platform ensures your information is protected.',
    details: [
      'Personal health information',
      'Medical history & conditions',
      'Current medications & allergies',
      'Weight loss goals & motivations',
    ],
  },
  {
    number: '02',
    icon: Video,
    title: 'Physician Consultation',
    duration: '15-20 minutes',
    description: 'Meet with a board-certified physician via secure video call. They\'ll review your assessment, discuss treatment options, and answer your questions.',
    details: [
      'One-on-one video consultation',
      'Review of your health profile',
      'Discussion of treatment options',
      'Personalized recommendations',
    ],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Personalized Treatment Plan',
    duration: 'Within 24 hours',
    description: 'If GLP-2 therapy is right for you, your physician will create a customized treatment plan with the optimal medication and dosage for your needs.',
    details: [
      'Custom medication protocol',
      'Dosage titration schedule',
      'Lifestyle recommendations',
      'Clear instructions & guidelines',
    ],
  },
  {
    number: '04',
    icon: Truck,
    title: 'Medication Delivered',
    duration: '2-3 business days',
    description: 'Your medication is shipped directly from our licensed pharmacy partners in discreet, temperature-controlled packaging right to your door.',
    details: [
      'Discreet packaging',
      'Temperature-controlled shipping',
      'Free delivery included',
      'Easy-to-follow instructions',
    ],
  },
];

const expectations = [
  {
    icon: Scale,
    title: 'Regular Weigh-Ins',
    description: 'Track your progress in the patient portal. Your care team monitors your journey and adjusts treatment as needed.',
  },
  {
    icon: Calendar,
    title: 'Monthly Check-Ins',
    description: 'Regular video consultations with your physician to review progress, address concerns, and optimize your treatment.',
  },
  {
    icon: MessageSquare,
    title: 'Unlimited Messaging',
    description: 'Message your care team anytime with questions. Most messages receive a response within 24 hours.',
  },
  {
    icon: Pill,
    title: 'Automatic Refills',
    description: 'Never worry about running out. We coordinate refills and ship your medication before you need it.',
  },
];

const eligibility = {
  qualify: [
    'BMI of 30 or higher (obesity)',
    'BMI of 27+ with weight-related conditions',
    'Adults 18 years and older',
    'Committed to lifestyle changes',
  ],
  disqualify: [
    'Currently pregnant or breastfeeding',
    'Personal or family history of MEN type 2',
    'History of medullary thyroid cancer',
    'Severe kidney or liver disease',
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary to-primary-700 text-white overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6">
                How VitalPath Works
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                From your first assessment to ongoing care, we make getting treatment
                simple, convenient, and effective. Here&apos;s what to expect.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Start in 5 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>100% Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-accent" />
                  <span>Physician-supervised</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                The Process
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                Four Simple Steps
              </h2>
            </AnimatedSection>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-6xl font-bold text-primary/10">{step.number}</span>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-serif text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 text-text-secondary mb-4">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                      <p className="text-text-secondary text-lg mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                            <span className="text-text-secondary">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 aspect-video flex items-center justify-center">
                        <div className="text-center">
                          <step.icon className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                          <p className="text-text-secondary">Step {step.number} Illustration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Ongoing Care
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                What to Expect During Treatment
              </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                Your care doesn&apos;t stop after your first prescription. We provide continuous
                support throughout your weight management journey.
              </p>
            </AnimatedSection>

            <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expectations.map((item, index) => (
                <StaggeredItem key={index}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {item.description}
                    </p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Eligibility
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                Who Is GLP-2 Therapy For?
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="bg-green-50 rounded-2xl p-8 h-full border border-green-100">
                  <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    You May Qualify If:
                  </h3>
                  <ul className="space-y-4">
                    {eligibility.qualify.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-green-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-red-50 rounded-2xl p-8 h-full border border-red-100">
                  <h3 className="text-xl font-semibold text-red-800 mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    You May Not Qualify If:
                  </h3>
                  <ul className="space-y-4">
                    {eligibility.disqualify.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 text-xs">✕</span>
                        </div>
                        <span className="text-red-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} className="text-center mt-8">
              <p className="text-text-secondary">
                Not sure if you qualify? Take our free assessment and a physician will review your eligibility.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Take the first step towards a healthier you. Our assessment is free,
                quick, and completely confidential.
              </p>
              <Link href="/assessment">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Start Free Assessment
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
