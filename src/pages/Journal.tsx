import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { BookOpen, Calendar, Clock, ArrowRight, User, Tag, Sparkles } from 'lucide-react';

interface JournalProps {
  onNavigate: (path: string) => void;
}

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const Journal: React.FC<JournalProps> = ({ onNavigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'gummy-absorption',
      title: 'The Science of Micronutrient Absorption in Gummy Formulations',
      category: 'Nutrition Science',
      date: 'September 12, 2026',
      readTime: '4 min read',
      author: 'Scientific Advisory Board',
      excerpt: 'How pectin-based gummies improve daily supplement compliance and offer effective bioavailability for essential vitamins.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
      content: [
        'Adherence is the single biggest factor in dietary supplement efficacy. Traditional large tablets and bitter capsules often result in missed doses and poor long-term routine consistency.',
        'Chewable pectin gummies break down efficiently in the mouth and stomach, allowing key micronutrients—such as Vitamin C, Vitamin D3, and B-complex—to enter digestion comfortably.',
        'At Bliss Together, we select non-gelatin pectin bases combined with bioavailable active nutrients so that your daily wellness ritual is both effective and genuinely enjoyable.'
      ]
    },
    {
      id: 'family-immunity',
      title: 'Building Everyday Immunity: A Holistic Guide for Families',
      category: 'Family Health',
      date: 'September 05, 2026',
      readTime: '5 min read',
      author: 'Krishiv Health Team',
      excerpt: 'Simple daily habits, balanced nutrition, and targeted micronutrients to keep every family member active and protected.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
      content: [
        'Immunity is not built overnight; it is the result of consistent daily nourishment, adequate sleep, and cellular defense support.',
        'Combining Vitamin C, Zinc, and botanical antioxidants provides multi-layered support against seasonal changes and daily fatigue.',
        'Ensuring that children and adults alike receive standard daily requirements without artificial additives is core to our formulation philosophy at Bliss Together.'
      ]
    },
    {
      id: 'sleep-restoration',
      title: 'The Sleep & Rest Connection: Why Nightly Recovery Matters',
      category: 'Wellness & Rest',
      date: 'August 28, 2026',
      readTime: '6 min read',
      author: 'Wellness Research Dept',
      excerpt: 'Understanding how natural sleep aids support REM cycles, mental clarity, and metabolic recovery.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800',
      content: [
        'Quality sleep is essential for physical repair, memory consolidation, and cellular detoxification.',
        'Modern screen time and stress often disrupt natural melatonin release, making it harder to fall asleep naturally.',
        'Our Sleep Support formula blends gentle natural ingredients to help calm an overactive mind and promote deep, restorative rest without morning grogginess.'
      ]
    },
    {
      id: 'beauty-from-within',
      title: 'Nourishing Hair, Skin & Nails: Beauty That Begins Inside',
      category: 'Beauty Nutrition',
      date: 'August 18, 2026',
      readTime: '4 min read',
      author: 'Nutraceutical Experts',
      excerpt: 'Why topical skincare is only half the picture, and how Biotin, Vitamin E, and antioxidants fuel natural glow.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
      content: [
        'Hair follicles, dermal collagen, and nail beds require continuous internal delivery of essential amino acids and micro-minerals.',
        'Biotin acts as a coenzyme for fatty acid metabolism, promoting strong keratin structures, while Vitamin E provides essential antioxidant defense.',
        'Daily supplementation with Bliss Together Hair, Skin & Nails gummies supports natural elasticity and vibrant health from the inside out.'
      ]
    }
  ];

  return (
    <main className="journal-page" style={{ backgroundColor: '#F8F6F0', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#0A251C',
        color: '#FFFFFF',
        padding: '3.5rem 1.5rem 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,168,150,0.15) 0%, rgba(10,37,28,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '840px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            backgroundColor: 'rgba(197, 160, 89, 0.15)',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            color: '#C5A059',
            fontSize: '0.78125rem',
            fontWeight: 800,
            letterSpacing: '0.15em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            <BookOpen size={14} />
            <span>WELLNESS JOURNAL & INSIGHTS</span>
          </div>

          <h1 style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '1rem',
            color: '#FFFFFF'
          }}>
            Nourishing Knowledge for Everyday Life
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#B8C7BF',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            Explore expert articles, formulation science, and practical wellness advice curated by the Krishiv Wellness team.
          </p>
        </div>
      </section>

      {/* Main Journal Grid */}
      <section style={{ padding: '3.5rem 1.5rem' }}>
        <div className="container">
          
          <div className="journal-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {articles.map((article) => (
              <article
                key={article.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(24, 60, 45, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, boxShadow 0.25s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedArticle(article)}
              >
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: '#0A251C',
                    color: '#C5A059',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.8rem',
                    borderRadius: '50px',
                    letterSpacing: '0.05em'
                  }}>
                    {article.category}
                  </div>
                </div>

                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.78125rem',
                    color: '#6B7C72',
                    marginBottom: '0.75rem'
                  }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} /> {article.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={13} /> {article.readTime}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#183C2D',
                    lineHeight: 1.25,
                    marginBottom: '0.75rem'
                  }}>
                    {article.title}
                  </h3>

                  <p style={{
                    fontSize: '0.925rem',
                    color: '#4A5D52',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem',
                    flex: 1
                  }}>
                    {article.excerpt}
                  </p>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.84375rem',
                    fontWeight: 700,
                    color: '#00A896',
                    marginTop: 'auto'
                  }}>
                    <span>Read Article</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          onClick={() => setSelectedArticle(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 37, 28, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.25rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                backgroundColor: '#F2F5F3',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#183C2D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            <span style={{
              display: 'inline-block',
              backgroundColor: '#E2EEE5',
              color: '#183C2D',
              fontSize: '0.78125rem',
              fontWeight: 700,
              padding: '0.3rem 0.8rem',
              borderRadius: '50px',
              marginBottom: '0.75rem'
            }}>
              {selectedArticle.category}
            </span>

            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#183C2D',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}>
              {selectedArticle.title}
            </h2>

            <div style={{
              display: 'flex',
              gap: '1rem',
              fontSize: '0.8125rem',
              color: '#6B7C72',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(24, 60, 45, 0.1)'
            }}>
              <span>By {selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {selectedArticle.content.map((paragraph, i) => (
                <p key={i} style={{ fontSize: '1rem', color: '#3A4D42', lineHeight: 1.65 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(24, 60, 45, 0.1)', textAlign: 'right' }}>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onNavigate('/products');
                }}
                style={{
                  backgroundColor: '#00A896',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.65rem 1.5rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                Explore Products →
              </button>
            </div>
          </div>
        </div>
      )}

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
