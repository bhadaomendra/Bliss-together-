import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, User, Globe, MessageSquare } from 'lucide-react';
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

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="contact-form-shell" style={{ maxWidth: '1160px', margin: '0 auto' }}>
      {/* Main Unified Split Card */}
      <div className="contact-form-card" style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(24, 60, 45, 0.08)',
        border: '1px solid rgba(24, 60, 45, 0.08)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))'
      }}>
        {/* Left Dark Green Concierge Card */}
        <div className="contact-concierge-col" style={{
          backgroundColor: '#183C2D',
          color: '#FFFFFF',
          padding: '3rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          wordBreak: 'break-word',
          overflowWrap: 'anywhere'
        }}>
          {/* Subtle elegant pattern background accent */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(178, 139, 69, 0.15) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }} />

          <div>
            {/* Top Brand Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(178, 139, 69, 0.3)',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: '#B28B45',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}>
              <span>✦ KRISHIV WELLNESS LLP</span>
            </div>

            <h3 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '2.2rem',
              fontWeight: 700,
              color: '#F7F5EE',
              lineHeight: 1.15,
              marginBottom: '0.85rem'
            }}>
              Connect With Our Team
            </h3>

            <p style={{ color: '#D4E2D9', fontSize: '0.96875rem', lineHeight: '1.65', marginBottom: '2.25rem' }}>
              Have questions about our gummy formulations, corporate orders, or retail partnerships? We are always here to help.
            </p>

            {/* Contact Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.65rem' }}>
              
              {/* Item 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B28B45',
                  flexShrink: 0
                }}>
                  <User size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9BB5A6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                    COMPANY NAME
                  </div>
                  <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {siteConfig.companyName}
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.709 1.464h.005c6.554 0 11.889-5.335 11.892-11.892 0-3.18-1.237-6.168-3.486-8.418z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9BB5A6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                    WHATSAPP SUPPORT
                  </div>
                  <a
                    href={siteConfig.getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#25D366', textDecoration: 'none' }}
                  >
                    Connect on WhatsApp
                  </a>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B28B45',
                  flexShrink: 0
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9BB5A6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                    EMAIL INQUIRY
                  </div>
                  <a href={`mailto:${siteConfig.email}`} style={{ fontSize: '0.96875rem', fontWeight: 600, color: '#B28B45', textDecoration: 'none', wordBreak: 'break-all', overflowWrap: 'anywhere' }}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Item 4 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B28B45',
                  flexShrink: 0
                }}>
                  <Globe size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#9BB5A6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                    OFFICIAL WEBSITE
                  </div>
                  <div style={{ fontSize: '0.96875rem', fontWeight: 600, color: '#FFFFFF' }}>
                    {siteConfig.websiteDomain}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Quick WhatsApp Action Button */}
          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <a
              href={siteConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                width: '100%',
                padding: '0.85rem 1.25rem',
                borderRadius: '12px',
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                transition: 'transform 0.2s ease'
              }}
            >
              <MessageSquare size={18} />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Right Form Card */}
        <div className="contact-fields-col" style={{
          backgroundColor: '#FFFFFF',
          padding: '3rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#E3F0E6',
                color: '#183C2D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.8rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.65rem' }}>
                Enquiry Received!
              </h3>
              <p style={{ color: '#4A5D52', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Thank you, <strong>{formData.name}</strong>. Your message has been sent directly to {siteConfig.primaryContact} at Krishiv Wellness LLP. We will respond to you shortly!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                }}
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: '50px',
                  backgroundColor: '#183C2D',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.85rem',
                fontWeight: 700,
                color: '#183C2D',
                marginBottom: '0.35rem'
              }}>
                Send Us a Message
              </h3>
              <p style={{ color: '#5A6E63', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
                Fill in your details below and our team will get back to you within 24 hours.
              </p>

              {/* Name & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.15rem', marginBottom: '1.15rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.35rem' }}>
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
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(24, 60, 45, 0.15)',
                      backgroundColor: '#FAF8F5',
                      fontSize: '0.90625rem',
                      color: '#183C2D',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.35rem' }}>
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
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(24, 60, 45, 0.15)',
                      backgroundColor: '#FAF8F5',
                      fontSize: '0.90625rem',
                      color: '#183C2D',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.15rem', marginBottom: '1.15rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.35rem' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(24, 60, 45, 0.15)',
                      backgroundColor: '#FAF8F5',
                      fontSize: '0.90625rem',
                      color: '#183C2D',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.35rem' }}>
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
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(24, 60, 45, 0.15)',
                      backgroundColor: '#FAF8F5',
                      fontSize: '0.90625rem',
                      color: '#183C2D',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', marginBottom: '0.35rem' }}>
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we assist you with Bliss Together wellness gummies?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(24, 60, 45, 0.15)',
                    backgroundColor: '#FAF8F5',
                    fontSize: '0.90625rem',
                    color: '#183C2D',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '0.95rem 1.5rem',
                  borderRadius: '12px',
                  backgroundColor: '#183C2D',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 6px 18px rgba(24, 60, 45, 0.18)',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <Send size={16} />
                <span>{loading ? 'Sending Enquiry...' : 'SEND ENQUIRY'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
