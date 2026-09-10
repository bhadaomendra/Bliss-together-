import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { siteConfig } from '../data/site';

export const Contact: React.FC = () => {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      {/* Header Banner */}
      <section className="section-padding bg-sage-light" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="subheading-tag">LET'S CONNECT</div>
          <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
            We'd Love To Hear From You
          </h1>
          <p className="lead-text">
            Reach out to Shailendra Pal Singh and the team at Krishiv Wellness LLP for product inquiries, distribution partnerships, or general assistance.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream-bg)' }}>
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};
