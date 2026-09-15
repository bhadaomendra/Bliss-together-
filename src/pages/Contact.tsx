import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { siteConfig } from '../data/site';
import { ShoppingBag, Sparkles, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <main style={{ backgroundColor: '#F8F6F0', minHeight: '100vh' }}>
      
      {/* HERO BANNER SECTION */}
      <section style={{
        position: 'relative',
        padding: '2.5rem 1.5rem 2rem',
        backgroundColor: '#F7F5EE',
        borderBottom: '1px solid rgba(24, 60, 45, 0.06)',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Subtle pale green background ambient circle */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '240px',
          background: 'radial-gradient(ellipse, rgba(226, 238, 229, 0.7) 0%, rgba(247, 245, 238, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '840px', margin: '0 auto' }}>
          {/* Eyebrow Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.85rem',
            fontSize: '0.8125rem',
            fontWeight: 800,
            letterSpacing: '0.22em',
            color: '#B28B45',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            <span style={{ color: '#B28B45', opacity: 0.65 }}>─────────</span>
            <span>LET'S CONNECT</span>
            <span style={{ color: '#B28B45', opacity: 0.65 }}>─────────</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
            fontWeight: 700,
            color: '#183C2D',
            lineHeight: 1.1,
            marginBottom: '0.75rem'
          }}>
            We'd Love To Hear From You
          </h1>

          {/* Subtext */}
          <p style={{
            color: '#3D5245',
            fontSize: '1.0625rem',
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: '720px',
            margin: '0 auto',
            letterSpacing: '0.01em'
          }}>
            Reach out to <strong>{siteConfig.primaryContact}</strong> and the team at <strong>{siteConfig.companyName}</strong> for product inquiries, distribution partnerships, or general assistance.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT FORM SECTION */}
      <section style={{ padding: '3rem 1.5rem 4rem' }}>
        <div className="container">
          <ContactForm />

          {/* 3 VALUE / FEATURE HIGHLIGHT CARDS BELOW FORM */}
          <div style={{
            maxWidth: '1160px',
            margin: '3rem auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Card 1 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.5rem 1.35rem',
              border: '1px solid rgba(24, 60, 45, 0.07)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#FEF5E7',
                color: '#B28B45',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ShoppingBag size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.25rem' }}>
                  Bulk & Retail Inquiries
                </h4>
                <p style={{ fontSize: '0.84375rem', color: '#5C7064', lineHeight: 1.5, margin: 0 }}>
                  Interested in stocking Bliss Together gummies? We offer competitive pricing for retail & pharmacy partners.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.5rem 1.35rem',
              border: '1px solid rgba(24, 60, 45, 0.07)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#E3F0E6',
                color: '#183C2D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Sparkles size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.25rem' }}>
                  Product Guidance
                </h4>
                <p style={{ fontSize: '0.84375rem', color: '#5C7064', lineHeight: 1.5, margin: 0 }}>
                  Unsure which formulation is right for your daily routine? Contact us for personalized recommendations.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.5rem 1.35rem',
              border: '1px solid rgba(24, 60, 45, 0.07)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#E2F4F2',
                color: '#00A896',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.25rem' }}>
                  Dedicated Partnership
                </h4>
                <p style={{ fontSize: '0.84375rem', color: '#5C7064', lineHeight: 1.5, margin: 0 }}>
                  Collaborate directly with Krishiv Wellness LLP for corporate wellness gifting and health campaigns.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
