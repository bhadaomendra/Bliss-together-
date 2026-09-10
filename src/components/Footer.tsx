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
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src="/assets/krishiv_logo_white.png"
                alt="Krishiv Wellness LLP Logo"
                style={{ height: '88px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              color: 'var(--color-gold)',
              fontSize: '0.9375rem',
              marginBottom: '1.25rem'
            }}>
              Nourishing Lives Better, Together.
            </p>

            {/* Social Media Circular Buttons */}
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }} aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }} aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }} aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }} aria-label="Twitter">
                <Twitter size={15} />
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
              <li><a href="/behind-the-product" onClick={(e) => handleNavClick(e, '/behind-the-product')}>Science</a></li>
              <li><a href="/behind-the-product" onClick={(e) => handleNavClick(e, '/behind-the-product')}>Journal</a></li>
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
                <span>{siteConfig.email}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#B8C7BF', fontSize: '0.85rem' }}>
                <Phone size={15} style={{ color: 'var(--color-teal)' }} />
                <span>{siteConfig.phone}</span>
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
