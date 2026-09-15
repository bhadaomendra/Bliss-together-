import React from 'react';
import { productsData, Product } from '../data/products';
import { ArrowRight, Leaf, Microscope, ShieldCheck, Heart, Sparkles, CheckCircle2, Award, Zap, Smile, Compass, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
  onQuickView: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onQuickView }) => {
  // 5 Tubs matching exact mockup order
  const mockupTubs = [
    {
      id: "prod-4", // Hair Skin Nails
      title: "Hair, Skin & Nails",
      subtitle: "Hair • Skin • Nails",
      tubImg: "/assets/products/hair-skin-nails.png",
      accent: "#D946EF",
      bgGradient: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
      badge: "Hair, Skin & Nails",
      ingredients: "Biotin | Zinc | Vitamin C",
      flavour: "Strawberry Flavour"
    },
    {
      id: "prod-5", // Multivitamin + Probiotic
      title: "Multivitamin + Probiotic",
      subtitle: "Multivitamin",
      tubImg: "/assets/products/pre-probiotic-multivitamin.png",
      accent: "#10B981",
      bgGradient: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
      badge: "Multivitamin + Probiotic",
      ingredients: "12 Vitamins | Prebiotics | Probiotics",
      flavour: "Orange Flavour"
    },
    {
      id: "prod-6", // Melatonin Sleep / Calm
      title: "Calm & Anti-Stress",
      subtitle: "Calm & Anti-Stress",
      tubImg: "/assets/products/melatonin.png",
      accent: "#8B5CF6",
      bgGradient: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)",
      badge: "Calm & Anti-Stress",
      ingredients: "Ashwagandha | L-Theanine | Vitamin B6",
      flavour: "Blueberry Flavour"
    },
    {
      id: "prod-3", // Kids Immunity / Melatonin
      title: "Melatonin Sleep",
      subtitle: "Melatonin",
      tubImg: "/assets/products/kids-immunity.png",
      accent: "#3B82F6",
      bgGradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
      badge: "Melatonin Sleep",
      ingredients: "Melatonin | Chamomile | Vitamin B6",
      flavour: "Berry Flavour"
    },
    {
      id: "prod-2", // Eye Care
      title: "Eye Care",
      subtitle: "Eye Care",
      tubImg: "/assets/products/eye-care.png",
      accent: "#06B6D4",
      bgGradient: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
      badge: "Eye Care",
      ingredients: "Lutein | Zeaxanthin | Vitamin A",
      flavour: "Mixed Berry Flavour"
    }
  ];

  const getProductObj = (id: string): Product => {
    return productsData.find(p => p.id === id) || productsData[0];
  };

  return (
    <main style={{ backgroundColor: '#FAF7F2' }}>

      {/* ========================================================================= */}
      {/* 1. CINEMATIC SUNLIT FOREST HERO SECTION (EXACT MATCHING MOCKUP IMAGE 2) */}
      {/* ========================================================================= */}
      <section style={{
        position: 'relative',
        minHeight: '86vh',
        backgroundImage: "linear-gradient(90deg, rgba(10, 35, 26, 0.85) 0%, rgba(10, 35, 26, 0.62) 48%, rgba(10, 35, 26, 0.1) 82%), url('/assets/hero_wallpaper.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '100%',
          padding: '0 clamp(1.5rem, 3.5vw, 3.5rem)'
        }}>
          <div style={{ maxWidth: '720px' }}>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.78125rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              <span>THOUGHTFULLY MADE, DELICIOUSLY NATURAL</span>
              <span style={{ color: 'var(--color-gold)' }}>♡</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              color: '#FFFFFF',
              marginBottom: '1.25rem'
            }}>
              Wellness That<br />
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic',
                color: 'var(--color-teal)',
                fontWeight: 600
              }}>
                Feels Good
              </span><br />
              Every Day. <span style={{ color: 'var(--color-gold)', fontSize: '0.7em', fontStyle: 'normal' }}>♡</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '500px',
              lineHeight: 1.6,
              marginBottom: '2.25rem'
            }}>
              Science-backed nutrition in delicious, convenient formats designed for modern lifestyles.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button
                onClick={() => onNavigate('/products')}
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 16px rgba(0,168,150,0.4)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate('/about')}
                style={{
                  backgroundColor: 'rgba(13, 47, 36, 0.65)',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(6px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Trust Signals Row (4 Icon Items) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: '#FFFFFF'
                }}>
                  <Leaf size={20} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>
                  Natural<br />Ingredients
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: '#FFFFFF'
                }}>
                  <Microscope size={20} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>
                  Clean & Safe<br />Formula
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: '#FFFFFF'
                }}>
                  <ShieldCheck size={20} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>
                  No Artificial<br />Colors
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: '#FFFFFF'
                }}>
                  <Heart size={20} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>
                  Made With<br />Love
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exact Fluffy Scalloped Comic Puffy Cloud with Bliss Together Logo */}
        <div style={{
          position: 'absolute',
          top: '1.2rem',
          right: '3.5rem',
          width: '360px',
          height: '240px',
          zIndex: 4,
          animation: 'floatSpeech 4.5s ease-in-out infinite'
        }}>
          {/* SVG Puffy Scalloped Cloud Wrapper */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg viewBox="0 0 520 320" width="100%" height="100%" style={{ overflow: 'visible' }}>
              <defs>
                <filter id="puffy-shadow-exact" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000000" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Spark Lines Top-Left */}
              <line x1="85" y1="65" x2="60" y2="40" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="115" y1="48" x2="100" y2="20" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />

              {/* Spark Lines Top-Right */}
              <line x1="435" y1="65" x2="460" y2="40" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="405" y1="48" x2="420" y2="20" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="460" y1="95" x2="485" y2="85" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />

              {/* Spark Lines Bottom-Right */}
              <line x1="445" y1="235" x2="470" y2="258" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="415" y1="255" x2="430" y2="282" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />

              {/* Spark Lines Bottom-Left */}
              <line x1="105" y1="255" x2="85" y2="278" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="135" y1="270" x2="125" y2="295" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />

              {/* Fluffy Puffy Scalloped Cloud Shape */}
              <path d="M 140 80 
                       A 42 42 0 0 1 210 55 
                       A 52 52 0 0 1 300 50 
                       A 46 46 0 0 1 380 70 
                       A 44 44 0 0 1 435 115 
                       A 42 42 0 0 1 445 170 
                       A 44 44 0 0 1 410 220 
                       A 46 46 0 0 1 340 250 
                       A 52 52 0 0 1 240 255 
                       A 46 46 0 0 1 160 238 
                       A 42 42 0 0 1 105 198 
                       A 44 44 0 0 1 95 135 
                       A 42 42 0 0 1 140 80 Z" 
                    fill="#FFFFFF" filter="url(#puffy-shadow-exact)" />

              {/* Thought Dots leading directly from near Boy's mouth/face */}
              <circle cx="82" cy="225" r="18" fill="#FFFFFF" filter="url(#puffy-shadow-exact)" />
              <circle cx="52" cy="258" r="10" fill="#FFFFFF" filter="url(#puffy-shadow-exact)" />
              <circle cx="28" cy="285" r="6" fill="#FFFFFF" filter="url(#puffy-shadow-exact)" />
            </svg>

            {/* Bliss Together Logo Centered Inside Puffy Cloud */}
            <div style={{
              position: 'absolute',
              top: '18%',
              left: '21%',
              width: '58%',
              height: '62%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src="/assets/bliss_together_logo_transparent.png"
                alt="Bliss Together - Nourish. Balance. Thrive."
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '135px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR WELLNESS COLLECTION (5 TUBS ROW + VALUE PROPS) */}
      {/* ========================================================================= */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Section Divider */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--color-primary)',
              textTransform: 'uppercase'
            }}>
              <span style={{ color: 'var(--color-gold)' }}>── ♡</span>
              <span>OUR WELLNESS COLLECTION</span>
              <span style={{ color: 'var(--color-gold)' }}>♡ ──</span>
            </div>
          </div>

          {/* 5 Tub Product Cards Horizontal Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}>
            {mockupTubs.map((tub) => (
              <div key={tub.id} style={{
                backgroundColor: '#FAF7F2',
                borderRadius: '16px',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                border: '1px solid rgba(27,59,43,0.08)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  {/* Tub Image */}
                  <div style={{ height: '170px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <img
                      src={tub.tubImg}
                      alt={tub.title}
                      style={{ maxHeight: '160px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.12))' }}
                    />
                  </div>

                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
                    {tub.title}
                  </h3>

                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    {tub.ingredients}
                  </p>
                </div>

                <button
                  onClick={() => onQuickView(getProductObj(tub.id))}
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#FFFFFF',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '50px',
                    fontSize: '0.78125rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    width: '100%',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>

          {/* 4 Value Proposition Cards Box */}
          <div style={{
            backgroundColor: '#F3EFEA',
            borderRadius: '20px',
            padding: '2rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            border: '1px solid rgba(27,59,43,0.06)'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0 }}>
                <Leaf size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Rooted in Nature</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>We use premium quality ingredients sourced from the best of nature.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0 }}>
                <Microscope size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Backed by Science</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Our formulations are created with research and real results.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0 }}>
                <Smile size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Delicious & Enjoyable</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Great taste that makes wellness something you look forward to.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0 }}>
                <Heart size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Made for Everyday You</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Thoughtfully crafted for modern lifestyles & daily well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR STORY SECTION (FAITH & BALANCE ARTWORK + 4 PILLARS) */}
      {/* ========================================================================= */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FAF7F2' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center' }}>
            {/* Left Story Text */}
            <div>
              <div style={{ fontSize: '0.78125rem', fontWeight: 700, letterSpacing: '0.15em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                OUR STORY
              </div>

              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.25rem',
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'var(--color-primary)',
                marginBottom: '1.25rem'
              }}>
                Inspired by <span style={{ color: 'var(--color-primary-dark)' }}>Faith.</span><br />
                Guided by <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--color-gold-muted)' }}>Balance.</span>
              </h2>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Krishiv is inspired by the timeless essence of Krishna and Shiva — symbols of trust, balance and blissfulness.
              </p>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                We believe wellness should be positive, enjoyable and sustainable. That’s why we created delicious gummies with complete nutrition to support your everyday well-being.
              </p>

              <button
                onClick={() => onNavigate('/about')}
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '50px',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>READ OUR STORY</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Middle Artwork: Line drawing of Lord Krishna / Shiva aesthetic */}
            <div style={{ textAlign: 'center' }}>
              <img
                src="/assets/our_story_art.png"
                alt="Krishiv Story Line Art Artwork - Krishna & Shiva"
                style={{ width: '100%', maxHeight: '360px', objectFit: 'contain' }}
              />
            </div>

            {/* Right Pillars List (4 Pills) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '0.9rem 1.25rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                border: '1px solid rgba(27,59,43,0.06)'
              }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)' }}>Trust</span>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '0.9rem 1.25rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                border: '1px solid rgba(27,59,43,0.06)'
              }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--color-gold)' }}>🔱</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)' }}>Faith</span>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '0.9rem 1.25rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                border: '1px solid rgba(27,59,43,0.06)'
              }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--color-accent)' }}>☯️</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)' }}>Balance</span>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '0.9rem 1.25rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                border: '1px solid rgba(27,59,43,0.06)'
              }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--color-gold)' }}>🪷</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)' }}>Blissfulness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SCIENCE YOU CAN TRUST DARK GREEN BANNER (EXACT MATCHING SCREENSHOT) */}
      {/* ========================================================================= */}
      <section style={{
        backgroundColor: '#0B3528',
        padding: '1.25rem 0',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Leaf Watermarks on Far Left & Far Right */}
        <div style={{
          position: 'absolute',
          left: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.15,
          pointerEvents: 'none',
          fontSize: '4rem'
        }}>
          🌿
        </div>
        <div style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.15,
          pointerEvents: 'none',
          fontSize: '4rem'
        }}>
          🌿
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr repeat(5, 1fr)',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* Title Column */}
            <div style={{
              fontSize: '1.15rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: '#FFFFFF',
              lineHeight: 1.25,
              paddingRight: '1rem',
              borderRight: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              SCIENCE YOU<br />CAN TRUST
            </div>

            {/* Item 1: FSSAI COMPLIANT */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              paddingRight: '0.75rem',
              borderRight: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                border: '1.5px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                flexShrink: 0
              }}>
                🐻
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.25, color: '#FFFFFF' }}>
                FSSAI<br />COMPLIANT
              </div>
            </div>

            {/* Item 2: PREMIUM INGREDIENTS */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              paddingRight: '0.75rem',
              borderRight: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <Leaf size={24} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.25, color: '#FFFFFF' }}>
                PREMIUM<br />INGREDIENTS
              </div>
            </div>

            {/* Item 3: THOUGHTFUL FORMULATIONS */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              paddingRight: '0.75rem',
              borderRight: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <Sparkles size={24} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.25, color: '#FFFFFF' }}>
                THOUGHTFUL<br />FORMULATIONS
              </div>
            </div>

            {/* Item 4: QUALITY MANUFACTURING */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              paddingRight: '0.75rem',
              borderRight: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <Award size={24} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.25, color: '#FFFFFF' }}>
                QUALITY<br />MANUFACTURING
              </div>
            </div>

            {/* Item 5: CONSISTENT NUTRITION */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem'
            }}>
              <ShieldCheck size={24} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.25, color: '#FFFFFF' }}>
                CONSISTENT<br />NUTRITION
              </div>
            </div>
          </div>
        </div>
      </section>
             {/* ========================================================================= */}
      {/* 5. FEATURED WELLNESS SECTION (PROMINENT PRODUCT TUB, TIGHT TEXT, GIRL RIGHT) */}
      {/* ========================================================================= */}
      <section style={{
        position: 'relative',
        backgroundColor: '#F7F4EC',
        padding: '3rem 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(27,59,43,0.06)',
        borderBottom: '1px solid rgba(27,59,43,0.06)'
      }}>
        {/* Right Background Photo (GIRL IMAGE - UNTOUCHED & PRESERVED) */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '38%',
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          <img
            src="/assets/mockup_exact/featured_woman_exact.jpg"
            alt="Woman Enjoying Wellness Gummy Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center right',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 18%, black 50%)',
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 18%, black 50%)'
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1380px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '440px 1fr',
            gap: '2.5rem',
            alignItems: 'center',
            maxWidth: '1020px'
          }}>
            {/* 1. LEFT: Product Tub Visual (Larger, Prominent & High-Res) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              paddingBottom: '0.5rem'
            }}>
              {/* Soft realistic 3D floor contact shadow */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '88%',
                height: '26px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse at center, rgba(17, 35, 28, 0.35) 0%, rgba(17, 35, 28, 0.12) 55%, rgba(17, 35, 28, 0) 80%)',
                filter: 'blur(7px)',
                pointerEvents: 'none',
                zIndex: 1
              }} />

              <img
                src="/assets/mockup_exact/featured_tub_exact.png"
                alt="Krishiv Calm & Anti Stress Gummy Tub Render"
                style={{
                  width: '100%',
                  maxHeight: '440px',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 16px 26px rgba(17, 35, 28, 0.22))'
                }}
              />
            </div>

            {/* 2. CENTER: Featured Text Content (Tightly Grouped beside Tub) */}
            <div style={{ padding: '0.5rem 0', maxWidth: '540px' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.15em', color: '#967230', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                FEATURED WELLNESS
              </div>

              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: '#11352A', marginBottom: '0.65rem', lineHeight: 1.15 }}>
                Find Your Balance. Naturally.
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.5, marginBottom: '1.5rem', maxWidth: '480px' }}>
                Calm & Anti-Stress Gummies help you manage daily stress, relax your mind and support mood balance.
              </p>

              {/* 3 Outlined Circular Ingredient Badges */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1.5px solid #00A896', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00A896', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                    <Leaf size={15} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#11352A' }}>Ashwagandha</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1.5px solid #00A896', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00A896', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ fontSize: '0.8rem' }}>🪷</span>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#11352A' }}>L-Theanine</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1.5px solid #00A896', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: '#00A896', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                    B6
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#11352A' }}>Vitamin B6</span>
                </div>
              </div>

              <button
                onClick={() => onQuickView(getProductObj('prod-6'))}
                style={{
                  backgroundColor: '#00A896',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '50px',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  letterSpacing: '0.04em',
                  boxShadow: '0 4px 16px rgba(0,168,150,0.3)',
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                <span>EXPLORE CALM & ANTI-STRESS GUMMIES</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WELLNESS JOURNAL SECTION (3 HORIZONTAL CARDS MATCHING SCREENSHOT) */}
      {/* ========================================================================= */}
      <section style={{ padding: '4.5rem 0 5.5rem', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Header Flourish */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--color-primary)',
                textTransform: 'uppercase'
              }}>
                <span style={{ color: '#967230' }}>── ♡</span>
                <span>WELLNESS JOURNAL</span>
                <span style={{ color: '#967230' }}>♡ ──</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/behind-the-product')}
              style={{ fontSize: '0.875rem', fontWeight: 700, color: '#967230', display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer', background: 'none', border: 'none' }}
            >
              <span>Explore All Articles</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Article Card 1 (Sleep) */}
            <div style={{
              backgroundColor: '#FAF7F2',
              borderRadius: '16px',
              padding: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              border: '1px solid rgba(27,59,43,0.06)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
            }}>
              <img
                src="/assets/mockup_exact/journal_sleep_exact.jpg"
                alt="Better Sleep Tips"
                style={{ width: '130px', height: '110px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#967230', textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.1em' }}>
                  SLEEP
                </div>
                <h3 style={{ fontSize: '0.98rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  7 Natural Tips for Better Sleep
                </h3>
                <button
                  onClick={() => onNavigate('/behind-the-product')}
                  style={{ fontSize: '0.78125rem', fontWeight: 700, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                >
                  <span>Read More</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Article Card 2 (Stress / Wellness) */}
            <div style={{
              backgroundColor: '#FAF7F2',
              borderRadius: '16px',
              padding: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              border: '1px solid rgba(27,59,43,0.06)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
            }}>
              <img
                src="/assets/mockup_exact/journal_stress_exact.jpg"
                alt="Manage Stress"
                style={{ width: '130px', height: '110px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#967230', textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.1em' }}>
                  WELLNESS
                </div>
                <h3 style={{ fontSize: '0.98rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  How to Manage Stress in Everyday Life
                </h3>
                <button
                  onClick={() => onNavigate('/behind-the-product')}
                  style={{ fontSize: '0.78125rem', fontWeight: 700, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                >
                  <span>Read More</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Article Card 3 (Eye Health) */}
            <div style={{
              backgroundColor: '#FAF7F2',
              borderRadius: '16px',
              padding: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              border: '1px solid rgba(27,59,43,0.06)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
            }}>
              <img
                src="/assets/mockup_exact/journal_eye_exact.jpg"
                alt="Eye Health Digital Age"
                style={{ width: '130px', height: '110px', objectFit: 'cover', borderRadius: '12px', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#967230', textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.1em' }}>
                  EYE HEALTH
                </div>
                <h3 style={{ fontSize: '0.98rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  Protect Your Eyes in the Digital Age
                </h3>
                <button
                  onClick={() => onNavigate('/behind-the-product')}
                  style={{ fontSize: '0.78125rem', fontWeight: 700, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                >
                  <span>Read More</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
