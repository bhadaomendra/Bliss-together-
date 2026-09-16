import React, { useState } from 'react';
import { Eye, Sparkles, MessageSquare, Package, FileText } from 'lucide-react';
import { Product } from '../data/products';
import { siteConfig } from '../data/site';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

  const allImages = product.images && product.images.length > 0
    ? product.images
    : (product.ingredientsImage ? [product.image, product.ingredientsImage] : [product.image]);

  const hasMultipleImages = allImages.length > 1;

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

      <div className="product-img-wrapper" style={{ position: 'relative' }}>
        <img
          src={allImages[activeImgIndex] || product.image}
          alt={`${product.name} - View ${activeImgIndex + 1}`}
          loading="lazy"
          style={{
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: activeImgIndex === 1 ? '8px' : '0',
            padding: activeImgIndex === 1 ? '0.25rem' : '0'
          }}
        />

        {hasMultipleImages && (
          <div
            className="product-img-switcher"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: 'rgba(24, 60, 45, 0.88)',
              backdropFilter: 'blur(8px)',
              padding: '3px 8px',
              borderRadius: '20px',
              zIndex: 3,
              boxShadow: '0 4px 12px rgba(0,0,0,0.18)'
            }}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImgIndex(0);
              }}
              aria-label="View product bottle image"
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: activeImgIndex === 0 ? '#183C2D' : '#FFFFFF',
                backgroundColor: activeImgIndex === 0 ? '#FFFFFF' : 'transparent',
                border: 'none',
                padding: '2px 8px',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '3px'
              }}
            >
              <Package size={11} />
              <span>Product</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImgIndex(1);
              }}
              aria-label="View ingredients table image"
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: activeImgIndex === 1 ? '#183C2D' : '#FFFFFF',
                backgroundColor: activeImgIndex === 1 ? '#FFFFFF' : 'transparent',
                border: 'none',
                padding: '2px 8px',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '3px'
              }}
            >
              <FileText size={11} />
              <span>Ingredients</span>
            </button>
          </div>
        )}
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
            href={siteConfig.getProductWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn btn-amazon"
            aria-label={`Buy ${product.name} on WhatsApp`}
            style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
          >
            <MessageSquare size={14} />
            <span>BUY NOW</span>
          </a>
        </div>
      </div>
    </article>
  );
};
