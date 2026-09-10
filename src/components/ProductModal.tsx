import React from 'react';
import { X, ExternalLink, CheckCircle2, Leaf, Clock, Sparkles } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          {/* Left Product Visual */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid var(--color-sage-border)'
          }}>
            <div className="product-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>
              {product.badge}
            </div>
            <img
              src={product.image}
              alt={product.name}
              style={{ maxHeight: '280px', width: 'auto', margin: '0 auto', filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.12))' }}
            />
            <p style={{ marginTop: '1rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Flavour: <span style={{ color: 'var(--color-accent-hover)' }}>{product.flavour}</span> ({product.servings})
            </p>
          </div>

          {/* Right Product Details */}
          <div>
            <div className="product-category">{product.category}</div>
            <h2 id="modal-title" className="heading-md" style={{ marginBottom: '0.5rem' }}>
              {product.name}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '1.5rem', fontWeight: 500 }}>
              {product.subtitle}
            </p>

            <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              {product.description}
            </p>

            {/* Benefits List */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} style={{ color: 'var(--color-accent)' }} />
                <span>Key Benefits</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-text-dark)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-sage-border)' }}>
              <h4 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Leaf size={15} style={{ color: 'var(--color-primary)' }} />
                <span>Key Ingredients</span>
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {product.ingredients.map((ing, idx) => (
                  <span key={idx} style={{ fontSize: '0.78125rem', backgroundColor: 'var(--color-sage-light)', padding: '0.25rem 0.65rem', borderRadius: '4px', color: 'var(--color-primary-dark)', fontWeight: 500 }}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Usage */}
            <div style={{ marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} style={{ color: 'var(--color-accent)' }} />
              <span><strong>Suggested Usage:</strong> {product.usage}</span>
            </div>

            {/* Action */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amazon"
                style={{ flex: 1, padding: '0.9rem 1.5rem', textAlign: 'center' }}
              >
                <span>BUY ON AMAZON</span>
                <ExternalLink size={16} />
              </a>

              <button
                onClick={onClose}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.5rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
