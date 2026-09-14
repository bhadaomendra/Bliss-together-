import React from 'react';
import { Target, Leaf, Users, Sun, Heart, FlaskConical, Shield } from 'lucide-react';

interface AboutProps { 
  onNavigate: (path: string) => void; 
}

const green = '#183C2D';
const gold = '#B28B45';
const teal = '#079E8D';
const cream = '#FBF9F5';

export const About: React.FC<AboutProps> = ({ onNavigate }) => (
  <main className="about-page" style={{ background: cream, color: green, paddingTop: 'var(--header-height)' }}>
    <style>{`
      .about-page { overflow: hidden; }
      .about-container { width: min(1280px, calc(100% - 72px)); margin: 0 auto; }
      .about-eyebrow { font-size: 0.8125rem; font-weight: 800; letter-spacing: 0.18em; color: ${gold}; text-transform: uppercase; }
      .about-display { font-family: "Cormorant Garamond", Georgia, serif; font-weight: 600; letter-spacing: -0.02em; }
      
      /* HERO HEADER (EXACT MOCKUP MATCH) */
      .about-hero { position: relative; padding: 4rem 0 3.5rem; background: #F8F5EE; border-bottom: 1px solid rgba(24, 60, 45, 0.08); overflow: hidden; }
      .about-hero-grid { display: grid; grid-template-columns: 36% 46% 18%; gap: 1.5rem; align-items: center; }
      .about-hero-title { font-size: clamp(2.3rem, 3.5vw, 3.4rem); line-height: 1.12; margin: 0.75rem 0 1.25rem; font-weight: 700; color: ${green}; }
      .about-hero-sub { color: #4A5D52; line-height: 1.6; font-size: 1.05rem; margin-bottom: 1.75rem; max-width: 440px; }
      .about-hero-tag { display: inline-flex; align-items: center; gap: 0.65rem; font-size: 0.78125rem; font-weight: 800; letter-spacing: 0.15em; color: ${green}; text-transform: uppercase; }
      .about-hero-art { text-align: center; display: flex; justify-content: center; align-items: center; }
      .about-hero-art img { width: 100%; height: auto; max-height: 380px; object-fit: contain; display: block; }
      .about-hero-message { text-align: center; padding-left: 0.5rem; }
      .about-hero-message p { font-family: "Cormorant Garamond", Georgia, serif; font-style: italic; font-size: clamp(1.35rem, 2vw, 1.8rem); color: ${green}; font-weight: 600; line-height: 1.25; margin-bottom: 1.25rem; }

      @media (max-width: 992px) {
        .about-hero-grid { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
        .about-hero-sub { max-width: 100%; }
      }
      
      /* FOUNDER'S STORY */
      .about-story { padding: 5rem 0; background: ${cream}; }
      .about-story-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 4.5rem; align-items: flex-start; }
      .about-story-title { font-size: 2.5rem; line-height: 1.2; margin: 0.75rem 0 1.5rem; color: ${green}; font-weight: 700; }
      .about-story-text { color: #2C3E35; line-height: 1.75; font-size: 1.025rem; }
      .about-story-text p { margin-bottom: 1.25rem; }
      .about-quote { background: #FAF5EA; border-left: 4px solid ${gold}; border-radius: 0 12px 12px 0; padding: 1.25rem 1.5rem; font-family: "Cormorant Garamond", Georgia, serif; font-size: 1.45rem; font-weight: 700; color: ${green}; margin: 0.5rem 0 1.25rem; }
      
      /* IDENTITY CARDS (CIRCULAR MOCKUP MATCH) */
      .about-identity { position: relative; background: #FAF8F4; border-radius: 28px; padding: 2.5rem 1.25rem 2rem; box-shadow: 0 10px 35px rgba(0,0,0,0.03); border: 1px solid rgba(27,59,43,0.06); text-align: center; overflow: hidden; }
      .about-identity-heading { font-family: "Cormorant Garamond", Georgia, serif; font-size: 2.1rem; font-weight: 700; color: ${green}; margin-bottom: 2rem; position: relative; z-index: 2; }
      .about-identity-grid { display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 0 auto 1.25rem; width: 100%; position: relative; z-index: 2; }
      .about-identity-card { background: #F4F0E6; border-radius: 50%; width: 230px; height: 230px; padding: 1.2rem 0.85rem; border: none; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: inset 0 0 0 1px rgba(24, 60, 45, 0.04); transition: transform 0.3s ease, box-shadow 0.3s ease; flex-shrink: 0; }
      .about-identity-card:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgba(0,0,0,0.06); }
      .about-identity-card img { height: 54px; max-width: 150px; width: auto; object-fit: contain; margin-bottom: 0.35rem; }

      .about-identity-label { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.1em; color: ${gold}; text-transform: uppercase; margin-top: 0.15rem; }
      .about-identity-name { font-size: 0.875rem; font-weight: 700; color: ${green}; margin: 0.15rem 0 0.25rem; }
      .about-identity-copy { font-size: 0.7rem; color: #5A6E63; line-height: 1.3; max-width: 170px; }
      .about-identity-divider { width: 42px; height: 2px; background-color: ${gold}; border-radius: 1px; margin: 1.5rem auto 1.25rem; position: relative; z-index: 2; }
      .about-identity-principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; padding-top: 0; border-top: none; margin-bottom: 1.75rem; position: relative; z-index: 2; }
      .about-identity-principle-icon { color: #00A896; margin-bottom: 0.35rem; display: flex; justify-content: center; }
      .about-identity-principle span { font-size: 0.78125rem; font-weight: 700; color: ${green}; }
      .about-identity-banner { position: relative; background: #E5EFE6; border-radius: 16px; padding: 1.4rem 2rem 1.6rem; border: 1px solid rgba(24, 60, 45, 0.08); overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; z-index: 2; }


      .about-identity-banner-text { font-family: "Cormorant Garamond", Georgia, serif; font-style: italic; font-size: 1.45rem; font-weight: 600; color: ${green}; line-height: 1.35; margin: 0; position: relative; z-index: 2; }
      .about-identity-banner-line { width: 34px; height: 3px; background-color: ${gold}; border-radius: 2px; margin-top: 10px; position: relative; z-index: 2; }
      
      /* VISION & MISSION */
      .about-guides { padding: 4rem 0; background: #F4F0E8; }
      .about-guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; }
      .about-guide-card { background: #FFFFFF; border-radius: 24px; padding: 3rem 2.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.04); border: 1px solid rgba(27,59,43,0.08); }
      .about-icon { width: 56px; height: 56px; border-radius: 50%; background: #EBF3EE; color: #00A896; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
      .about-card-label { font-size: 0.8125rem; font-weight: 800; letter-spacing: 0.15em; color: ${gold}; text-transform: uppercase; margin-bottom: 0.5rem; }
      .about-card-copy { font-family: "Cormorant Garamond", Georgia, serif; font-size: 1.35rem; font-weight: 600; color: ${green}; line-height: 1.55; font-style: italic; margin: 0; }

      /* CORE VALUES PILLARS (EXACT REFERENCE MATCH) */
      .about-pillars { padding: 5rem 0 6rem; background: #FAF8F4; }
      .about-section-head { text-align: center; margin-bottom: 4rem; }
      .about-section-title { font-family: "Cormorant Garamond", Georgia, serif; font-size: clamp(2.3rem, 3.5vw, 3.2rem); font-weight: 700; color: ${green}; margin: 0.5rem 0 0.75rem; }
      .about-section-sub { font-size: 1.05rem; color: #5A6E63; margin: 0; }
      
      .about-pillar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; align-items: stretch; }
      .about-pillar { padding: 1.5rem 2.5rem; border-right: 1px solid rgba(24, 60, 45, 0.14); display: flex; flex-direction: column; justify-content: flex-start; }
      .about-pillar:first-child { padding-left: 0; }
      .about-pillar:last-child { padding-right: 0; border-right: 0; }
      
      .about-pillar-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; }
      .about-number { font-family: "Cormorant Garamond", Georgia, serif; font-size: 3.2rem; font-weight: 700; color: ${teal}; line-height: 1; display: inline-block; }
      .about-pillar-icon { color: ${gold}; display: flex; align-items: center; justify-content: center; }
      
      .about-pillar h3 { font-size: 1.1rem; font-weight: 800; letter-spacing: 0.04em; color: ${green}; margin: 0 0 1rem; text-transform: uppercase; line-height: 1.3; }
      .about-pillar p { font-size: 0.975rem; color: #4A5D52; line-height: 1.7; font-family: "DM Sans", sans-serif; margin: 0; }

      @media (max-width: 900px) {
        .about-pillar-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        .about-pillar { padding: 0 0 2rem 0 !important; border-right: none !important; border-bottom: 1px solid rgba(24, 60, 45, 0.12); }
        .about-pillar:last-child { border-bottom: none; }
      }
    `}</style>

    {/* HERO SECTION (EXACT MOCKUP MATCH) */}
    <section className="about-hero">
      {/* Left Leaf Cluster Graphic */}
      <div style={{ position: 'absolute', top: '-10px', left: '-20px', width: '220px', height: '300px', opacity: 0.35, pointerEvents: 'none', zIndex: 1 }}>
        <svg viewBox="0 0 220 300" fill="none">
          <path d="M-20 300 C20 180, 100 80, 220 10 C170 90, 110 190,-20 300 Z" fill="#183C2D" />
          <path d="M20 280 C60 190, 130 110, 210 40 C170 120, 110 200, 20 280 Z" fill="#2A523C" />
          <path d="M-10 210 C30 140, 90 80, 160 30 C130 90, 70 150, -10 210 Z" fill="#69896C" />
        </svg>
      </div>

      {/* Top Right Leaf Cluster Graphic (Positioned safely behind without text overlap) */}
      <div style={{ position: 'absolute', top: '0px', right: '-40px', width: '120px', height: '180px', opacity: 0.16, pointerEvents: 'none', zIndex: 0 }}>
        <svg viewBox="0 0 180 240" fill="none">
          <path d="M200 -10 C140 40, 60 120, 10 240 C70 160, 140 80, 200 -10 Z" fill="#183C2D" />
          <path d="M180 20 C130 70, 70 140, 30 230 C80 160, 140 90, 180 20 Z" fill="#2A523C" />
        </svg>
      </div>

      <div className="about-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-hero-grid">
          <div>
            <div className="about-eyebrow">ABOUT KRISHIV</div>
            <h1 className="about-display about-hero-title">From Healthcare Experience<br/>to Everyday Wellness</h1>
            <p className="about-hero-sub">Building a community that inspires people to embrace wellness, happiness, and healthier everyday choices.</p>
            <div className="about-hero-tag">
              <span style={{ color: gold, fontSize: '1.2rem', fontWeight: 300 }}>────</span>
              <span>NOURISH. BALANCE. THRIVE.</span>
            </div>
          </div>

          <div className="about-hero-art">
            <img src="/assets/our_story_art.png" alt="Krishiv Wellness Krishna & Shiva Vision Line Art" />
          </div>

          <div className="about-hero-message" style={{
            position: 'relative',
            zIndex: 5,
            transform: 'rotate(-5deg) translateX(-12px)',
            transformOrigin: 'center center',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.55rem, 2.3vw, 2.15rem)',
              color: '#183C2D',
              fontWeight: 600,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              letterSpacing: '0.01em'
            }}>
              Wellness<br/>
              is better when<br/>
              we experience it<br/>
              together.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: `1.5px solid ${gold}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: gold,
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
              }}>
                <Heart size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FOUNDER'S STORY */}
    <section className="about-story">
      <div className="about-container">
        <div className="about-story-grid">
          <div>
            <div className="about-eyebrow">THE FOUNDER'S JOURNEY</div>
            <h2 className="about-display about-story-title">A Journey with a Purpose</h2>
            <div className="about-story-text">
              <p>With <strong>18 years of experience</strong> in the pharmaceutical industry, <strong>Shailendra Pal Singh</strong> has always been closely connected to healthcare and, more importantly, to the wellbeing of the people around him.</p>
              <p>While exploring opportunities to build a new venture with his partner, one thought kept coming back:</p>
              <div className="about-quote">“Prevention is better than cure.”</div>
              <p>This belief led them towards the world of nutraceuticals — a space where everyday nutrition and wellness could become a part of people’s lives in a simple and enjoyable way.</p>
              <p>As they explored the evolving nutraceutical landscape, they discovered the exciting potential of gummies: a convenient and enjoyable way to make wellness a more approachable part of everyday life.</p>
              <p style={{ fontWeight: 700, color: green, fontSize: '1.1rem' }}>And that’s where Bliss Together was born. Because we believe wellness is better when we experience it together.</p>
            </div>
          </div>

          <div>
            <div className="about-identity">
              {/* Top Left Subtle Leaf Watermark */}
              <svg viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', top: '-10px', left: '-10px', width: '110px', height: '110px', opacity: 0.12, pointerEvents: 'none', zIndex: 0 }}>
                <path d="M10 90 C15 50, 40 20, 90 10 C70 40, 50 70, 10 90 Z" fill="#183C2D" />
              </svg>

              {/* Right Side Botanical Leaf Branch (Matching User Mockup) */}
              <svg viewBox="0 0 120 300" fill="none" style={{ position: 'absolute', top: '10px', right: '-15px', width: '130px', height: '340px', opacity: 0.82, pointerEvents: 'none', zIndex: 1 }}>
                <defs>
                  <linearGradient id="branchLeafGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3E5C42" />
                    <stop offset="50%" stopColor="#6C8F70" />
                    <stop offset="100%" stopColor="#A4C4A6" />
                  </linearGradient>
                </defs>
                <path d="M120 0 C100 60, 90 140, 110 280" stroke="#345238" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                <path d="M105 40 C80 30, 45 35, 25 45 C45 60, 80 55, 105 40 Z" fill="url(#branchLeafGrad)" />
                <path d="M98 95 C70 90, 40 103, 20 120 C45 130, 75 120, 98 95 Z" fill="url(#branchLeafGrad)" />
                <path d="M95 155 C65 157, 35 175, 18 195 C45 200, 75 185, 95 155 Z" fill="url(#branchLeafGrad)" />
                <path d="M102 215 C75 225, 50 245, 35 270 C60 267, 85 250, 102 215 Z" fill="url(#branchLeafGrad)" />
              </svg>

              <h3 className="about-identity-heading">Two Names. One Purpose.</h3>
              <div className="about-identity-grid">
                <div className="about-identity-card">
                  <img src="/assets/krishiv_logo_dark.png" alt="Krishiv Wellness LLP" />
                  <div className="about-identity-label">THE COMPANY</div>
                  <div className="about-identity-name">Krishiv Wellness LLP</div>
                  <div className="about-identity-copy">The foundation that brings vision, expertise and purpose to life.</div>
                </div>

                <div className="about-identity-card">
                  <img src="/assets/bliss_together_logo_transparent.png" alt="Bliss Together" />
                  <div className="about-identity-label">OUR BRAND</div>
                  <div className="about-identity-name">Bliss Together</div>
                  <div className="about-identity-copy">Thoughtfully crafted nutrition for a happier, healthier you.</div>
                </div>
              </div>

              {/* Gold Center Accent Line */}
              <div className="about-identity-divider" />

              <div className="about-identity-principles">
                <div className="about-identity-principle">
                  <div className="about-identity-principle-icon"><Users size={22} /></div>
                  <span>People First</span>
                </div>
                <div className="about-identity-principle">
                  <div className="about-identity-principle-icon"><FlaskConical size={22} /></div>
                  <span>Science Driven</span>
                </div>
                <div className="about-identity-principle">
                  <div className="about-identity-principle-icon"><Shield size={22} /></div>
                  <span>Long-Term Impact</span>
                </div>
              </div>

              <div className="about-identity-banner">
                {/* Left Leaf SVG */}
                <svg viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', width: '68px', height: '68px', pointerEvents: 'none', zIndex: 1 }}>
                  <defs>
                    <linearGradient id="leafLeftGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4A6B4E" />
                      <stop offset="50%" stopColor="#759879" />
                      <stop offset="100%" stopColor="#A8C7AA" />
                    </linearGradient>
                    <linearGradient id="veinGradLeft" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2E4731" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#557959" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path d="M12 88 Q30 70 50 48" stroke="#39543C" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 88 C10 65 30 30 90 12 C72 45 65 75 12 88 Z" fill="url(#leafLeftGrad)" />
                  <path d="M12 88 Q50 50 90 12" stroke="url(#veinGradLeft)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M30 68 Q42 60 50 62" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <path d="M48 50 Q60 42 68 44" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <path d="M66 32 Q76 26 82 28" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                </svg>

                {/* Right Leaf Cluster SVG (3 Leaves) */}
                <svg viewBox="0 0 120 120" fill="none" style={{ position: 'absolute', right: '4px', top: '50%', transform: 'translateY(-50%)', width: '85px', height: '85px', pointerEvents: 'none', zIndex: 1 }}>
                  <defs>
                    <linearGradient id="leafRightGrad" x1="100%" y1="50%" x2="0%" y2="50%">
                      <stop offset="0%" stopColor="#4A6B4E" />
                      <stop offset="60%" stopColor="#759879" />
                      <stop offset="100%" stopColor="#A8C7AA" />
                    </linearGradient>
                  </defs>
                  {/* Stem */}
                  <path d="M115 60 Q70 58 20 48" stroke="#39543C" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Top Leaf */}
                  <path d="M115 60 C95 38 65 18 35 15 C45 35 70 50 115 60 Z" fill="url(#leafRightGrad)" />
                  <path d="M115 60 Q75 35 35 15" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />

                  {/* Middle Leaf */}
                  <path d="M115 60 C85 58 45 52 15 48 C38 62 75 65 115 60 Z" fill="url(#leafRightGrad)" />
                  <path d="M115 60 Q65 54 15 48" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />

                  {/* Bottom Leaf */}
                  <path d="M115 60 C95 75 70 92 40 100 C50 82 75 70 115 60 Z" fill="url(#leafRightGrad)" />
                  <path d="M115 60 Q78 78 40 100" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                </svg>

                <p className="about-identity-banner-text">
                  Nourish. Balance. Thrive.<br />
                  Together.
                </p>
                <div className="about-identity-banner-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* VISION & MISSION */}
    <section className="about-guides">
      <div className="about-container">
        <div className="about-guide-grid">
          <div className="about-guide-card">
            <div className="about-icon"><Target size={28} /></div>
            <div className="about-card-label">OUR VISION</div>
            <p className="about-card-copy">“To help everyone experience complete wellbeing—holistically—so they can live life to its fullest and enjoy every moment with greater health, happiness and joy.”</p>
          </div>

          <div className="about-guide-card">
            <div className="about-icon"><Leaf size={28} /></div>
            <div className="about-card-label">OUR MISSION</div>
            <p className="about-card-copy">“To reach every person who cares about their wellbeing and inspire them to become a part of the wave towards a healthier India.”</p>
          </div>
        </div>
      </div>
    </section>

    {/* CORE VALUES (PERFECT 1:1 ALIGNMENT MATCH) */}
    <section className="about-pillars">
      <div className="about-container">
        <div className="about-section-head">
          <div className="about-eyebrow">CORE VALUES</div>
          <h2 className="about-display about-section-title">Our Three Philosophical Pillars</h2>
          <p className="about-section-sub">Guiding every product we formulate and every decision we make.</p>
        </div>

        <div className="about-pillar-grid">
          {/* PILLAR 01 */}
          <article className="about-pillar">
            <div className="about-pillar-header">
              <span className="about-number">01</span>
              <div className="about-pillar-icon">
                <Leaf size={32} strokeWidth={1.75} />
              </div>
            </div>
            <h3>HEALTH COMES FIRST</h3>
            <p>“We believe health is the foundation of a fulfilling life. When we take care of our wellbeing, we create the foundation to experience life with greater energy, happiness and purpose.”</p>
          </article>

          {/* PILLAR 02 */}
          <article className="about-pillar">
            <div className="about-pillar-header">
              <span className="about-number">02</span>
              <div className="about-pillar-icon">
                <Users size={32} strokeWidth={1.75} />
              </div>
            </div>
            <h3>GENUINE EFFORTS CREATE REAL IMPACT</h3>
            <p>“We believe that every sincere effort towards wellbeing matters. Small, consistent and genuine choices can create meaningful impact—not only for individuals, but for the people and communities around them.”</p>
          </article>

          {/* PILLAR 03 */}
          <article className="about-pillar">
            <div className="about-pillar-header">
              <span className="about-number">03</span>
              <div className="about-pillar-icon">
                <Sun size={32} strokeWidth={1.75} />
              </div>
            </div>
            <h3>HEALTH IS THE SOURCE OF JOY AND PROSPERITY</h3>
            <p>“We believe true joy and prosperity begin with good health. When people are healthy and well, they are better able to enjoy life, pursue their aspirations and create prosperity for themselves and those around them.”</p>
          </article>
        </div>
      </div>
    </section>

  </main>
);