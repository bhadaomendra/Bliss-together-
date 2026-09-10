import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
import { productsData, Product } from '../data/products';
import { Search, Filter, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onQuickView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'brain', label: 'Brain & Focus' },
    { id: 'eye', label: 'Eye Health' },
    { id: 'immunity', label: 'Immunity Booster' },
    { id: 'beauty', label: 'Hair • Skin • Nails' },
    { id: 'daily', label: 'Daily Nutrition' },
    { id: 'sleep', label: 'Sleep Support' }
  ];

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.categorySlug === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      {/* Header Banner */}
      <section className="section-padding bg-sage-light" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="subheading-tag">OUR WELLNESS RANGE</div>
          <h1 className="heading-xl" style={{ marginBottom: '1.25rem' }}>
            Purposeful Nutrition. Deliciously Simple.
          </h1>
          <p className="lead-text">
            Discover our collection of science-backed gummy nutrition, formulated with premium ingredients for every member of the family.
          </p>
        </div>
      </section>

      {/* Product Catalog Controls & Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream-bg)' }}>
        <div className="container">
          {/* Controls: Search & Category Filter */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '3rem',
            backgroundColor: 'var(--color-white)',
            padding: '1.5rem 2.0rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-sage-border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {/* Filter Tabs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Filter size={18} style={{ color: 'var(--color-primary)', marginRight: '0.25rem' }} />
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.5rem 1.1rem',
                      borderRadius: '50px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      transition: 'all var(--transition-fast)',
                      backgroundColor: selectedCategory === cat.id ? 'var(--color-primary)' : 'var(--color-cream-bg)',
                      color: selectedCategory === cat.id ? 'var(--color-white)' : 'var(--color-text-dark)',
                      border: selectedCategory === cat.id ? '1px solid var(--color-primary)' : '1px solid var(--color-sage-border)'
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div style={{ position: 'relative', minWidth: '260px' }}>
                <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search gummies or ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 1rem 0.6rem 2.5rem',
                    borderRadius: '50px',
                    border: '1px solid var(--color-sage-border)',
                    backgroundColor: 'var(--color-cream-bg)',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Product Grid */}
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
            <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-md)' }}>
              <Sparkles size={48} style={{ color: 'var(--color-accent)', margin: '0 auto 1rem' }} />
              <h3 className="heading-md">No Gummies Found</h3>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
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
