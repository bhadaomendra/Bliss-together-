import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
import { productsData, Product } from '../data/products';
import {
  Search,
  Filter,
  Sparkles,
  Leaf,
  Heart,
  Users,
  Smile,
  Eye,
  ShieldCheck,
  Sun,
  Moon,
  ArrowRight,
  Brain
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onQuickView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Products', icon: null },
    { id: 'brain', label: 'Brain & Focus', icon: <Brain size={14} /> },
    { id: 'eye', label: 'Eye Health', icon: <Eye size={14} /> },
    { id: 'immunity', label: 'Immunity Booster', icon: <ShieldCheck size={14} /> },
    { id: 'beauty', label: 'Hair • Skin • Nails', icon: <Sparkles size={14} /> },
    { id: 'daily', label: 'Daily Nutrition', icon: <Sun size={14} /> },
    { id: 'sleep', label: 'Sleep Support', icon: <Moon size={14} /> }
  ];

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.categorySlug === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ paddingTop: 'var(--header-height)', backgroundColor: '#F8F6F0', minHeight: '100vh', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 1200px) {
          .desktop-only-quote { display: none !important; }
        }
        .filter-pills-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        @media (min-width: 1100px) {
          .filter-pills-row {
            flex-wrap: nowrap !important;
          }
        }
      `}</style>

      {/* HERO SECTION (WIDE LAYOUT WITH SHALLOW FILTER BOX) */}
      <section style={{
        position: 'relative',
        padding: '3rem 1.5rem 2.75rem',
        backgroundColor: '#F7F5EE',
        borderBottom: '1px solid rgba(24, 60, 45, 0.06)',
        overflow: 'hidden'
      }}>
        
        {/* Right Pale Green Organic Background Blob Shape */}
        <div style={{
          position: 'absolute',
          right: '-10px',
          top: '5%',
          width: '360px',
          height: '460px',
          background: '#E2EEE5',
          borderRadius: '50% 0 0 50% / 50% 0 0 50%',
          opacity: 0.65,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Left Handwritten Quote (Filling Left Gap) */}
        <div className="desktop-only-quote" style={{
          position: 'absolute',
          left: '4%',
          top: '38%',
          transform: 'translateY(-50%) rotate(-4deg)',
          fontFamily: '"Dancing Script", "Alex Brush", cursive',
          fontSize: 'clamp(1.45rem, 2.1vw, 1.95rem)',
          fontWeight: 700,
          color: '#183C2D',
          lineHeight: 1.35,
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 2,
          letterSpacing: '0.02em'
        }}>
          Smaller<br />
          Steps<br />
          Healthier<br />
          Tomorrows<br />
          <span style={{ fontSize: '1.35rem', color: '#B28B45', display: 'inline-block', marginTop: '6px' }}>♡</span>
        </div>

        {/* Right Handwritten Quote (Filling Right Gap) */}
        <div className="desktop-only-quote" style={{
          position: 'absolute',
          right: '4%',
          top: '38%',
          transform: 'translateY(-50%) rotate(4deg)',
          fontFamily: '"Dancing Script", "Alex Brush", cursive',
          fontSize: 'clamp(1.5rem, 2.2vw, 2.05rem)',
          fontWeight: 700,
          color: '#183C2D',
          lineHeight: 1.35,
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 2,
          letterSpacing: '0.02em'
        }}>
          Good<br />
          Nutrition<br />
          Brighter<br />
          Days<br />
          <span style={{ fontSize: '1.35rem', color: '#B28B45', display: 'inline-block', marginTop: '6px' }}>♡</span>
        </div>

        <div className="container" style={{ maxWidth: '1160px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          
          {/* Eyebrow Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.85rem',
            fontSize: '0.78125rem',
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: '#B28B45',
            textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}>
            <span style={{ color: '#B28B45', opacity: 0.6 }}>────────</span>
            <span>OUR WELLNESS RANGE</span>
            <span style={{ color: '#B28B45', opacity: 0.6 }}>────────</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
            fontWeight: 700,
            color: '#183C2D',
            lineHeight: 1.12,
            marginBottom: '0.85rem',
            letterSpacing: '-0.01em'
          }}>
            Purposeful Nutrition.<br />
            Deliciously Simple.&nbsp;
            <span style={{ display: 'inline-flex', verticalAlign: 'middle', transform: 'translateY(-4px)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M21 3C21 3 13 4 8 9C3 14 3 21 3 21C3 21 10 21 15 16C20 11 21 3 21 3Z" fill="#3E6B48" />
                <path d="M3 21C6 16 11 12 17 8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p style={{
            color: '#4A5D52',
            fontSize: '1.025rem',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 2rem'
          }}>
            Discover our collection of science-backed gummy nutrition, formulated with premium ingredients for every member of the family.
          </p>

          {/* 4 Feature Badges (Spread Across Layout) */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3.25rem',
            flexWrap: 'wrap',
            marginBottom: '2.25rem'
          }}>
            {/* Feature 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '135px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#E3F0E6',
                color: '#183C2D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem',
                boxShadow: '0 4px 12px rgba(24, 60, 45, 0.05)'
              }}>
                <Leaf size={20} />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', lineHeight: 1.3 }}>
                Science-Backed<br />Formulations
              </span>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '135px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#FEF5E7',
                color: '#B28B45',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem',
                boxShadow: '0 4px 12px rgba(178, 139, 69, 0.05)'
              }}>
                <Heart size={20} />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', lineHeight: 1.3 }}>
                Premium<br />Ingredients
              </span>
            </div>

            {/* Feature 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '135px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#E2F4F2',
                color: '#00A896',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem',
                boxShadow: '0 4px 12px rgba(0, 168, 150, 0.05)'
              }}>
                <Users size={20} />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', lineHeight: 1.3 }}>
                For the<br />Whole Family
              </span>
            </div>

            {/* Feature 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '135px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#FDEAEA',
                color: '#E05D5D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem',
                boxShadow: '0 4px 12px rgba(224, 93, 93, 0.05)'
              }}>
                <Smile size={20} />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', lineHeight: 1.3 }}>
                Tasty. Easy.<br />Daily Wellness.
              </span>
            </div>
          </div>

          {/* FILTER & SEARCH CARD (WIDE & SHALLOW DEPTH) */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '22px',
            padding: '1.15rem 1.5rem 1.15rem',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(24, 60, 45, 0.08)',
            textAlign: 'left',
            maxWidth: '1120px',
            margin: '0 auto'
          }}>
            
            {/* Filter Row (1 Single Line on Desktop) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              marginBottom: '1rem',
              width: '100%'
            }}>
              <div className="filter-pills-row" style={{ width: '100%', justifyContent: 'space-between' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  color: '#183C2D',
                  flexShrink: 0
                }}>
                  <Filter size={18} />
                </div>

                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.45rem 0.95rem',
                        borderRadius: '50px',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        backgroundColor: isActive ? '#183C2D' : '#F6F4EE',
                        color: isActive ? '#FFFFFF' : '#2C4235',
                        border: isActive ? '1px solid #183C2D' : '1px solid rgba(24, 60, 45, 0.08)',
                        boxShadow: isActive ? '0 4px 10px rgba(24, 60, 45, 0.18)' : 'none',
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}
                    >
                      {cat.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{cat.icon}</span>}
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Row & Handwritten Tag */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap',
              paddingTop: '0.25rem',
              borderTop: '1px solid rgba(24, 60, 45, 0.05)'
            }}>
              
              {/* Search Bar */}
              <div style={{
                position: 'relative',
                flex: '1',
                minWidth: '280px',
                maxWidth: '650px',
                marginTop: '0.25rem'
              }}>
                <Search size={17} style={{
                  position: 'absolute',
                  left: '1.15rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#7A8C81'
                }} />
                
                <input
                  type="text"
                  placeholder="Search gummies or ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 3.25rem 0.65rem 2.85rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(24, 60, 45, 0.12)',
                    backgroundColor: '#F7F5F0',
                    fontSize: '0.875rem',
                    color: '#183C2D',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />

                <button style={{
                  position: 'absolute',
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#183C2D',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Handwritten Tag on Bottom Right */}
              <div style={{
                fontFamily: '"Dancing Script", "Alex Brush", cursive',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#4B6B52',
                lineHeight: 1.2,
                transform: 'rotate(-3deg)',
                textAlign: 'right',
                marginTop: '0.25rem'
              }}>
                Wellness for<br />
                Every Generation <span style={{ color: '#B28B45' }}>♡</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#F8F6F0' }}>
        <div className="container" style={{ maxWidth: '1180px' }}>
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#FFFFFF', borderRadius: '24px', border: '1px solid rgba(24,60,45,0.08)' }}>
              <Sparkles size={48} style={{ color: '#B28B45', margin: '0 auto 1rem' }} />
              <h3 className="heading-md" style={{ color: '#183C2D' }}>No Gummies Found</h3>
              <p style={{ color: '#5A6E63', marginTop: '0.5rem' }}>
                Try adjusting your category filter or search query.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection onNavigate={onNavigate} />
    </main>
  );
};
