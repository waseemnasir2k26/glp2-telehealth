import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection, { StaggeredContainer, StaggeredItem } from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import Link from 'next/link';
import {
  ArrowRight, Brain, Heart, Utensils, Activity,
  AlertTriangle, CheckCircle, Info, TrendingDown
} from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Appetite Regulation',
    description: 'GLP-2 medications work on the brain\'s hunger centers to reduce appetite and cravings, making it easier to stick to a healthy eating plan.',
  },
  {
    icon: Heart,
    title: 'Metabolic Improvement',
    description: 'Beyond weight loss, GLP-2 therapy can improve blood sugar control, cholesterol levels, and cardiovascular health markers.',
  },
  {
    icon: Utensils,
    title: 'Sustainable Results',
    description: 'By addressing the biological factors that drive weight gain, GLP-2 therapy helps create lasting changes in eating behavior.',
  },
  {
    icon: Activity,
    title: 'Increased Energy',
    description: 'Many patients report improved energy levels and mobility as they lose weight, enabling more active lifestyles.',
  },
];

const clinicalData = [
  { stat: '15-20%', label: 'Average body weight reduction' },
  { stat: '68 weeks', label: 'Landmark clinical trial duration' },
  { stat: '2.4mg', label: 'Standard maintenance dose' },
  { stat: '50%+', label: 'of patients achieve significant weight loss' },
];

const sideEffects = [
  { effect: 'Nausea', frequency: 'Common (especially starting)', management: 'Usually improves as body adjusts; starting with lower doses helps' },
  { effect: 'Constipation', frequency: 'Common', management: 'Increase fiber and water intake; over-the-counter remedies if needed' },
  { effect: 'Diarrhea', frequency: 'Common', management: 'Usually temporary; stay hydrated' },
  { effect: 'Headache', frequency: 'Occasional', management: 'Over-the-counter pain relievers; usually temporary' },
  { effect: 'Fatigue', frequency: 'Occasional', management: 'Often related to reduced calorie intake; usually improves' },
  { effect: 'Injection site reaction', frequency: 'Occasional', management: 'Rotate injection sites; apply ice if needed' },
];

const comparisonData = [
  { approach: 'Diet & Exercise Alone', effectiveness: '3-5%', sustainability: 'Low long-term success', medicalSupport: 'Limited' },
  { approach: 'Other Weight Loss Meds', effectiveness: '5-10%', sustainability: 'Moderate', medicalSupport: 'Varies' },
  { approach: 'GLP-2 Therapy', effectiveness: '15-20%', sustainability: 'High with ongoing use', medicalSupport: 'Comprehensive' },
  { approach: 'Bariatric Surgery', effectiveness: '25-30%', sustainability: 'High', medicalSupport: 'Intensive' },
];

const glp2Faqs = [
  {
    question: 'How does GLP-2 therapy cause weight loss?',
    answer: 'GLP-2 agonists like semaglutide mimic a natural hormone that regulates appetite. They slow gastric emptying (making you feel full longer), reduce hunger signals in the brain, and help regulate blood sugar. This combination leads to reduced calorie intake and weight loss.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most patients notice reduced appetite within the first few weeks. Visible weight loss typically begins within 4-6 weeks. Maximum effects are usually seen after 6-12 months of consistent treatment, with studies showing 15-20% body weight reduction.',
  },
  {
    question: 'Do I need to inject myself?',
    answer: 'Yes, GLP-2 medications are administered as a subcutaneous (under the skin) injection once weekly. The injection is simple and relatively painless using a small needle. We provide detailed instructions and support to help you feel comfortable.',
  },
  {
    question: 'What happens if I stop taking the medication?',
    answer: 'Weight regain is possible after stopping GLP-2 therapy, as the biological factors that contribute to weight gain may return. Many patients use the medication long-term, while others transition to maintenance strategies. Your physician will work with you to develop a sustainable plan.',
  },
  {
    question: 'Can I take GLP-2 with my other medications?',
    answer: 'GLP-2 medications can interact with some drugs, particularly diabetes medications. During your consultation, your physician will review all your medications to ensure safe and effective treatment.',
  },
];

export default function GLP2TherapyPage() {
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
                Understanding GLP-2 Therapy
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Learn how GLP-2 agonist medications work, what to expect from treatment,
                and whether they might be right for your weight management goals.
              </p>
              <Link href="/assessment">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Check Your Eligibility
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* What is GLP-2 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  The Science
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary mb-6">
                  What is GLP-2?
                </h2>
                <div className="prose prose-lg text-text-secondary">
                  <p>
                    GLP-2 (Glucagon-Like Peptide-2) is a hormone naturally produced in your gut
                    that plays a role in regulating appetite, digestion, and metabolism.
                  </p>
                  <p>
                    GLP-2 agonist medications, like semaglutide, work by mimicking this hormone
                    at higher levels. This helps you feel satisfied with less food, reduces
                    cravings, and improves your body&apos;s metabolic function.
                  </p>
                  <p>
                    Unlike crash diets or quick fixes, GLP-2 therapy addresses the underlying
                    biological factors that make weight management difficult—helping you achieve
                    sustainable results with proper medical supervision.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-primary/5 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">How GLP-2 Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Reduces Hunger Signals</h4>
                        <p className="text-text-secondary text-sm">Acts on brain receptors to decrease appetite</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Slows Digestion</h4>
                        <p className="text-text-secondary text-sm">Keeps you feeling full longer after meals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Improves Metabolism</h4>
                        <p className="text-text-secondary text-sm">Helps regulate blood sugar and insulin</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">Reduces Cravings</h4>
                        <p className="text-text-secondary text-sm">Decreases desire for high-calorie foods</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Clinical Results */}
        <section className="py-24 bg-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Clinical Evidence
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif">
                Proven Results
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                GLP-2 therapy is backed by extensive clinical research demonstrating
                significant weight loss results.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {clinicalData.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-accent mb-2">{item.stat}</div>
                    <div className="text-gray-400">{item.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Important Clinical Note</h3>
                    <p className="text-gray-300">
                      Results shown are based on landmark clinical trials using semaglutide 2.4mg.
                      Individual results may vary. GLP-2 therapy works best when combined with
                      lifestyle modifications including diet and exercise. Your physician will
                      discuss realistic expectations based on your specific health profile.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Benefits
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                Beyond Weight Loss
              </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                GLP-2 therapy offers multiple health benefits beyond the number on the scale.
              </p>
            </AnimatedSection>

            <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <StaggeredItem key={index}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </section>

        {/* Side Effects */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Safety
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                Potential Side Effects
              </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                Like all medications, GLP-2 therapy may cause side effects. Most are mild
                and improve as your body adjusts to the medication.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Side Effect</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Frequency</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Management</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {sideEffects.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-text-primary font-medium">{item.effect}</td>
                        <td className="px-6 py-4 text-text-secondary">{item.frequency}</td>
                        <td className="px-6 py-4 text-text-secondary">{item.management}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-8">
              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Safety Information</h3>
                  <p className="text-yellow-700 text-sm">
                    GLP-2 therapy may not be appropriate for everyone. It is not recommended for
                    people with a personal or family history of medullary thyroid carcinoma (MTC)
                    or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Always discuss your
                    complete medical history with your physician.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Comparison
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                GLP-2 vs Other Approaches
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Approach</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Avg. Weight Loss</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Long-term Success</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Medical Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={item.approach === 'GLP-2 Therapy' ? 'bg-primary/5' : 'hover:bg-gray-50'}>
                        <td className="px-6 py-4 text-text-primary font-medium">
                          {item.approach === 'GLP-2 Therapy' && <TrendingDown className="w-4 h-4 text-success inline mr-2" />}
                          {item.approach}
                        </td>
                        <td className="px-6 py-4 text-text-primary">{item.effectiveness}</td>
                        <td className="px-6 py-4 text-text-secondary">{item.sustainability}</td>
                        <td className="px-6 py-4 text-text-secondary">{item.medicalSupport}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                FAQ
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif text-text-primary">
                Common Questions About GLP-2
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Accordion items={glp2Faqs} />
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">
                Is GLP-2 Therapy Right for You?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Take our free, confidential assessment to see if you may be a candidate
                for GLP-2 weight management therapy.
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
