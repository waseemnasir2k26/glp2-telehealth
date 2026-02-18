import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AssessmentWizard from '@/components/forms/AssessmentWizard';
import { Shield, Clock, CheckCircle } from 'lucide-react';

export default function AssessmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif text-text-primary mb-4">
              Start Your Free Assessment
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Complete this quick health questionnaire to see if GLP-2 therapy is right for you.
              A licensed physician will review your assessment within 24 hours.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-text-secondary">
                <Clock className="w-5 h-5 text-primary" />
                <span>5-minute assessment</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Shield className="w-5 h-5 text-primary" />
                <span>HIPAA compliant</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Free consultation</span>
              </div>
            </div>
          </div>

          {/* Assessment Form */}
          <AssessmentWizard />
        </div>
      </main>
      <Footer />
    </>
  );
}
