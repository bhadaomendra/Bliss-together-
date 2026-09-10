import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, Globe } from 'lucide-react';
import { siteConfig } from '../data/site';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate polished inquiry send
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
      {/* Contact Info Card */}
      <div style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        padding: '3rem 2.5rem',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          right: '-30px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.2) 0%, rgba(0,0,0,0) 70%)'
        }} />

        <div className="subheading-tag" style={{ color: 'var(--color-accent)' }}>Get In Touch</div>
        <h3 className="heading-md" style={{ color: 'var(--color-cream-bg)', marginBottom: '1rem' }}>
          Connect With Us
        </h3>
        <p style={{ color: '#C3D4CB', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
          Have questions about our gummy range, corporate orders, or partnership opportunities? We are always here to help.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-accent)' }}>
              <User size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', color: '#8CA497', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Primary Contact & Company</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-white)' }}>{siteConfig.primaryContact}</div>
              <div style={{ fontSize: '0.9rem', color: '#C3D4CB' }}>{siteConfig.companyName}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-accent)' }}>
              <Phone size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', color: '#8CA497', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone / WhatsApp</div>
              <a href={`tel:${siteConfig.phoneRaw}`} style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-white)' }}>
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-accent)' }}>
              <Mail size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', color: '#8CA497', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Inquiry</div>
              <a href={`mailto:${siteConfig.email}`} style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--color-accent)' }}>
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-accent)' }}>
              <Globe size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', color: '#8CA497', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Official Website</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--color-white)' }}>
                {siteConfig.websiteDomain}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        padding: '3rem 2.5rem',
        border: '1px solid var(--color-sage-border)',
        boxShadow: 'var(--shadow-md)'
      }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <CheckCircle2 size={56} style={{ color: 'var(--color-primary)', margin: '0 auto 1.25rem' }} />
            <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Enquiry Received!</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Thank you, <strong>{formData.name}</strong>. Your message has been sent directly to {siteConfig.primaryContact} at Krishiv Wellness LLP. We will get back to you shortly!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
              }}
              className="btn btn-secondary"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="heading-md" style={{ marginBottom: '1.5rem' }}>Send Us a Message</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.35rem' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--color-sage-border)',
                    backgroundColor: 'var(--color-cream-bg)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.35rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--color-sage-border)',
                    backgroundColor: 'var(--color-cream-bg)',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.35rem' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--color-sage-border)',
                    backgroundColor: 'var(--color-cream-bg)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.35rem' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Product Inquiry / Bulk Order"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--color-sage-border)',
                    backgroundColor: 'var(--color-cream-bg)',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.35rem' }}>
                Your Message *
              </label>
              <textarea
                required
                rows={5}
                placeholder="How can we assist you with Bliss Together wellness gummies?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--color-sage-border)',
                  backgroundColor: 'var(--color-cream-bg)',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ width: '100%', padding: '1rem' }}
            >
              <Send size={16} />
              <span>{loading ? 'Sending Enquiry...' : 'SEND ENQUIRY'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
