import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/pages/Home.tsx';
const text = readFileSync(path, 'utf8');

const start = text.indexOf('      {/* 5. FEATURED WELLNESS SECTION');
const end = text.indexOf('      {/* 6. WELLNESS JOURNAL SECTION', start);

if (start === -1 || end === -1) {
  console.log('Section markers not found or already rewritten cleanly.');
  process.exit(0);
}

const section = `      {/* ========================================================================= */}
      {/* 5. FEATURED WELLNESS SECTION */}
      {/* ========================================================================= */}
      <section className="featured-wellness-section" style={{
        position: 'relative',
        backgroundColor: '#FAF5ED',
        padding: '3.5rem 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(27,59,43,0.06)',
        borderBottom: '1px solid rgba(27,59,43,0.06)'
      }}>
        {/* Right Background Photo (Girl Enjoying Gummy) */}
        <div className="featured-woman-bg" style={{
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
          <div className="featured-product-grid">
            
            {/* 1. LEFT: Product Tub Visual (NEW USER UPLOADED COMPOSITION IMAGE) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              paddingBottom: '0.5rem'
            }}>
              {/* Cursive Background Script Text on Left */}
              <div className="healthy-gut-quote-overlay" style={{
                position: 'absolute',
                left: '-70px',
                top: '12%',
                transform: 'rotate(-10deg)',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1.85rem',
                fontWeight: 700,
                color: '#D97706',
                opacity: 0.95,
                lineHeight: 1.12,
                zIndex: 2,
                pointerEvents: 'none',
                textAlign: 'left',
                filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.9))'
              }}>
                Healthy<br />Gut<br />Happier<br />You <span style={{ fontSize: '1.05rem', fontStyle: 'normal' }}>♥</span>
              </div>

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

              {/* NEW TRANSPARENT TUB COMPOSITION IMAGE */}
              <img
                src="/assets/featured_user_tub_clean.png"
                alt="Bliss Together Pre + Probiotic Multivitamin Gummies Tub Composition"
                style={{
                  width: '100%',
                  maxHeight: '460px',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 16px 26px rgba(17, 35, 28, 0.22))'
                }}
              />
            </div>

            {/* 2. CENTER: Featured Text Content */}
            <div style={{ padding: '0.5rem 0', maxWidth: '470px' }}>
              <div style={{
                fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.15em', color: '#B8731D',
                textTransform: 'uppercase', marginBottom: '0.4rem'
              }}>
                FEATURED WELLNESS
              </div>

              <h2 style={{
                fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700,
                marginBottom: '0.75rem', lineHeight: 1.15
              }}>
                <span style={{ color: '#0F3A2E', display: 'block' }}>A Happier Gut</span>
                <span style={{ color: '#E65100', display: 'block' }}>A Healthier You.</span>
              </h2>

              <p style={{ fontSize: '0.925rem', color: '#4A5568', lineHeight: 1.5, marginBottom: '1.65rem', maxWidth: '460px' }}>
                Pre + Probiotic Multivitamin Gummies with essential vitamins, probiotics and prebiotic fiber to support gut health, boost immunity and enhance overall wellness — naturally.
              </p>

              {/* 4 Circular Benefit Badges Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.35rem', alignItems: 'flex-start', marginBottom: '1.85rem' }}>
                {/* Badge 1: Supports Gut Health */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1.8px solid #E65100',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E65100',
                    backgroundColor: 'rgba(255,255,255,0.85)', margin: '0 auto 0.4rem', boxShadow: '0 2px 8px rgba(230,81,0,0.15)'
                  }}>
                    <span style={{ fontSize: '1.15rem' }}>🫄</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#11352A', lineHeight: 1.25 }}>
                    Supports<br />Gut Health*
                  </div>
                </div>

                {/* Badge 2: Boosts Immunity */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1.8px solid #E65100',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E65100',
                    backgroundColor: 'rgba(255,255,255,0.85)', margin: '0 auto 0.4rem', boxShadow: '0 2px 8px rgba(230,81,0,0.15)'
                  }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#11352A', lineHeight: 1.25 }}>
                    Boosts<br />Immunity*
                  </div>
                </div>

                {/* Badge 3: Supports Healthy Digestion */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1.8px solid #E65100',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E65100',
                    backgroundColor: 'rgba(255,255,255,0.85)', margin: '0 auto 0.4rem', boxShadow: '0 2px 8px rgba(230,81,0,0.15)'
                  }}>
                    <span style={{ fontSize: '1.15rem' }}>✨</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#11352A', lineHeight: 1.25 }}>
                    Supports<br />Healthy Digestion*
                  </div>
                </div>

                {/* Badge 4: Enhances Overall Wellness */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1.8px solid #E65100',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E65100',
                    backgroundColor: 'rgba(255,255,255,0.85)', margin: '0 auto 0.4rem', boxShadow: '0 2px 8px rgba(230,81,0,0.15)'
                  }}>
                    <Heart size={18} />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#11352A', lineHeight: 1.25 }}>
                    Enhances<br />Overall Wellness*
                  </div>
                </div>
              </div>

              <button
                onClick={() => onQuickView(getProductObj('prod-5'))}
                style={{
                  backgroundColor: '#E65100',
                  backgroundImage: 'linear-gradient(135deg, #FF6F00 0%, #E65100 100%)',
                  color: '#FFFFFF', padding: '0.85rem 2rem', borderRadius: '50px',
                  fontSize: '0.8125rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
                  letterSpacing: '0.04em', boxShadow: '0 6px 20px rgba(230,81,0,0.35)', cursor: 'pointer', border: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>EXPLORE PRE + PROBIOTIC GUMMIES</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>
      </section>

`;

writeFileSync(path, text.slice(0, start) + section + text.slice(end), 'utf8');
console.log('Featured Wellness section updated cleanly.');
