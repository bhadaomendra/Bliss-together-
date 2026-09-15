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
    { id: 'brain', label: 'Brain & Focus', icon: <Brain size={15} /> },
    { id: 'eye', label: 'Eye Health', icon: <Eye size={15} /> },
    { id: 'immunity', label: 'Immunity Booster', icon: <ShieldCheck size={15} /> },
    { id: 'beauty', label: 'Hair • Skin • Nails', icon: <Sparkles size={15} /> },
    { id: 'daily', label: 'Daily Nutrition', icon: <Sun size={15} /> },
    { id: 'sleep', label: 'Sleep Support', icon: <Moon size={15} /> }
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
        @media (max-width: 1080px) {
          .desktop-only-quote { display: none !important; }
        }
      `}</style>

      {/* HERO SECTION (EXACT REFERENCE MATCH WITHOUT CORNER LEAVES) */}
      <section style={{
        position: 'relative',
        padding: '3.5rem 1rem 3rem',
        backgroundColor: '#F7F5EE',
        borderBottom: '1px solid rgba(24, 60, 45, 0.06)',
        overflow: 'hidden'
      }}>
        
        {/* Right Pale Green Organic Background Blob Shape */}
        <div style={{
          position: 'absolute',
          right: '-20px',
          top: '10%',
          width: '320px',
          height: '420px',
          background: '#E2EEE5',
          borderRadius: '55% 0 0 65% / 50% 0 0 60%',
          opacity: 0.65,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Left Handwritten Quote */}
        <div className="desktop-only-quote" style={{
          position: 'absolute',
          left: '3rem',
          top: '38%',
          transform: 'translateY(-50%) rotate(-4deg)',
          fontFamily: '"Dancing Script", "Alex Brush", cursive',
          fontSize: 'clamp(1.3rem, 1.8vw, 1.7rem)',
          fontWeight: 700,
          color: '#183C2D',
          lineHeight: 1.25,
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 2
        }}>
          Smaller<br />
          Steps<br />
          Healthier<br />
          Tomorrows<br />
          <span style={{ fontSize: '1.25rem', color: '#B28B45', display: 'inline-block', marginTop: '4px' }}>♡</span>
        </div>

        {/* Right Handwritten Quote */}
        <div className="desktop-only-quote" style={{
          position: 'absolute',
          right: '3rem',
          top: '38%',
          transform: 'translateY(-50%) rotate(4deg)',
          fontFamily: '"Dancing Script", "Alex Brush", cursive',
          fontSize: 'clamp(1.35rem, 1.9vw, 1.75rem)',
          fontWeight: 700,
          color: '#183C2D',
          lineHeight: 1.25,
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 2
        }}>
          Good<br />
          Nutrition<br />
          Brighter<br />
          Days<br />
          <span style={{ fontSize: '1.25rem', color: '#B28B45', display: 'inline-block', marginTop: '4px' }}>♡</span>
        </div>

        <div className="container" style={{ maxWidth: '880px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          
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
            fontSize: 'clamp(2.3rem, 3.8vw, 3.5rem)',
            fontWeight: 700,
            color: '#183C2D',
            lineHeight: 1.15,
            marginBottom: '1rem',
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
            maxWidth: '640px',
            margin: '0 auto 2.25rem'
          }}>
            Discover our collection of science-backed gummy nutrition, formulated with premium ingredients for every member of the family.
          </p>

          {/* 4 Feature Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.75rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}>

            {/* Feature 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: '#E3F0E6',
                color: '#183C2D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                boxShadow: '0 4px 12px rgba(24, 60, 45, 0.05)'
              }}>
                <Leaf size={22} />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', lineHeight: 1.3 }}>
                Science-Backed<br />Formulations
              </span>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: '#FEF5E7',
                color: '#B28B45',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                boxShadow: '0 4px 12px rgba(178, 139, 69, 0.05)'
              }}>
                <Heart size={22} />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', lineHeight: 1.3 }}>
                Premium<br />Ingredients
              </span>
            </div>

            {/* Feature 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: '#E2F4F2',
                color: '#00A896',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                boxShadow: '0 4px 12px rgba(0, 168, 150, 0.05)'
              }}>
                <Users size={22} />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', lineHeight: 1.3 }}>
                For the<br />Whole Family
              </span>
            </div>

            {/* Feature 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '130px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: '#FDEAEA',
                color: '#E05D5D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.6rem',
                boxShadow: '0 4px 12px rgba(224, 93, 93, 0.05)'
              }}>
                <Smile size={22} />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#183C2D', lineHeight: 1.3 }}>
                Tasty. Easy.<br />Daily Wellness.
              </span>
            </div>
          </div>

          {/* FILTER & SEARCH CARD (EXACT MATCH) */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '1.75rem 2rem',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(24, 60, 45, 0.08)',
            textAlign: 'left'
          }}>
            
            {/* Filter Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap',
              marginBottom: '1.25rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                color: '#183C2D',
                marginRight: '0.2rem'
              }}>
                <Filter size={20} />
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
                      gap: '0.45rem',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '50px',
                      fontSize: '0.84375rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      backgroundColor: isActive ? '#183C2D' : '#F6F4EE',
                      color: isActive ? '#FFFFFF' : '#2C4235',
                      border: isActive ? '1px solid #183C2D' : '1px solid rgba(24, 60, 45, 0.08)',
                      boxShadow: isActive ? '0 4px 12px rgba(24, 60, 45, 0.2)' : 'none'
                    }}
                  >
                    {cat.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{cat.icon}</span>}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Row & Handwritten Tag */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              
              {/* Search Bar */}
              <div style={{
                position: 'relative',
                flex: '1',
                minWidth: '280px',
                maxWidth: '560px'
              }}>
                <Search size={18} style={{
                  position: 'absolute',
                  left: '1.25rem',
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
                    padding: '0.75rem 3.5rem 0.75rem 3rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(24, 60, 45, 0.12)',
                    backgroundColor: '#F7F5F0',
                    fontSize: '0.9rem',
                    color: '#183C2D',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />

                <button style={{
                  position: 'absolute',
                  right: '6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#183C2D',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Handwritten Tag on Bottom Right */}
              <div style={{
                fontFamily: '"Dancing Script", "Alex Brush", cursive',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#4B6B52',
                lineHeight: 1.25,
                transform: 'rotate(-4deg)',
                textAlign: 'right'
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
        <div className="container">
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
