import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '@/components/ui/AnimatedSection';
import { Heart, Eye, Users, Shield, Award, Building } from 'lucide-react';
import { mockProviders } from '@/lib/mock-data';

const values = [
  {
    icon: Heart,
    title: 'Evidence-Based Care',
    description: 'Every treatment decision is grounded in the latest clinical research and medical guidelines.',
  },
  {
    icon: Shield,
    title: 'Patient Privacy',
    description: 'Your health information is protected with enterprise-grade security and strict HIPAA compliance.',
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Quality healthcare should be available to everyone, regardless of location or schedule.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear pricing, honest communication, and no hidden fees or surprise charges.',
  },
];

const partners = [
  { name: 'Curexa Pharmacy', type: 'Licensed 503B Pharmacy' },
  { name: 'LabCorp', type: 'Laboratory Services' },
  { name: 'Stripe', type: 'Payment Processing' },
  { name: 'AWS Healthcare', type: 'HIPAA Cloud Infrastructure' },
];

export default function AboutPage() {
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
                Transforming Lives Through <br className="hidden sm:block" />
                Modern Medicine
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                VitalPath was founded with a simple mission: to make evidence-based weight
                management accessible to everyone through the power of telehealth.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission & Story */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Our Story
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary mb-6">
                  Founded by Healthcare Professionals
                </h2>
                <div className="prose prose-lg text-text-secondary">
                  <p>
                    VitalPath was founded in 2022 by a team of physicians, technologists, and
                    healthcare administrators who saw the need for a better approach to weight
                    management care.
                  </p>
                  <p>
                    After witnessing countless patients struggle to access quality obesity treatment
                    due to long wait times, geographical barriers, and stigma, we built VitalPath
                    to provide compassionate, judgment-free care that meets patients where they are.
                  </p>
                  <p>
                    Today, we&apos;ve helped over 10,000 patients across 48 states achieve their
                    weight management goals with personalized GLP-2 therapy protocols and ongoing
                    medical supervision.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary/5 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-text-secondary">Patients Treated</div>
                  </div>
                  <div className="bg-accent/10 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-accent-600 mb-2">48</div>
                    <div className="text-text-secondary">States Served</div>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
                    <div className="text-text-secondary">Patient Rating</div>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-text-secondary">Providers</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Our Values
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                What We Stand For
              </h2>
            </AnimatedSection>

            <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <StaggeredItem key={index}>
                  <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary">
                      {value.description}
                    </p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </section>

        {/* Medical Team */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Our Team
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                Meet Our Medical Team
              </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                Our board-certified physicians specialize in metabolic health and weight management.
              </p>
            </AnimatedSection>

            <StaggeredContainer className="grid md:grid-cols-3 gap-8">
              {mockProviders.map((provider, index) => (
                <StaggeredItem key={provider.id}>
                  <div className="bg-background rounded-2xl p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {provider.name.split(' ').slice(1).map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {provider.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{provider.title}</p>
                    <p className="text-text-secondary text-sm mb-4">{provider.specialty}</p>
                    <p className="text-text-secondary text-sm">{provider.bio}</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {provider.credentials.slice(0, 2).map((cred, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </section>

        {/* Partners */}
        <section className="py-24 bg-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Partners
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif">
                Trusted Partners
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                We partner with industry-leading organizations to deliver the best care.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                  <div className="w-16 h-16 rounded-xl bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <Building className="w-8 h-8 text-white/60" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{partner.name}</h3>
                  <p className="text-sm text-gray-400">{partner.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-serif text-text-primary mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Join thousands of patients who have transformed their lives with VitalPath.
                Take our free assessment today.
              </p>
              <a
                href="/assessment"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-400 transition-all duration-300 shadow-soft hover:shadow-medium"
              >
                Start Free Assessment
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
