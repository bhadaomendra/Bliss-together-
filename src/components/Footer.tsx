import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { siteConfig } from '../data/site';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-columns">

          {/* COLUMN 1: BRAND LOGO & SOCIALS */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src="/assets/bliss_together_logo_light_transparent.png"
                alt="Bliss Together Logo"
                style={{ height: '140px', width: 'auto', maxWidth: '240px', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              color: 'var(--color-gold)',
              fontSize: '1.05rem',
              lineHeight: '1.4',
              marginBottom: '1.25rem',
              letterSpacing: '0.02em',
              textAlign: 'center'
            }}>
              Nourishing Lives Better, Together.
            </p>

            {/* Social Media Circular Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'center' }}>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', transition: 'all 0.2s ease' }} aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', transition: 'all 0.2s ease' }} aria-label="Facebook">
                <Facebook size={17} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', transition: 'all 0.2s ease' }} aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', transition: 'all 0.2s ease' }} aria-label="Twitter">
                <Twitter size={17} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <div className="footer-col-title">QUICK LINKS</div>
            <ul className="footer-list">
              <li><a href="/" onClick={(e) => handleNavClick(e, '/')}>Home</a></li>
              <li><a href="/about" onClick={(e) => handleNavClick(e, '/about')}>Our Story</a></li>
              <li><a href="/products" onClick={(e) => handleNavClick(e, '/products')}>Products</a></li>
              <li><a href="/journal" onClick={(e) => handleNavClick(e, '/journal')}>Journal</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 3: PRODUCTS */}
          <div>
            <div className="footer-col-title">PRODUCTS</div>
            <ul className="footer-list">
              <li><a href="/products" onClick={(e) => handleNavClick(e, '/products')}>Hair, Skin & Nails</a></li>
              <li><a href="/products" onClick={(e) => handleNavClick(e, '/products')}>Multivitamin + Probiotic</a></li>
              <li><a href="/products" onClick={(e) => handleNavClick(e, '/products')}>Calm & Anti-Stress</a></li>
              <li><a href="/products" onClick={(e) => handleNavClick(e, '/products')}>Melatonin Sleep</a></li>
              <li><a href="/products" onClick={(e) => handleNavClick(e, '/products')}>Eye Care</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US */}
          <div>
            <div className="footer-col-title">CONTACT US</div>
            <ul className="footer-list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#B8C7BF', fontSize: '0.85rem' }}>
                <Mail size={15} style={{ color: 'var(--color-teal)' }} />
                <a href={`mailto:${siteConfig.email}`} style={{ color: '#B8C7BF', textDecoration: 'none' }}>{siteConfig.email}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#25D366', fontSize: '0.85rem', fontWeight: 600 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.709 1.464h.005c6.554 0 11.889-5.335 11.892-11.892 0-3.18-1.237-6.168-3.486-8.418z"/>
                </svg>
                <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none' }}>WhatsApp Support</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#B8C7BF', fontSize: '0.85rem' }}>
                <MapPin size={15} style={{ color: 'var(--color-teal)' }} />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: STAY CONNECTED */}
          <div>
            <div className="footer-col-title">STAY CONNECTED</div>
            <p style={{ fontSize: '0.8125rem', color: '#B8C7BF', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              Join our community for wellness tips, updates & special offers.
            </p>

            {subscribed ? (
              <div style={{ color: 'var(--color-teal)', fontSize: '0.875rem', fontWeight: 600 }}>
                ✓ Thank you for joining our community!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '50px',
                padding: '4px 6px 4px 16px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
              }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: '#1B3B2B',
                    outline: 'none',
                    fontSize: '0.8125rem',
                    fontFamily: 'inherit'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-gold)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'transform 0.2s ease'
                  }}
                  aria-label="Submit Email"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <div>
            © {new Date().getFullYear()} Krishiv Wellness LLP. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span>|</span>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
