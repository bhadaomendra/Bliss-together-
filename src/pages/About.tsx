import React from 'react';
import { Target, Leaf, Users, Sun } from 'lucide-react';

interface AboutProps { onNavigate: (path: string) => void; }

const green = '#183C2D';
const gold = '#B28B45';
const teal = '#079E8D';
const cream = '#FBF9F5';

export const About: React.FC<AboutProps> = ({ onNavigate }) => (
  <main style={{ paddingTop: 'var(--header-height)', background: cream, color: green }}>
    <section style={{ padding: '58px 0 40px' }}>
      <div style={{ width: 'min(1160px, calc(100% - 44px))', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
          <div style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.22em', color: gold }}>ABOUT KRISHIV</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', lineHeight: .98, margin: '10px 0 0' }}>From Healthcare Experience<br/>to Everyday Wellness</h1>
          <p style={{ maxWidth: 590, margin: '19px auto 0', color: '#617168', lineHeight: 1.7 }}>Building a community that inspires people to embrace wellness, happiness, and healthier everyday choices.</p>
        </div>
        <div style={{ marginTop: 34, padding: '17px 0', borderTop: '1px solid rgba(27,59,43,.1)', borderBottom: '1px solid rgba(27,59,43,.1)', display: 'grid', gridTemplateColumns: '1fr 1px 1fr', alignItems: 'center', gap: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img src='/assets/krishiv_logo_dark.png' alt='Krishiv Wellness LLP' style={{ width: 145, height: 58, objectFit: 'contain' }}/>
            <div><div style={{ fontSize: '.62rem', fontWeight: 800, letterSpacing: '.16em', color: gold }}>THE COMPANY</div><div style={{ fontWeight: 750, marginTop: 5 }}>Krishiv Wellness LLP</div><div style={{ fontSize: '.78rem', color: '#718078', marginTop: 4 }}>The company behind the vision and purpose.</div></div>
          </div>
          <div style={{ height: 58, width: 1, background: 'rgba(178,139,69,.45)' }}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img src='/assets/bliss_together_logo_transparent.png' alt='Bliss Together' style={{ width: 145, height: 58, objectFit: 'contain' }}/>
            <div><div style={{ fontSize: '.62rem', fontWeight: 800, letterSpacing: '.16em', color: gold }}>THE BRAND</div><div style={{ fontWeight: 750, marginTop: 5 }}>Bliss Together</div><div style={{ fontSize: '.78rem', color: '#718078', marginTop: 4 }}>A wellness brand created to make everyday wellbeing feel good.</div></div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ padding: '70px 0 78px' }}>
      <div style={{ width: 'min(1160px, calc(100% - 44px))', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.22em', color: gold }}>THE FOUNDER'S JOURNEY</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.02, margin: '9px 0 22px' }}>A Journey with a Purpose</h2>
          <div style={{ color: '#4B5F55', lineHeight: 1.8, fontSize: '.97rem' }}>
            <p>With <strong>18 years of experience</strong> in the pharmaceutical industry, <strong>Shailendra Pal Singh</strong> has always been closely connected to healthcare and, more importantly, to the wellbeing of the people around him.</p>
            <p>While exploring opportunities to build a new venture with his partner, one thought kept coming back:</p>
            <div style={{ margin: '24px 0', padding: '17px 22px', borderLeft: '2px solid '+gold, background: '#F5F1E8', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.5rem', fontWeight: 700 }}>“Prevention is better than cure.”</div>
            <p>This belief led them towards the world of nutraceuticals—a space where everyday nutrition and wellness could become a part of people’s lives in a simple and enjoyable way.</p>
            <p>As they explored the evolving nutraceutical landscape, they discovered the exciting potential of gummies: a convenient and enjoyable way to make wellness a more approachable part of everyday life.</p>
            <p style={{ fontWeight: 700, color: green }}>And that’s where Bliss Together was born. Because we believe wellness is better when we experience it together.</p>
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src='/assets/our_story_art.png' alt='Shiva and peacock artwork' style={{ width: '100%', maxWidth: 500, maxHeight: 480, objectFit: 'contain' }}/>
          <div style={{ position: 'absolute', right: 0, bottom: 10, display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', background: 'rgba(255,255,255,.94)', border: '1px solid rgba(27,59,43,.08)', borderRadius: 14, boxShadow: '0 12px 30px rgba(27,59,43,.07)' }}>
            <img src='/assets/bliss_together_logo_transparent.png' alt='Bliss Together' style={{ width: 90, height: 38, objectFit: 'contain' }}/>
            <span style={{ fontSize: '.67rem', color: '#64736C', whiteSpace: 'nowrap' }}>A brand by Krishiv Wellness LLP</span>
          </div>
        </div>
      </div>
    </section>

    <section style={{ padding: '74px 0', background: '#F3EFE7' }}>
      <div style={{ width: 'min(1160px, calc(100% - 44px))', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 38px' }}><div style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.22em', color: gold }}>WHAT GUIDES US</div><h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '8px 0 12px' }}>Wellness with Purpose</h2><p style={{ color: '#68776F', margin: 0 }}>Our vision and mission shape the way we build, formulate and grow.</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          <article style={{ background: '#fff', border: '1px solid rgba(27,59,43,.07)', borderRadius: 20, padding: 30, minHeight: 275 }}><div style={{ width: 48, height: 48, borderRadius: '50%', background: '#EAF2EC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: teal, marginBottom: 20 }}><Target size={23}/></div><div style={{ fontSize: '.65rem', fontWeight: 800, letterSpacing: '.16em', color: gold }}>OUR VISION</div><h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.9rem', margin: '7px 0 14px' }}>A healthier way to experience life</h3><p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', lineHeight: 1.55, margin: 0 }}>“To help everyone experience complete wellbeing—holistically—so they can live life to its fullest and enjoy every moment with greater health, happiness and joy.”</p></article>
          <article style={{ background: '#fff', border: '1px solid rgba(27,59,43,.07)', borderRadius: 20, padding: 30, minHeight: 275 }}><div style={{ width: 48, height: 48, borderRadius: '50%', background: '#EAF2EC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: teal, marginBottom: 20 }}><Leaf size={23}/></div><div style={{ fontSize: '.65rem', fontWeight: 800, letterSpacing: '.16em', color: gold }}>OUR MISSION</div><h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.9rem', margin: '7px 0 14px' }}>Making wellness easier to embrace</h3><p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.15rem', lineHeight: 1.55, margin: 0 }}>“To reach every person who cares about their wellbeing and inspire them to become a part of the wave towards a healthier India.”</p></article>
        </div>
      </div>
    </section>

    <section style={{ padding: '74px 0' }}>
      <div style={{ width: 'min(1160px, calc(100% - 44px))', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 38px' }}><div style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.22em', color: gold }}>CORE VALUES</div><h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', margin: '8px 0 12px' }}>Our Three Philosophical Pillars</h2><p style={{ color: '#68776F', margin: 0 }}>Guiding every product we formulate and every decision we make.</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          <article style={{ padding: '8px 34px 8px 0', borderRight: '1px solid rgba(27,59,43,.1)' }}><div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', color: teal }}>01</div><div style={{ color: gold, margin: '5px 0 14px' }}><Leaf size={21}/></div><h3 style={{ fontSize: '1rem' }}>Health Comes First</h3><p style={{ color: '#68776F', lineHeight: 1.65, fontSize: '.87rem' }}>“We believe health is the foundation of a fulfilling life. When we take care of our wellbeing, we create the foundation to experience life with greater energy, happiness and purpose.”</p></article>
          <article style={{ padding: '8px 34px', borderRight: '1px solid rgba(27,59,43,.1)' }}><div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', color: teal }}>02</div><div style={{ color: gold, margin: '5px 0 14px' }}><Users size={21}/></div><h3 style={{ fontSize: '1rem' }}>Genuine Efforts Create Real Impact</h3><p style={{ color: '#68776F', lineHeight: 1.65, fontSize: '.87rem' }}>“We believe that every sincere effort towards wellbeing matters. Small, consistent and genuine choices can create meaningful impact—not only for individuals, but for the people and communities around them.”</p></article>
          <article style={{ padding: '8px 0 8px 34px' }}><div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', color: teal }}>03</div><div style={{ color: gold, margin: '5px 0 14px' }}><Sun size={21}/></div><h3 style={{ fontSize: '1rem' }}>Health is the Source of Joy and Prosperity</h3><p style={{ color: '#68776F', lineHeight: 1.65, fontSize: '.87rem' }}>“We believe true joy and prosperity begin with good health. When people are healthy and well, they are better able to enjoy life, pursue their aspirations and create prosperity for themselves and those around them.”</p></article>
        </div>
      </div>
    </section>

    <section style={{ textAlign: 'center', padding: '66px 20px 74px', background: cream }}><div style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.22em', color: gold }}>OUR BELIEF</div><p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(1.8rem,3vw,2.45rem)', lineHeight: 1.15, margin: '8px 0 0' }}>Wellness is better when we<br/>experience it together.</p><span style={{ display: 'block', width: 34, height: 1, background: gold, margin: '20px auto 0' }}/></section>
  </main>
);