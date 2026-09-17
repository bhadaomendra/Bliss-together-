import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/pages/Home.tsx';
const text = readFileSync(path, 'utf8');

if (text.includes('5. FEATURED WELLNESS SECTION — PRE + PROBIOTIC MULTIVITAMIN')) {
  console.log('Featured Wellness section already updated.');
  process.exit(0);
}

const start = text.indexOf('      {/* 5. FEATURED WELLNESS SECTION');
const end = text.indexOf('      {/* 6. WELLNESS JOURNAL SECTION', start);

if (start === -1 || end === -1) {
  throw new Error('Featured Wellness section markers not found in Home.tsx');
}

const section = `      {/* ========================================================================= */}
      {/* 5. FEATURED WELLNESS SECTION — PRE + PROBIOTIC MULTIVITAMIN */}
      {/* ========================================================================= */}
      <section style={{
        position: 'relative',
        backgroundColor: '#FFF7EC',
        padding: '3rem 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(27,59,43,0.06)',
        borderBottom: '1px solid rgba(27,59,43,0.06)'
      }}>
        <div className="featured-woman-bg" style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: '38%',
          zIndex: 1, pointerEvents: 'none'
        }}>
          <img
            src="/assets/mockup_exact/featured_woman_exact.jpg"
            alt="Woman enjoying wellness gummies"
            style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center right',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 18%, black 50%)',
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 18%, black 50%)'
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1380px' }}>
          <div className="featured-product-grid">
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingBottom: '0.5rem'
            }}>
              <div style={{
                position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
                width: '88%', height: '26px', borderRadius: '50%',
                background: 'radial-gradient(ellipse at center, rgba(17,35,28,0.28) 0%, rgba(17,35,28,0.10) 55%, rgba(17,35,28,0) 80%)',
                filter: 'blur(7px)', pointerEvents: 'none', zIndex: 1
              }} />
              <img
                src="/assets/featured_user_tub_clean.png"
                alt="Bliss Together Pre + Probiotic Multivitamin Gummies"
                style={{
                  width: '100%', maxHeight: '460px', objectFit: 'contain', position: 'relative', zIndex: 2,
                  filter: 'drop-shadow(0 16px 26px rgba(17,35,28,0.20))'
                }}
              />
            </div>

            <div style={{ padding: '0.5rem 0', maxWidth: '560px' }}>
              <div style={{
                fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.15em', color: '#B56500',
                textTransform: 'uppercase', marginBottom: '0.4rem'
              }}>
                FEATURED WELLNESS
              </div>

              <h2 style={{
                fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: '#11352A',
                marginBottom: '0.65rem', lineHeight: 1.15
              }}>
                A Happier Gut. A Healthier You.
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#4A5568', lineHeight: 1.5, marginBottom: '1.5rem', maxWidth: '500px' }}>
                Pre + Probiotic Multivitamin Gummies with prebiotic fiber, probiotics and essential vitamins to support gut health, immunity and everyday wellness.
              </p>

              <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1.5px solid #F28C00', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F28C00', backgroundColor: 'rgba(255,255,255,0.75)' }}>
                    <Leaf size={15} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#11352A' }}>Prebiotic Fiber</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1.5px solid #F28C00', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F28C00', backgroundColor: 'rgba(255,255,255,0.75)' }}>
                    <span style={{ fontSize: '0.8rem' }}>●</span>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#11352A' }}>Probiotics</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1.5px solid #F28C00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: '#F28C00', backgroundColor: 'rgba(255,255,255,0.75)' }}>
                    V+
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#11352A' }}>Essential Vitamins</span>
                </div>
              </div>

              <button
                onClick={() => onQuickView(getProductObj('prod-5'))}
                style={{
                  backgroundColor: '#F28C00', color: '#FFFFFF', padding: '0.85rem 1.85rem', borderRadius: '50px',
                  fontSize: '0.8125rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
                  letterSpacing: '0.04em', boxShadow: '0 4px 16px rgba(242,140,0,0.28)', cursor: 'pointer', border: 'none'
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
console.log('Featured Wellness section updated for the production build.');
