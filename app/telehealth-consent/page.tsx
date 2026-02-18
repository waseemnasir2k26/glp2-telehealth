import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TelehealthConsentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-text-primary mb-4">Telehealth Informed Consent</h1>
          <p className="text-text-secondary mb-8">Last updated: February 2025</p>

          <div className="prose prose-lg max-w-none text-text-secondary">
            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">What is Telehealth?</h2>
              <p>
                Telehealth involves the use of electronic communications to enable healthcare providers at
                different locations to share individual patient medical information for the purpose of
                improving patient care. This includes the use of secure video conferencing, audio calls,
                and electronic messaging to provide medical consultations and manage your health care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Benefits of Telehealth</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Increased access to healthcare services regardless of your location</li>
                <li>Reduced travel time and associated costs</li>
                <li>Convenience of receiving care from your home or other private location</li>
                <li>Timely access to medical consultations</li>
                <li>Ability to involve family members or caregivers more easily</li>
                <li>Continuity of care when in-person visits are not possible</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Potential Risks</h2>
              <p>
                As with any medical service, there are potential risks associated with telehealth:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Technical difficulties:</strong> Poor internet connection or equipment failures
                  may interrupt or prevent the telehealth session
                </li>
                <li>
                  <strong>Limitations of examination:</strong> The provider cannot perform a physical examination
                  and must rely on your self-reported symptoms and video observation
                </li>
                <li>
                  <strong>Security risks:</strong> Despite security measures, electronic communications could
                  potentially be intercepted
                </li>
                <li>
                  <strong>Diagnostic limitations:</strong> In some cases, the provider may determine that telehealth
                  is not appropriate and an in-person visit is needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Your Rights</h2>
              <p>
                By participating in telehealth services, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Right to Withdraw:</strong> You may withdraw your consent to telehealth services at
                  any time without affecting your right to future care or treatment
                </li>
                <li>
                  <strong>Right to Privacy:</strong> Your telehealth sessions are protected by the same
                  confidentiality and privacy protections as in-person visits
                </li>
                <li>
                  <strong>Right to Information:</strong> You may ask questions about the telehealth process
                  and your treatment at any time
                </li>
                <li>
                  <strong>Right to Request In-Person Care:</strong> You may request an in-person visit instead
                  of or in addition to telehealth services
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Your Responsibilities</h2>
              <p>
                To ensure effective telehealth services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete health information</li>
                <li>Ensure you are in a private, quiet location during telehealth sessions</li>
                <li>Test your equipment before scheduled appointments</li>
                <li>Follow the treatment plan and instructions provided by your healthcare provider</li>
                <li>Contact your provider or seek emergency care if your condition worsens</li>
                <li>Understand that telehealth is not intended for emergencies — call 911 for emergencies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Privacy and Security</h2>
              <p>
                We use industry-standard encryption and security measures to protect your telehealth sessions.
                However, no internet-based communication is completely secure. By consenting to telehealth services,
                you acknowledge and accept the inherent risks of electronic communication.
              </p>
              <p className="mt-4">
                Your telehealth sessions may be recorded for quality assurance and medical record purposes.
                You will be notified if a session is being recorded and have the right to decline recording.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Emergency Situations</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-800 font-medium">
                  <strong>IMPORTANT:</strong> Telehealth services are NOT intended for emergency situations.
                  If you experience a medical emergency, chest pain, difficulty breathing, severe allergic
                  reaction, thoughts of self-harm, or any other life-threatening condition:
                </p>
                <ul className="list-disc pl-6 mt-4 text-red-700 space-y-2">
                  <li>Call 911 immediately</li>
                  <li>Go to your nearest emergency room</li>
                  <li>Call the National Suicide Prevention Lifeline at 988 if experiencing mental health crisis</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Consent Acknowledgment</h2>
              <p>
                By using VitalPath&apos;s telehealth services, you confirm that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You have read and understand this Telehealth Informed Consent</li>
                <li>You have had the opportunity to ask questions about telehealth</li>
                <li>You understand the benefits and risks of telehealth services</li>
                <li>You voluntarily consent to participate in telehealth services</li>
                <li>You understand you may withdraw consent at any time</li>
                <li>You understand that telehealth is not appropriate for emergency situations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Contact Us</h2>
              <p>
                If you have questions about telehealth services, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p><strong>VitalPath Health, Inc.</strong></p>
                <p>Email: support@vitalpath.com</p>
                <p>Phone: 1-800-VITAL (84825)</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
