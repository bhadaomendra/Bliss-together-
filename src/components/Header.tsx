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
    { label: 'SCIENCE', path: '/behind-the-product' },
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
      <div className="container header-container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
          <ul className="nav-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }}>
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
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
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

        {/* Right: Bliss Together Brand Logo (Replacing Discover Wellness Button) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a
            href="/products"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/products');
            }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            aria-label="Bliss Together Products"
          >
            <img
              src="/assets/bliss_together_logo_light_transparent.png"
              alt="Bliss Together Logo"
              style={{ height: '58px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            style={{ color: '#FFFFFF' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};


