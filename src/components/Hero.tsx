import React from 'react';
import { ArrowRight, Leaf, Microscope, ShieldCheck, Heart } from 'lucide-react';
import { productsData } from '../data/products';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* LEFT COLUMN: Editorial Text & CTAs */}
          <div>
            {/* Eyebrow */}
            <div className="subheading-tag">
              SMALL GUMMIES. BIGGER POSSIBILITIES.
            </div>

            {/* Main Headline (LOCKED BRAND TAGLINE) */}
            <h1 className="heading-hero">
              NOURISH.<br />
              BALANCE.<br />
              THRIVE.
            </h1>

            {/* Supporting Text */}
            <p className="hero-subtext">
              Thoughtfully crafted gummy nutrition for every age, every need and every step of your wellness journey.
            </p>

            {/* Action Buttons */}
            <div className="hero-buttons">
              <button
                onClick={() => onNavigate('/products')}
                className="btn-pill btn-primary-dark"
              >
                <span>Explore Our Wellness Range</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate('/about')}
                className="btn-pill btn-outline-dark"
              >
                <span>Our Story</span>
              </button>
            </div>

            {/* Trust / Value Signals Row */}
            <div className="trust-signals-grid">
              <div className="trust-signal-item">
                <div className="trust-icon-box">
                  <Leaf size={18} />
                </div>
                <div className="trust-label">
                  Natural<br />Ingredients
                </div>
              </div>

              <div className="trust-signal-item">
                <div className="trust-icon-box">
                  <Microscope size={18} />
                </div>
                <div className="trust-label">
                  Science<br />Backed
                </div>
              </div>

              <div className="trust-signal-item">
                <div className="trust-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div className="trust-label">
                  Safe &<br />High Quality
                </div>
              </div>

              <div className="trust-signal-item">
                <div className="trust-icon-box">
                  <Heart size={18} />
                </div>
                <div className="trust-label">
                  For Every Age,<br />Every Need
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: High-Resolution Real Client Family Image & 6 Product Jars Composition */}
          <div style={{ position: 'relative' }}>
            {/* Top Family Lifestyle Photo (High Resolution 1536x1024 asset) */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(27,59,43,0.08)',
              marginBottom: '1.25rem',
              backgroundColor: '#FAF7F2'
            }}>
              <img
                src="/assets/hero-banner.jpg"
                alt="Bliss Together Family Lifestyle - Father, Mother and Children"
                style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
              />

              {/* Script Badge "Wellness is Better Together ♡" */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: 'var(--color-primary)',
                fontWeight: 600,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(6px)',
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                Wellness is Better Together ♡
              </div>
            </div>

            {/* Bottom 6 Product Jars Showcase Card (Using real high-res individual PNG cutouts) */}
            <div style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: '20px',
              padding: '1.25rem 1rem',
              boxShadow: '0 8px 24px rgba(27,59,43,0.06)',
              border: '1px solid rgba(27,59,43,0.08)'
            }}>
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--color-gold-muted)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                textAlign: 'center'
              }}>
                OUR 6 TARGETED WELLNESS GUMMIES
              </div>

              {/* 6 Real High-Res Transparent Product PNG Cutouts Row */}
              <div className="product-jars-showcase">
                {productsData.map((prod) => (
                  <div key={prod.id} className="hero-jar-item" title={prod.name}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="hero-jar-img"
                    />
                    <div className="hero-jar-label">{prod.name.replace(' Gummies', '')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
