import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-text-primary mb-4">Privacy Policy</h1>
          <p className="text-text-secondary mb-8">Last updated: February 2025</p>

          <div className="prose prose-lg max-w-none text-text-secondary">
            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Introduction</h2>
              <p>
                VitalPath Health, Inc. (&ldquo;VitalPath,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your
                privacy and the security of your personal and health information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our website, use our services,
                or interact with us in any way.
              </p>
              <p>
                We are a covered entity under the Health Insurance Portability and Accountability Act of 1996
                (&ldquo;HIPAA&rdquo;) and comply with all applicable federal and state healthcare privacy laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Date of birth and gender</li>
                <li>Payment and billing information</li>
                <li>Insurance information</li>
                <li>Government-issued identification (as required for identity verification)</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">Protected Health Information (PHI)</h3>
              <p>As a healthcare provider, we collect PHI including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Medical history and current health conditions</li>
                <li>Medications and allergies</li>
                <li>Lab results and diagnostic information</li>
                <li>Treatment records and clinical notes</li>
                <li>Communications with healthcare providers</li>
                <li>Height, weight, and vital signs</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">Technical Information</h3>
              <p>When you use our website or services, we automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device identifiers</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Treatment:</strong> To provide medical care, including telehealth consultations, prescriptions, and ongoing treatment management</li>
                <li><strong>Payment:</strong> To process payments, verify insurance coverage, and manage billing</li>
                <li><strong>Healthcare Operations:</strong> To improve our services, conduct quality assessments, and train staff</li>
                <li><strong>Communication:</strong> To send appointment reminders, health information, and respond to your inquiries</li>
                <li><strong>Legal Compliance:</strong> To comply with federal and state laws and regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">How We Share Your Information</h2>
              <p>
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Healthcare Providers:</strong> With physicians and pharmacies involved in your care</li>
                <li><strong>Business Associates:</strong> With vendors who help us provide services (bound by HIPAA agreements)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Your Authorization:</strong> With your explicit written consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Your Rights</h2>
              <p>Under HIPAA and applicable state laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and obtain copies of your medical records</li>
                <li>Request amendments to your health information</li>
                <li>Request restrictions on how we use or disclose your information</li>
                <li>Receive confidential communications</li>
                <li>Obtain an accounting of disclosures</li>
                <li>File a complaint if you believe your privacy rights have been violated</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>256-bit SSL/TLS encryption for data in transit</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on HIPAA and security protocols</li>
                <li>Physical security controls at our facilities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Data Retention</h2>
              <p>
                We retain your health information in accordance with federal and state medical record retention
                requirements. In most cases, medical records are retained for a minimum of 7 years after your
                last treatment. You may request deletion of certain non-medical personal information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p><strong>VitalPath Privacy Officer</strong></p>
                <p>Email: privacy@vitalpath.com</p>
                <p>Phone: 1-800-VITAL (84825)</p>
                <p>Address: 548 Market Street, Suite 95673, San Francisco, CA 94104</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes
                by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
                We encourage you to review this Privacy Policy periodically.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
