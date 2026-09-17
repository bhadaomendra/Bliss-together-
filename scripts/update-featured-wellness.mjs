import { readFileSync, writeFileSync } from 'node:fs';

const path = 'src/pages/Home.tsx';
const text = readFileSync(path, 'utf8');

if (text.includes('5. FEATURED WELLNESS SECTION — FINAL COMPOSITE')) {
  console.log('Featured Wellness final composite already updated.');
  process.exit(0);
}

const start = text.indexOf('      {/* 5. FEATURED WELLNESS SECTION');
const end = text.indexOf('      {/* 6. WELLNESS JOURNAL SECTION', start);

if (start === -1 || end === -1) {
  throw new Error('Featured Wellness section markers not found in Home.tsx');
}

const section = `      {/* ========================================================================= */}
      {/* 5. FEATURED WELLNESS SECTION — FINAL COMPOSITE */}
      {/* ========================================================================= */}
      <section
        className="featured-wellness-final"
        aria-label="Featured Wellness — Pre + Probiotic Multivitamin Gummies"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#FFF7EC',
          lineHeight: 0,
          borderTop: '1px solid rgba(27,59,43,0.06)',
          borderBottom: '1px solid rgba(27,59,43,0.06)'
        }}
      >
        <img
          src="/assets/mockup_exact/featured_wellness_banner_full.jpg"
          alt="Bliss Together Pre + Probiotic Multivitamin Gummies — A Happier Gut. A Healthier You."
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            maxWidth: 'none',
            objectFit: 'contain'
          }}
        />

        {/* Invisible interaction layer keeps the approved artwork untouched while preserving CTA behavior. */}
        <button
          type="button"
          aria-label="Explore Pre + Probiotic Gummies"
          onClick={() => onQuickView(getProductObj('prod-5'))}
          style={{
            position: 'absolute',
            left: '38%',
            top: '72%',
            width: '27%',
            height: '15%',
            padding: 0,
            margin: 0,
            border: 0,
            background: 'transparent',
            cursor: 'pointer'
          }}
        />
      </section>

`;

writeFileSync(path, text.slice(0, start) + section + text.slice(end), 'utf8');
console.log('Featured Wellness section switched to the final approved composite artwork.');
