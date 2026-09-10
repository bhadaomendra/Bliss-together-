import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { Heart, Target, Compass, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero Header */}
      <section className="section-padding bg-sage-light" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="subheading-tag">ABOUT KRISHIV</div>
          <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
            FROM HEALTHCARE EXPERIENCE TO EVERYDAY WELLNESS
          </h1>
          <p className="lead-text">
            Building a community that inspires people to embrace wellness, happiness, and healthier everyday choices.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream-bg)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="subheading-tag">THE FOUNDER'S JOURNEY</div>
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
              Our Story
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--color-text-dark)', fontSize: '1.05rem', lineHeight: '1.75' }}>
              <p>
                With <strong>18 years of experience</strong> in the pharmaceutical industry, <strong>Shailendra Pal Singh</strong> has always been closely connected to healthcare and, more importantly, to the wellbeing of the people around him.
              </p>
              <p>
                While exploring opportunities to build a new venture with his partner, one thought kept coming back:
              </p>

              <div style={{
                borderLeft: '4px solid var(--color-accent)',
                paddingLeft: '1.5rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                margin: '0.5rem 0'
              }}>
                “Prevention is better than cure.”
              </div>

              <p>
                This belief led them towards the world of nutraceuticals—a space where everyday nutrition and wellness could become a part of people’s lives in a simple and enjoyable way.
              </p>
              <p>
                As they explored the evolving nutraceutical landscape, they discovered the exciting potential of gummies: a convenient and enjoyable way to make wellness a more approachable part of everyday life.
              </p>
              <p>
                But the vision was bigger than simply creating products. <em>We wanted to create a movement around wellness.</em>
              </p>
              <p>
                The idea behind <strong>Krishiv Wellness LLP</strong> is to build a community that inspires people to embrace wellness, happiness and healthier everyday choices—so that taking care of yourself doesn’t feel like a responsibility, but something you genuinely enjoy.
              </p>
              <p style={{ fontWeight: 600, color: 'var(--color-primary-dark)', fontSize: '1.15rem' }}>
                And that’s where Bliss Together was born. Because we believe wellness is better when we experience it together.
              </p>
            </div>
          </div>

          <div>
            <div style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--color-sage-border)'
            }}>
              <img
                src="/assets/our_story_art.png"
                alt="Krishiv Wellness Krishna & Shiva Vision Artwork"
                style={{ borderRadius: 'var(--radius-md)', marginBottom: '1.75rem', width: '100%', maxHeight: '300px', objectFit: 'contain' }}
              />
              <div style={{
                backgroundColor: 'var(--color-sage-light)',
                padding: '1.25rem',
                borderRadius: '8px',
                borderLeft: '3px solid var(--color-primary)'
              }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase' }}>Company Profile</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>Krishiv Wellness LLP</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  Founder: {siteConfig.primaryContact}<br />
                  Brand: {siteConfig.brandName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-padding bg-cream-card">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Vision */}
            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '3rem 2.5rem',
              borderRadius: 'var(--radius-lg)',
              borderTop: '5px solid var(--color-accent)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-sage-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--color-accent)'
              }}>
                <Target size={28} />
              </div>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>OUR VISION</h2>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                "To help everyone experience complete wellbeing—holistically—so they can live life to its fullest and enjoy every moment with greater health, happiness and joy."
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                We are working towards a world where wellness becomes an enjoyable and meaningful part of everyday life.
              </p>
            </div>

            {/* Mission */}
            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '3rem 2.5rem',
              borderRadius: 'var(--radius-lg)',
              borderTop: '5px solid var(--color-primary)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-sage-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--color-primary)'
              }}>
                <Compass size={28} />
              </div>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>OUR MISSION</h2>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: '1.6' }}>
                "To reach every person who cares about their wellbeing and inspire them to become a part of the wave towards a healthier India."
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                We aim to make wellness accessible, enjoyable and easy to embrace in everyday life, while building a community that grows healthier and happier together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY - 3 PILLARS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream-bg)' }}>
        <div className="container">
          <SectionHeading
            tagline="CORE VALUES"
            title="OUR THREE PHILOSOPHICAL PILLARS"
            subheading="Guiding every product we formulate and every decision we make."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            <div className="card-glass">
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', fontWeight: 700, marginBottom: '0.5rem' }}>01</div>
              <h3 className="heading-sm" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>HEALTH COMES FIRST</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
                "We believe health is the foundation of a fulfilling life. When we take care of our wellbeing, we create the foundation to experience life with greater energy, happiness and purpose."
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', fontWeight: 700, marginBottom: '0.5rem' }}>02</div>
              <h3 className="heading-sm" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>GENUINE EFFORTS CREATE REAL IMPACT</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
                "We believe that every sincere effort towards wellbeing matters. Small, consistent and genuine choices can create meaningful impact—not only for individuals, but for the people and communities around them."
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', fontWeight: 700, marginBottom: '0.5rem' }}>03</div>
              <h3 className="heading-sm" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>HEALTH IS THE SOURCE OF JOY AND PROSPERITY</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
                "We believe true joy and prosperity begin with good health. When people are healthy and well, they are better able to enjoy life, pursue their aspirations and create prosperity for themselves and those around them."
              </p>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            backgroundColor: 'var(--color-sage-light)',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-sage-border)'
          }}>
            <p style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--color-primary-dark)'
            }}>
              "Because when wellbeing comes first, life becomes more joyful, meaningful and prosperous."
            </p>
          </div>
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
