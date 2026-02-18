import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-text-primary mb-4">Terms of Service</h1>
          <p className="text-text-secondary mb-8">Last updated: February 2025</p>

          <div className="prose prose-lg max-w-none text-text-secondary">
            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using VitalPath Health, Inc.&apos;s (&ldquo;VitalPath,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                website, mobile applications, or services (collectively, the &ldquo;Services&rdquo;), you agree to be bound
                by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use
                our Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Eligibility</h2>
              <p>
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of a state where VitalPath is licensed to provide services</li>
                <li>Have the legal capacity to enter into a binding agreement</li>
                <li>Provide accurate, current, and complete information during registration</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Medical Services</h2>
              <p>
                VitalPath provides telehealth medical services through licensed healthcare providers. By using
                our Services, you understand and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Telehealth services are not a substitute for emergency care or in-person medical care when needed</li>
                <li>Our providers will exercise independent medical judgment in making treatment decisions</li>
                <li>Not all patients will be eligible for all treatments or medications</li>
                <li>Treatment outcomes vary and are not guaranteed</li>
                <li>You must provide accurate and complete health information</li>
                <li>You are responsible for following your treatment plan and provider instructions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Account Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep your password secure and confidential</li>
                <li>Immediately notify us of any unauthorized use of your account</li>
                <li>Not share your account with others or allow others to use your account</li>
                <li>Provide accurate and up-to-date information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Prohibited Conduct</h2>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide false or misleading health information</li>
                <li>Use the Services for any illegal purpose</li>
                <li>Attempt to obtain medications for others or for non-medical purposes</li>
                <li>Interfere with the proper functioning of the Services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the Services to harass, abuse, or threaten others</li>
                <li>Resell or redistribute any medications obtained through our Services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Payment and Subscription</h2>
              <p>
                By subscribing to our Services, you agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscriptions are billed monthly on a recurring basis</li>
                <li>Prices are subject to change with 30 days&apos; notice</li>
                <li>You authorize us to charge your payment method on file</li>
                <li>Refunds are provided in accordance with our refund policy</li>
                <li>Cancellation must be requested before your next billing cycle</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Intellectual Property</h2>
              <p>
                All content, trademarks, and intellectual property on our Services are owned by VitalPath or
                our licensors. You may not reproduce, distribute, or create derivative works without our
                written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Disclaimers</h2>
              <p>
                THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER
                EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE,
                OR ERROR-FREE.
              </p>
              <p className="mt-4">
                WE DO NOT GUARANTEE SPECIFIC TREATMENT OUTCOMES. INDIVIDUAL RESULTS MAY VARY. WEIGHT LOSS
                RESULTS DEPEND ON MANY FACTORS INCLUDING DIET, EXERCISE, AND ADHERENCE TO TREATMENT.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, VITALPATH SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, REGARDLESS OF THE CAUSE OF ACTION
                OR THE NATURE OF THE LIABILITY.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless VitalPath and its officers, directors, employees,
                and agents from any claims, damages, losses, or expenses arising out of your violation of
                these Terms or misuse of the Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Dispute Resolution</h2>
              <p>
                Any disputes arising out of these Terms or your use of the Services shall be resolved through
                binding arbitration in accordance with the rules of the American Arbitration Association.
                You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of
                California, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. We will notify you of material changes by posting
                the updated Terms on our website and updating the &ldquo;Last updated&rdquo; date. Continued use of
                the Services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p><strong>VitalPath Health, Inc.</strong></p>
                <p>Email: legal@vitalpath.com</p>
                <p>Phone: 1-800-VITAL (84825)</p>
                <p>Address: 548 Market Street, Suite 95673, San Francisco, CA 94104</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
