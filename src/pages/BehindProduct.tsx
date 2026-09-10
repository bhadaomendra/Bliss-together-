import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Microscope, ShieldCheck, Factory, CheckCircle2, FileText, FlaskConical, Award, Lock } from 'lucide-react';
import { siteConfig } from '../data/site';

interface BehindProductProps {
  onNavigate: (path: string) => void;
}

export const BehindProduct: React.FC<BehindProductProps> = ({ onNavigate }) => {
  const processSteps = [
    {
      icon: <FlaskConical size={28} style={{ color: 'var(--color-accent)' }} />,
      title: "1. INGREDIENT SELECTION",
      desc: "We source high-grade, bioavailable vitamins, botanical extracts, and minerals. All ingredients are chosen for purity, absorption efficiency, and safety for regular daily consumption."
    },
    {
      icon: <Microscope size={28} style={{ color: 'var(--color-accent)' }} />,
      title: "2. FORMULATION",
      desc: "Our gummy formulas are crafted to deliver purposeful micronutrient dosages without heavy sugar overload. 100% pectin-based, gelatin-free, and suitable for vegetarians."
    },
    {
      icon: <FileText size={28} style={{ color: 'var(--color-accent)' }} />,
      title: "3. SCIENCE & R&D",
      desc: "Grounded in pharmaceutical experience and nutraceutical research, our team balances efficacy with delicious natural fruit flavours that make daily wellness enjoyable."
    },
    {
      icon: <ShieldCheck size={28} style={{ color: 'var(--color-accent)' }} />,
      title: "4. QUALITY TESTING",
      desc: "Every batch undergoes rigorous quality checks for potency, heavy metal screening, microbiological safety, and shelf-life stability."
    },
    {
      icon: <Factory size={28} style={{ color: 'var(--color-accent)' }} />,
      title: "5. MANUFACTURING",
      desc: "Produced in trusted manufacturing facilities following strict quality and hygiene protocols to ensure uncompromised consistency across every gummy bottle."
    },
    {
      icon: <Award size={28} style={{ color: 'var(--color-accent)' }} />,
      title: "6. SAFETY & QUALITY",
      desc: "Formulated with non-GMO ingredients, free from artificial gelatin, harsh chemicals, or banned substances. Safe for kids and adults alike."
    },
    {
      icon: <Lock size={28} style={{ color: 'var(--color-accent)' }} />,
      title: "7. TRANSPARENCY",
      desc: "Clear label disclosures, no hidden proprietary blends, and honest ingredient breakdown so you know exactly what is nourishing your body."
    }
  ];

  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero */}
      <section className="section-padding bg-sage-light" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="subheading-tag">BEHIND THE PRODUCT</div>
          <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
            SCIENCE, QUALITY & TRANSPARENCY
          </h1>
          <p className="lead-text">
            Discover how Bliss Together gummies are thoughtfully formulated, rigorously checked, and crafted for purposeful daily nutrition.
          </p>
        </div>
      </section>

      {/* Main Process Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream-bg)' }}>
        <div className="container">
          <SectionHeading
            tagline="OUR CRAFT"
            title="HOW WE CREATE PURPOSEFUL GUMMIES"
            subheading="From pharmaceutical insights to everyday nutraceutical delight."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {processSteps.map((step, idx) => (
              <div key={idx} className="card-glass" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-sage-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  {step.icon}
                </div>
                <h3 className="heading-sm" style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Client Approved Compliance Note & Placeholder Box */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px dashed var(--color-accent)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
              Standard Compliance & Technical Disclosures
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
              All manufacturing facilities adhere to FSSAI standards and standard nutraceutical GMP guidelines. For batch-specific COAs or laboratory testing reports, please contact our team directly.
            </p>
            <div style={{
              backgroundColor: 'var(--color-sage-light)',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              fontSize: '0.8125rem',
              color: 'var(--color-primary-light)',
              fontWeight: 600
            }}>
              [Client-approved certification details & batch testing reports to be attached]
            </div>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
