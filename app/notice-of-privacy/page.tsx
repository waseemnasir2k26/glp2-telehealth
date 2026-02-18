import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NoticeOfPrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-text-primary mb-4">Notice of Privacy Practices</h1>
          <p className="text-text-secondary mb-8">Effective Date: February 2025</p>

          <div className="bg-primary/5 rounded-xl p-6 mb-12 border border-primary/20">
            <p className="text-text-primary font-medium">
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED
              AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-text-secondary">
            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Our Commitment to Your Privacy</h2>
              <p>
                VitalPath Health, Inc. (&ldquo;VitalPath&rdquo;) understands that your medical information is personal.
                We are committed to protecting your medical information and complying with the Health Insurance
                Portability and Accountability Act of 1996 (&ldquo;HIPAA&rdquo;) and all applicable state privacy laws.
              </p>
              <p>
                This Notice of Privacy Practices (&ldquo;Notice&rdquo;) describes how we may use and disclose your
                protected health information (&ldquo;PHI&rdquo;) and your rights regarding your PHI.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">How We May Use and Disclose Your PHI</h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">For Treatment</h3>
              <p>
                We may use your PHI to provide, coordinate, or manage your health care. This includes consultations
                with other healthcare providers, referrals to specialists, and coordination with pharmacies to
                fulfill your prescriptions.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">For Payment</h3>
              <p>
                We may use and disclose your PHI to bill and collect payment for services. This may include
                sending claims to your insurance company, verifying coverage, and working with collection
                agencies if necessary.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">For Healthcare Operations</h3>
              <p>
                We may use your PHI for healthcare operations, including quality improvement activities,
                training, compliance programs, and business management activities necessary to run our practice.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">Other Permitted Uses and Disclosures</h3>
              <p>We may also use or disclose your PHI:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>As required by law</li>
                <li>For public health activities</li>
                <li>To report abuse, neglect, or domestic violence</li>
                <li>For health oversight activities</li>
                <li>In response to court orders or legal proceedings</li>
                <li>For law enforcement purposes</li>
                <li>To coroners, funeral directors, and organ donation organizations</li>
                <li>For research purposes (with appropriate safeguards)</li>
                <li>To avert a serious threat to health or safety</li>
                <li>For specialized government functions</li>
                <li>For workers&apos; compensation purposes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Uses Requiring Your Authorization</h2>
              <p>
                We will not use or disclose your PHI for purposes other than those described in this Notice
                without your written authorization. You may revoke an authorization at any time by submitting
                a written request, except to the extent we have already relied on the authorization.
              </p>
              <p className="mt-4">
                Specific uses that require your authorization include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Marketing communications</li>
                <li>Sale of your PHI</li>
                <li>Most uses of psychotherapy notes</li>
                <li>Disclosure to third parties not involved in your treatment, payment, or healthcare operations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Your Rights Regarding Your PHI</h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Right to Access</h3>
              <p>
                You have the right to inspect and obtain a copy of your PHI. We may charge a reasonable fee
                for copying and mailing costs. We may deny your request in certain circumstances, but you
                may request a review of our denial.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">Right to Request Amendment</h3>
              <p>
                You have the right to request that we amend your PHI if you believe it is incorrect or
                incomplete. We may deny your request if we did not create the information, if the information
                is not part of our records, or if we determine the information is accurate.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">Right to an Accounting of Disclosures</h3>
              <p>
                You have the right to request a list of disclosures we have made of your PHI. This list
                does not include disclosures for treatment, payment, or healthcare operations, or disclosures
                made with your authorization.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">Right to Request Restrictions</h3>
              <p>
                You have the right to request restrictions on how we use or disclose your PHI. We are not
                required to agree to your request, except that we must honor your request if you pay for
                services out-of-pocket and ask us not to disclose to your health plan.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">Right to Confidential Communications</h3>
              <p>
                You have the right to request that we communicate with you in a specific way or at a
                specific location. For example, you may request that we contact you only at your work
                email address.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">Right to a Paper Copy of This Notice</h3>
              <p>
                You have the right to receive a paper copy of this Notice at any time, even if you have
                agreed to receive it electronically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Our Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are required by law to maintain the privacy of your PHI</li>
                <li>We are required to provide you with this Notice of our legal duties and privacy practices</li>
                <li>We are required to notify you in the event of a breach of your unsecured PHI</li>
                <li>We will not use or disclose your PHI except as described in this Notice</li>
                <li>We reserve the right to change this Notice and make the new provisions effective for all PHI we maintain</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">File a Complaint</h2>
              <p>
                If you believe your privacy rights have been violated, you may file a complaint with us
                or with the Secretary of the U.S. Department of Health and Human Services. You will not
                be penalized for filing a complaint.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p><strong>To file a complaint with VitalPath:</strong></p>
                <p>Privacy Officer</p>
                <p>VitalPath Health, Inc.</p>
                <p>548 Market Street, Suite 95673</p>
                <p>San Francisco, CA 94104</p>
                <p>Email: privacy@vitalpath.com</p>
                <p>Phone: 1-800-VITAL (84825)</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p><strong>To file a complaint with HHS:</strong></p>
                <p>Office for Civil Rights</p>
                <p>U.S. Department of Health and Human Services</p>
                <p>Website: www.hhs.gov/ocr/privacy/hipaa/complaints</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Changes to This Notice</h2>
              <p>
                We reserve the right to change this Notice and make the new provisions effective for all
                PHI we maintain. If we make material changes, we will post a revised Notice on our website
                and make it available upon request.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Contact Information</h2>
              <p>
                For more information about our privacy practices or to exercise your rights, please contact:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p><strong>VitalPath Privacy Officer</strong></p>
                <p>Email: privacy@vitalpath.com</p>
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
