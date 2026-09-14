import React from 'react';
import { Target, Leaf, Users, TestTube, ShieldCheck, Sun } from 'lucide-react';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <main className="about-page" style={{ paddingTop: 'var(--header-height)', background: '#FBF9F5', color: '#1B3B2B' }}>
      <style>{`
        .about-page * { box-sizing: border-box; }
        .about-wrap { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
        .about-kicker {
          font-size: .75rem; font-weight: 800; letter-spacing: .2em;
          color: #B18A42; text-transform: uppercase;
        }
        .about-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.7rem, 5vw, 4.8rem); line-height: .98;
          font-weight: 700; margin: 0; color: #173C2D;
        }
        .about-lead { font-size: 1.05rem; line-height: 1.75; color: #566A60; max-width: 590px; }
        .identity-strip {
          display: grid; grid-template-columns: 1fr auto 1fr; align-items: stretch;
          gap: 28px; margin-top: 34px;
        }
        .identity-card {
          display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 20px;
          padding: 22px 28px; background: rgba(255,255,255,.72);
          border: 1px solid rgba(27,59,43,.09); border-radius: 18px;
        }
        .identity-card img { width: 150px; height: 54px; object-fit: contain; }
        .identity-label { font-size: .68rem; font-weight: 800; letter-spacing: .15em; color: #B18A42; text-transform: uppercase; }
        .identity-name { font-size: 1.05rem; font-weight: 750; margin-top: 4px; }
        .identity-copy { font-size: .84rem; line-height: 1.5; color: #66776F; margin-top: 4px; }
        .identity-divider { display: flex; align-items: center; color: #C5A059; font-family: Georgia, serif; font-size: 1.7rem; }
        .story-grid {
          display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(360px, .96fr);
          gap: clamp(45px, 7vw, 90px); align-items: center;
        }
        .story-copy { font-size: 1rem; line-height: 1.82; color: #3F554B; }
        .story-copy p { margin: 0 0 20px; }
        .story-copy strong { color: #1B3B2B; }
        .quote {
          margin: 28px 0; padding: 19px 24px; border-left: 3px solid #08A896;
          background: #F3F7F3; border-radius: 0 12px 12px 0;
          font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.65rem;
          font-weight: 700; color: #1B3B2B;
        }
        .art-panel {
          background: #fff; border: 1px solid rgba(27,59,43,.08);
          border-radius: 26px; padding: 28px 28px 22px; box-shadow: 0 18px 50px rgba(27,59,43,.055);
        }
        .art-panel img { display: block; width: 100%; height: auto; max-height: 370px; object-fit: contain; }
        .company-mini {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px;
        }
        .mini-box {
          padding: 16px 17px; background: #F0F6F1; border-radius: 14px;
          border: 1px solid rgba(27,59,43,.06);
        }
        .mini-box.brand { background: #FBF5E9; }
        .mini-label { font-size: .63rem; font-weight: 800; letter-spacing: .13em; color: #B18A42; text-transform: uppercase; }
        .mini-name { font-weight: 750; margin-top: 5px; }
        .mini-copy { font-size: .78rem; line-height: 1.45; color: #64756C; margin-top: 3px; }
        .section { padding: 82px 0; }
        .section-soft { background: #F3EFE7; }
        .section-head { text-align: center; max-width: 760px; margin: 0 auto 42px; }
        .section-head h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.15rem, 4vw, 3.15rem); line-height: 1.05; margin: 8px 0 12px;
        }
        .section-head p { color: #66776F; line-height: 1.65; margin: 0; }
        .vm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .vm-card {
          background: #fff; border: 1px solid rgba(27,59,43,.08); border-radius: 22px;
          padding: 34px; min-height: 310px;
        }
        .icon-circle {
          width: 52px; height: 52px; border-radius: 50%; background: #EAF3EE;
          display: flex; align-items: center; justify-content: center; color: #08A896; margin-bottom: 24px;
        }
        .vm-card .label { font-size: .72rem; font-weight: 800; letter-spacing: .17em; color: #B18A42; text-transform: uppercase; }
        .vm-card h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2rem; margin: 8px 0 15px; }
        .vm-card p { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.28rem; line-height: 1.55; margin: 0; color: #294638; }
        .pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
        .pillar { padding: 14px 34px 8px; border-right: 1px solid rgba(27,59,43,.12); }
        .pillar:first-child { padding-left: 0; }
        .pillar:last-child { border-right: 0; padding-right: 0; }
        .pillar-no { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2.25rem; color: #08A896; font-weight: 700; }
        .pillar-icon { color: #B18A42; margin: 2px 0 16px; }
        .pillar h3 { font-size: 1.05rem; line-height: 1.4; margin: 0 0 10px; text-transform: uppercase; }
        .pillar p { font-size: .92rem; line-height: 1.7; color: #64756C; margin: 0; }
        .closing {
          padding: 76px 20px 86px; text-align: center; position: relative; overflow: hidden;
          background: #FBF9F5;
        }
        .closing:before, .closing:after {
          content: ''; position: absolute; width: 240px; height: 100px; border-top: 1px solid rgba(27,59,43,.08);
          border-radius: 50%; opacity: .7;
        }
        .closing:before { left: -50px; bottom: 24px; transform: rotate(14deg); }
        .closing:after { right: -50px; bottom: 34px; transform: rotate(-14deg); }
        .closing p {
          position: relative; z-index: 1; font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem); font-style: italic; line-height: 1.2; margin: 0;
        }
        .gold-dot { display: block; width: 34px; height: 1px; background: #C5A059; margin: 20px auto 0; }
        @media (max-width: 900px) {
          .identity-strip { grid-template-columns: 1fr; gap: 12px; }
          .identity-divider { justify-content: center; transform: rotate(90deg); height: 10px; }
          .story-grid { grid-template-columns: 1fr; }
          .art-panel { order: -1; }
          .vm-grid { grid-template-columns: 1fr; }
          .pillars { grid-template-columns: 1fr; gap: 28px; }
          .pillar, .pillar:first-child, .pillar:last-child { padding: 0 0 28px; border-right: 0; border-bottom: 1px solid rgba(27,59,43,.1); }
          .pillar:last-child { border-bottom: 0; padding-bottom: 0; }
        }
        @media (max-width: 600px) {
          .about-wrap { width: min(100% - 28px, 1180px); }
          .section { padding: 62px 0; }
          .identity-card { grid-template-columns: 1fr; text-align: center; justify-items: center; padding: 20px 16px; }
          .identity-card img { width: 145px; }
          .art-panel { padding: 18px 14px 14px; border-radius: 20px; }
          .company-mini { grid-template-columns: 1fr; }
          .vm-card { padding: 27px 22px; min-height: auto; }
          .vm-card p { font-size: 1.16rem; }
          .story-copy { font-size: .95rem; }
        }
      `}</style>

      {/* HERO — calm, spacious and identity-led */}
      <section style={{ padding: '62px 0 42px', background: '#FBF9F5' }}>
        <div className="about-wrap">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <div className="about-kicker">ABOUT KRISHIV</div>
            <h1 className="about-title" style={{ marginTop: 10 }}>
              From Healthcare Experience<br />to Everyday Wellness
            </h1>
            <p className="about-lead" style={{ margin: '20px auto 0' }}>
              Building a community that inspires people to embrace wellness, happiness, and healthier everyday choices.
            </p>
          </div>

          <div className="identity-strip">
            <div className="identity-card">
              <img src="/assets/krishiv_logo_dark.png" alt="Krishiv Wellness LLP" />
              <div>
                <div className="identity-label">The Company</div>
                <div className="identity-name">Krishiv Wellness LLP</div>
                <div className="identity-copy">The foundation that brings vision, expertise and purpose to life.</div>
              </div>
            </div>

            <div className="identity-divider">✦</div>

            <div className="identity-card">
              <img src="/assets/bliss_together_logo_transparent.png" alt="Bliss Together" />
              <div>
                <div className="identity-label">Our Brand</div>
                <div className="identity-name">Bliss Together</div>
                <div className="identity-copy">Thoughtfully crafted nutrition for a happier, healthier you.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER'S JOURNEY + SHIVA ART */}
      <section className="section" style={{ paddingTop: 54 }}>
        <div className="about-wrap">
          <div className="story-grid">
            <div>
              <div className="about-kicker" style={{ marginBottom: 9 }}>THE FOUNDER'S JOURNEY</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.15rem, 4vw, 3.1rem)',
                lineHeight: 1.05, margin: '0 0 24px'
              }}>A Journey with a Purpose</h2>

              <div className="story-copy">
                <p>
                  With <strong>18 years of experience</strong> in the pharmaceutical industry, <strong>Shailendra Pal Singh</strong> has always been closely connected to healthcare and, more importantly, to the wellbeing of the people around him.
                </p>
                <p>
                  While exploring opportunities to build a new venture with his partner, one thought kept coming back:
                </p>
                <div className="quote">“Prevention is better than cure.”</div>
                <p>
                  This belief led them towards the world of nutraceuticals—a space where everyday nutrition and wellness could become a part of people’s lives in a simple and enjoyable way.
                </p>
                <p>
                  As they explored the evolving nutraceutical landscape, they discovered the exciting potential of gummies: a convenient and enjoyable way to make wellness a more approachable part of everyday life.
                </p>
                <p style={{ fontWeight: 700, color: '#1B3B2B', fontSize: '1.04rem' }}>
                  And that’s where Bliss Together was born. Because we believe wellness is better when we experience it together.
                </p>
              </div>
            </div>

            <div className="art-panel">
              <img src="/assets/our_story_art.png" alt="Krishiv Wellness Shiva and peacock line art" />
              <div className="company-mini">
                <div className="mini-box">
                  <div className="mini-label">Company</div>
                  <div className="mini-name">Krishiv Wellness LLP</div>
                  <div className="mini-copy">Founder: Shailendra Pal Singh</div>
                </div>
                <div className="mini-box brand">
                  <div className="mini-label">Brand</div>
                  <div className="mini-name">Bliss Together</div>
                  <div className="mini-copy">Nourish. Balance. Thrive.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section section-soft">
        <div className="about-wrap">
          <div className="section-head">
            <div className="about-kicker">WHAT GUIDES US</div>
            <h2>Wellness with purpose.</h2>
            <p>Our vision and mission shape the way we build, formulate and grow.</p>
          </div>

          <div className="vm-grid">
            <article className="vm-card">
              <div className="icon-circle"><Target size={25} /></div>
              <div className="label">Our Vision</div>
              <h3>A healthier way to experience life</h3>
              <p>“To help everyone experience complete wellbeing—holistically—so they can live life to its fullest and enjoy every moment with greater health, happiness and joy.”</p>
            </article>

            <article className="vm-card">
              <div className="icon-circle"><Leaf size={25} /></div>
              <div className="label">Our Mission</div>
              <h3>Making wellness easier to embrace</h3>
              <p>“To reach every person who cares about their wellbeing and inspire them to become a part of the wave towards a healthier India.”</p>
            </article>
          </div>
        </div>
      </section>

      {/* THREE PHILOSOPHICAL PILLARS */}
      <section className="section">
        <div className="about-wrap">
          <div className="section-head">
            <div className="about-kicker">CORE VALUES</div>
            <h2>Our Three Philosophical Pillars</h2>
            <p>Guiding every product we formulate and every decision we make.</p>
          </div>

          <div className="pillars">
            <article className="pillar">
              <div className="pillar-no">01</div>
              <div className="pillar-icon"><Leaf size={22} /></div>
              <h3>Health Comes First</h3>
              <p>“We believe health is the foundation of a fulfilling life. When we take care of our wellbeing, we create the foundation to experience life with greater energy, happiness and purpose.”</p>
            </article>

            <article className="pillar">
              <div className="pillar-no">02</div>
              <div className="pillar-icon"><Users size={22} /></div>
              <h3>Genuine Efforts Create Real Impact</h3>
              <p>“We believe that every sincere effort towards wellbeing matters. Small, consistent and genuine choices can create meaningful impact—not only for individuals, but for the people and communities around them.”</p>
            </article>

            <article className="pillar">
              <div className="pillar-no">03</div>
              <div className="pillar-icon"><Sun size={22} /></div>
              <h3>Health is the Source of Joy and Prosperity</h3>
              <p>“We believe true joy and prosperity begin with good health. When people are healthy and well, they are better able to enjoy life, pursue their aspirations and create prosperity for themselves and those around them.”</p>
            </article>
          </div>
        </div>
      </section>

      {/* CLOSING — deliberately quiet so the page does not feel crowded */}
      <section className="closing">
        <div className="about-kicker">OUR BELIEF</div>
        <p>Wellness is better when we<br />experience it together.</p>
        <span className="gold-dot" />
      </section>
    </main>
  );
};
