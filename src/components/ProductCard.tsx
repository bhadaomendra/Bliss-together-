import React from 'react';
import { Eye, ExternalLink, ShieldCheck } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <div className="product-card">
      <div className="product-badge">{product.badge}</div>

      <div className="product-img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="product-category">{product.category}</div>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-desc">{product.description}</p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.8125rem',
        color: 'var(--color-primary)',
        fontWeight: 600,
        marginBottom: '1.25rem',
        padding: '0.4rem 0.75rem',
        backgroundColor: 'var(--color-sage-light)',
        borderRadius: '6px'
      }}>
        <ShieldCheck size={14} style={{ color: 'var(--color-accent)' }} />
        <span>{product.servings} • {product.flavour}</span>
      </div>

      <div className="product-actions">
        <button
          onClick={() => onQuickView(product)}
          className="btn btn-secondary"
          aria-label={`View details for ${product.name}`}
        >
          <Eye size={15} />
          <span>View Product</span>
        </button>

        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-amazon"
          aria-label={`Buy ${product.name} on Amazon`}
        >
          <span>BUY ON AMAZON</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};
