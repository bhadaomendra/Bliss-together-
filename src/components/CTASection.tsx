import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';

interface CTASectionProps {
  onNavigate: (path: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  return (
    <section className="section-padding bg-primary-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Accent Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'rgba(197, 160, 89, 0.15)',
          padding: '0.4rem 1.25rem',
          borderRadius: '50px',
          color: 'var(--color-accent)',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          marginBottom: '1.5rem',
          border: '1px solid rgba(197, 160, 89, 0.3)'
        }}>
          <Sparkles size={16} />
          <span>{siteConfig.tagline}</span>
        </div>

        <h2 className="heading-lg" style={{ color: 'var(--color-cream-bg)', marginBottom: '1.25rem' }}>
          "YOUR WELLNESS JOURNEY STARTS WITH A SIMPLE CHOICE."
        </h2>

        <p className="lead-text" style={{ color: '#C3D4CB', marginBottom: '2.5rem', fontSize: '1.3rem' }}>
          Nourish better. Balance better. Thrive together.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              onNavigate('/products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn btn-accent"
            style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
          >
            <span>EXPLORE OUR PRODUCTS</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
