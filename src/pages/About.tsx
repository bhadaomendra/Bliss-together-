import React from 'react';
import { Target, Leaf, Users, TestTube, ShieldCheck, Sun, Heart } from 'lucide-react';
import { siteConfig } from '../data/site';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <main style={{ paddingTop: 'var(--header-height)', backgroundColor: '#FBF9F5', minHeight: '100vh' }}>
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER: ABOUT KRISHIV (EXACT 1:1 BANNER MATCH) */}
      {/* ========================================================================= */}
      <section style={{
        position: 'relative',
        padding: '3.5rem 0',
        backgroundColor: '#F7F4EC',
        borderBottom: '1px solid rgba(27,59,43,0.08)',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Leaf Accents */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '-30px',
          width: '180px',
          height: '240px',
          opacity: 0.22,
          pointerEvents: 'none'
        }}>
          <svg viewBox="0 0 200 240" fill="none">
            <path d="M10 230 C30 150, 90 70, 180 10 C140 80, 100 160, 10 230 Z" fill="#1B3B2B" />
            <path d="M40 220 C70 160, 120 100, 190 50 C160 110, 110 180, 40 220 Z" fill="#2A523C" />
          </svg>
        </div>

        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '-20px',
          width: '160px',
          height: '200px',
          opacity: 0.22,
          pointerEvents: 'none'
        }}>
          <svg viewBox="0 0 160 200" fill="none">
            <path d="M150 10 C100 40, 50 100, 10 190 C60 130, 110 60, 150 10 Z" fill="#1B3B2B" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            
            {/* 1. Left Content Column */}
            <div>
              <div style={{
                fontSize: '0.8125rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                color: '#C5A059',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}>
                ABOUT KRISHIV
              </div>

              <h1 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.1rem, 3.2vw, 3rem)',
                fontWeight: 700,
                color: '#1B3B2B',
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}>
                From Healthcare Experience to Everyday Wellness
              </h1>

              <p style={{
                fontSize: '1.025rem',
                color: '#4A5D52',
                lineHeight: 1.6,
                marginBottom: '1.75rem'
              }}>
                Building a community that inspires people to embrace wellness, happiness, and healthier everyday choices.
              </p>

              {/* Tagline Line */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.78125rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: '#1B3B2B',
                textTransform: 'uppercase'
              }}>
                <span style={{ color: '#C5A059', fontWeight: 300, fontSize: '1.2rem' }}>────</span>
                <span>NOURISH. BALANCE. THRIVE.</span>
              </div>
            </div>

            {/* 2. Center Seamless Artwork Column */}
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/assets/our_story_art.png"
                alt="Krishiv Wellness Krishna & Shiva Vision Line Art"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '320px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* 3. Right Handwritten Calligraphy Quote Column */}
            <div style={{ textAlign: 'center', paddingLeft: '0.5rem' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)',
                color: '#1B3B2B',
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: '1rem'
              }}>
                Wellness<br />
                is better when<br />
                we experience it<br />
                together.
              </p>
              
              {/* Gold Heart Icon */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1.5px solid #C5A059',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C5A059'
                }}>
                  <Heart size={16} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE FOUNDER'S JOURNEY & TWO NAMES ONE PURPOSE */}
      {/* ========================================================================= */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FBF9F5' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4.5rem',
            alignItems: 'flex-start'
          }}>
            
            {/* LEFT COLUMN: A Journey with a Purpose */}
            <div>
              <div style={{
                fontSize: '0.8125rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}>
                THE FOUNDER'S JOURNEY
              </div>

              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#1B3B2B',
                lineHeight: 1.2,
                marginBottom: '1.5rem'
              }}>
                A Journey with a Purpose
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                color: '#2C3E35',
                fontSize: '1.025rem',
                lineHeight: 1.75
              }}>
                <p>
                  With <strong>18 years of experience</strong> in the pharmaceutical industry, <strong>Shailendra Pal Singh</strong> has always been closely connected to healthcare and, more importantly, to the wellbeing of the people around him.
                </p>
                
                <p>
                  While exploring opportunities to build a new venture with his partner, one thought kept coming back:
                </p>

                {/* Highlight Quote Box */}
                <div style={{
                  backgroundColor: '#FAF5EA',
                  borderLeft: '4px solid #C5A059',
                  borderRadius: '0 12px 12px 0',
                  padding: '1.25rem 1.5rem',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#1B3B2B',
                  margin: '0.5rem 0'
                }}>
                  “Prevention is better than cure.”
                </div>

                <p>
                  This belief led them towards the world of nutraceuticals — a space where everyday nutrition and wellness could become a part of people’s lives in a simple and enjoyable way.
                </p>
                <p>
                  As they explored the evolving nutraceutical landscape, they discovered the exciting potential of gummies: a convenient and enjoyable way to make wellness a more approachable part of everyday life.
                </p>
                <p style={{ fontWeight: 700, color: '#1B3B2B', fontSize: '1.1rem' }}>
                  And that’s where Bliss Together was born. Because we believe wellness is better when we experience it together.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Two Names. One Purpose. */}
            <div>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                border: '1px solid rgba(27,59,43,0.08)',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.85rem',
                  fontWeight: 700,
                  color: '#1B3B2B',
                  marginBottom: '2rem'
                }}>
                  Two Names. One Purpose.
                </h3>

                {/* 2 Circles Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {/* Circle 1: Krishiv Wellness */}
                  <div style={{
                    backgroundColor: '#FAF7F2',
                    borderRadius: '20px',
                    padding: '1.5rem 1rem',
                    border: '1px solid rgba(27,59,43,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    <img
                      src="/assets/krishiv_logo_dark.png"
                      alt="Krishiv Wellness LLP"
                      style={{ height: '54px', width: 'auto', objectFit: 'contain', marginBottom: '0.75rem' }}
                    />
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', color: '#C5A059', textTransform: 'uppercase' }}>
                      THE COMPANY
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1B3B2B', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
                      Krishiv Wellness LLP
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#5A6E63', lineHeight: 1.4 }}>
                      The foundation that brings vision, expertise and purpose to life.
                    </div>
                  </div>

                  {/* Circle 2: Bliss Together */}
                  <div style={{
                    backgroundColor: '#FAF7F2',
                    borderRadius: '20px',
                    padding: '1.5rem 1rem',
                    border: '1px solid rgba(27,59,43,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    <img
                      src="/assets/bliss_together_logo_transparent.png"
                      alt="Bliss Together"
                      style={{ height: '54px', width: 'auto', objectFit: 'contain', marginBottom: '0.75rem' }}
                    />
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', color: '#C5A059', textTransform: 'uppercase' }}>
                      OUR BRAND
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1B3B2B', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
                      Bliss Together
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#5A6E63', lineHeight: 1.4 }}>
                      Thoughtfully crafted nutrition for a happier, healthier you.
                    </div>
                  </div>
                </div>

                {/* 3 Icon Props Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(27,59,43,0.08)',
                  marginBottom: '2rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#00A896', marginBottom: '0.35rem', display: 'flex', justifyContent: 'center' }}>
                      <Users size={22} />
                    </div>
                    <div style={{ fontSize: '0.78125rem', fontWeight: 700, color: '#1B3B2B' }}>People First</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#00A896', marginBottom: '0.35rem', display: 'flex', justifyContent: 'center' }}>
                      <TestTube size={22} />
                    </div>
                    <div style={{ fontSize: '0.78125rem', fontWeight: 700, color: '#1B3B2B' }}>Science Driven</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#00A896', marginBottom: '0.35rem', display: 'flex', justifyContent: 'center' }}>
                      <ShieldCheck size={22} />
                    </div>
                    <div style={{ fontSize: '0.78125rem', fontWeight: 700, color: '#1B3B2B' }}>Long-Term Impact</div>
                  </div>
                </div>

                {/* Sage Leaf Banner */}
                <div style={{
                  backgroundColor: '#EBF3EE',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid rgba(27,59,43,0.08)'
                }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#1B3B2B',
                    margin: 0
                  }}>
                    Nourish. Balance. Thrive. Together.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR VISION & OUR MISSION */}
      {/* ========================================================================= */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F4F0E8' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {/* OUR VISION */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              border: '1px solid rgba(27,59,43,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#EBF3EE',
                  color: '#00A896',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <Target size={28} />
                </div>

                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  OUR VISION
                </div>

                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  color: '#1B3B2B',
                  lineHeight: 1.55,
                  fontStyle: 'italic'
                }}>
                  “To help everyone experience complete wellbeing—holistically—so they can live life to its fullest and enjoy every moment with greater health, happiness and joy.”
                </p>
              </div>
            </div>

            {/* OUR MISSION */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              border: '1px solid rgba(27,59,43,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#EBF3EE',
                  color: '#00A896',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <Leaf size={28} />
                </div>

                <div style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  OUR MISSION
                </div>

                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  color: '#1B3B2B',
                  lineHeight: 1.55,
                  fontStyle: 'italic'
                }}>
                  “To reach every person who cares about their wellbeing and inspire them to become a part of the wave towards a healthier India.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CORE VALUES: OUR THREE PHILOSOPHICAL PILLARS */}
      {/* ========================================================================= */}
      <section style={{ padding: '5rem 0 6rem', backgroundColor: '#FBF9F5' }}>
        <div className="container">
          
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{
              fontSize: '0.8125rem',
              fontWeight: 800,
              letterSpacing: '0.18em',
              color: '#C5A059',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              CORE VALUES
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '2.8rem',
              fontWeight: 700,
              color: '#1B3B2B',
              marginBottom: '0.75rem'
            }}>
              Our Three Philosophical Pillars
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5A6E63' }}>
              Guiding every product we formulate and every decision we make.
            </p>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.25rem'
          }}>
            
            {/* PILLAR 01 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.75rem 2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              border: '1px solid rgba(27,59,43,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: '#00A896',
                  lineHeight: 1
                }}>01</span>
                <span style={{ color: '#C5A059', fontSize: '1.4rem' }}>🍃</span>
              </div>

              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                color: '#1B3B2B',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                HEALTH COMES FIRST
              </h3>

              <p style={{
                fontSize: '0.975rem',
                color: '#4A5D52',
                lineHeight: 1.7
              }}>
                “We believe health is the foundation of a fulfilling life. When we take care of our wellbeing, we create the foundation to experience life with greater energy, happiness and purpose.”
              </p>
            </div>

            {/* PILLAR 02 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.75rem 2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              border: '1px solid rgba(27,59,43,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: '#00A896',
                  lineHeight: 1
                }}>02</span>
                <span style={{ color: '#C5A059', fontSize: '1.4rem' }}>👥</span>
              </div>

              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                color: '#1B3B2B',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                GENUINE EFFORTS CREATE REAL IMPACT
              </h3>

              <p style={{
                fontSize: '0.975rem',
                color: '#4A5D52',
                lineHeight: 1.7
              }}>
                “We believe that every sincere effort towards wellbeing matters. Small, consistent and genuine choices can create meaningful impact—not only for individuals, but for the people and communities around them.”
              </p>
            </div>

            {/* PILLAR 03 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.75rem 2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              border: '1px solid rgba(27,59,43,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: '#00A896',
                  lineHeight: 1
                }}>03</span>
                <span style={{ color: '#C5A059', fontSize: '1.4rem' }}>☀️</span>
              </div>

              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                color: '#1B3B2B',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                HEALTH IS THE SOURCE OF JOY AND PROSPERITY
              </h3>

              <p style={{
                fontSize: '0.975rem',
                color: '#4A5D52',
                lineHeight: 1.7
              }}>
                “We believe true joy and prosperity begin with good health. When people are healthy and well, they are better able to enjoy life, pursue their aspirations and create prosperity for themselves and those around them.”
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
