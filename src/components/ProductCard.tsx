import React from 'react';
import { Eye, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <article
      className="product-card"
      role="button"
      tabIndex={0}
      onClick={() => onQuickView(product)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onQuickView(product);
        }
      }}
      aria-label={`View details for ${product.name}`}
    >
      <div className="product-badge">{product.badge}</div>

      <div className="product-img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="product-card-body">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <div className="product-meta" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.8125rem',
          fontWeight: 700,
          color: '#00A896',
          backgroundColor: 'rgba(0,168,150,0.08)',
          border: '1px solid rgba(0,168,150,0.2)',
          padding: '0.3rem 0.75rem',
          borderRadius: '50px',
          marginTop: '0.5rem',
          marginBottom: '0.75rem'
        }}>
          <Sparkles size={14} />
          <span>Flavour: {product.flavour} · {product.servings}</span>
        </div>

        <div className="product-actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="btn btn-secondary"
            aria-label={`View details for ${product.name}`}
          >
            <Eye size={15} />
            <span>View Details</span>
          </button>

          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn btn-amazon"
            aria-label={`Buy ${product.name} on Amazon`}
          >
            <span>BUY NOW</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
};
