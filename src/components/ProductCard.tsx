import React from 'react';
import { Eye, ExternalLink, ShieldCheck } from 'lucide-react';
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

        <div className="product-meta">
          <ShieldCheck size={15} />
          <span>{product.servings} • {product.flavour}</span>
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
