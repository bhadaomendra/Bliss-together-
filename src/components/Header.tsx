import React, { useState } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { productsData } from '../data/products';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'OUR STORY', path: '/about' },
    { label: 'PRODUCTS', path: '/products', hasDropdown: true },
    { label: 'JOURNAL', path: '/journal' },
    { label: 'CONTACT', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header" style={{
      backgroundColor: '#0A251C',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      height: '84px',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="header-container" style={{
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        padding: '0 clamp(1.5rem, 3.5vw, 3.5rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Left: Official Krishiv Wellness Logo Image (White / Gold) */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          aria-label="Krishiv Wellness LLP Home"
        >
          <img
            src="/assets/krishiv_logo_white.png"
            alt="Krishiv Wellness LLP Logo"
            style={{ height: '62px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu" style={{ display: 'flex', alignItems: 'center', gap: '2.25rem', listStyle: 'none' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: currentPath === item.path ? '#00A896' : '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} style={{ opacity: 0.8 }} />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: DISCOVER WELLNESS ♡ Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => handleNavClick('/products')}
            className="desktop-only-cta"
            style={{
              backgroundColor: '#00A896',
              color: '#FFFFFF',
              padding: '0.65rem 1.4rem',
              borderRadius: '50px',
              fontSize: '0.78125rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 14px rgba(0,168,150,0.35)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>DISCOVER WELLNESS</span>
            <Heart size={14} fill="#FFFFFF" color="#FFFFFF" />
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            style={{ color: '#FFFFFF', padding: '0.5rem', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '84px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#0A251C',
          zIndex: 999,
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none' }}>
            {navItems.map((item) => (
              <li key={item.label} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: currentPath === item.path ? '#00A896' : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none'
                  }}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown size={18} style={{ opacity: 0.8 }} />}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => handleNavClick('/products')}
              style={{
                width: '100%',
                backgroundColor: '#00A896',
                color: '#FFFFFF',
                padding: '0.9rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(0,168,150,0.35)'
              }}
            >
              <span>DISCOVER WELLNESS RANGE</span>
              <Heart size={16} fill="#FFFFFF" color="#FFFFFF" />
            </button>
            <div style={{ textAlign: 'center', color: '#B8C7BF', fontSize: '0.8125rem' }}>
              ✦ Krishiv Wellness LLP · Bliss Together
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


