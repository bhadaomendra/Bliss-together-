import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Leaf, Clock, Sparkles, MessageSquare, Package, FileText } from 'lucide-react';
import { Product } from '../data/products';
import { siteConfig } from '../data/site';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setActiveImgIndex(0);
  }, [product?.id]);

  if (!product) return null;

  const allImages = product.images && product.images.length > 0
    ? product.images
    : (product.ingredientsImage ? [product.image, product.ingredientsImage] : [product.image]);

  const hasMultipleImages = allImages.length > 1;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content product-detail-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="product-detail-grid">
          <div className="product-detail-visual">
            <div className="product-badge product-detail-badge">{product.badge}</div>

            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '260px' }}>
              <img
                src={allImages[activeImgIndex] || product.image}
                alt={`${product.name} - View ${activeImgIndex + 1}`}
                className="product-detail-image"
                style={{
                  maxHeight: '340px',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: activeImgIndex === 1 ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              />
            </div>

            {hasMultipleImages && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  marginTop: '0.85rem',
                  marginBottom: '0.35rem'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveImgIndex(0)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '50px',
                    fontSize: '0.78125rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeImgIndex === 0 ? '1.5px solid #183C2D' : '1px solid rgba(24,60,45,0.15)',
                    backgroundColor: activeImgIndex === 0 ? '#183C2D' : '#FFFFFF',
                    color: activeImgIndex === 0 ? '#FFFFFF' : '#183C2D',
                    boxShadow: activeImgIndex === 0 ? '0 4px 10px rgba(24,60,45,0.15)' : 'none'
                  }}
                >
                  <Package size={14} />
                  <span>Product Bottle</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveImgIndex(1)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '50px',
                    fontSize: '0.78125rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeImgIndex === 1 ? '1.5px solid #183C2D' : '1px solid rgba(24,60,45,0.15)',
                    backgroundColor: activeImgIndex === 1 ? '#183C2D' : '#FFFFFF',
                    color: activeImgIndex === 1 ? '#FFFFFF' : '#183C2D',
                    boxShadow: activeImgIndex === 1 ? '0 4px 10px rgba(24,60,45,0.15)' : 'none'
                  }}
                >
                  <FileText size={14} />
                  <span>Ingredients Table</span>
                </button>
              </div>
            )}

            <p className="product-detail-flavour" style={{ marginTop: hasMultipleImages ? '0.25rem' : '0.75rem' }}>
              Flavour: <span>{product.flavour}</span> · {product.servings}
            </p>
          </div>

          <div className="product-detail-content">
            <div className="product-category">{product.category}</div>
            <h2 id="modal-title" className="heading-md product-detail-title">
              {product.name}
            </h2>
            <p className="product-detail-subtitle">{product.subtitle}</p>
            <p className="product-detail-description">{product.description}</p>

            <div className="product-detail-section">
              <h4>
                <Sparkles size={16} />
                Key Benefits
              </h4>
              <ul>
                {product.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-detail-ingredients">
              <h4>
                <Leaf size={15} />
                Key Ingredients
              </h4>
              <div className="ingredient-list">
                {product.ingredients.map((ing, idx) => (
                  <span key={idx}>{ing}</span>
                ))}
              </div>
            </div>

            <div className="product-detail-usage">
              <Clock size={16} />
              <span><strong>Suggested Usage:</strong> {product.usage}</span>
            </div>

            <div className="product-detail-actions">
              <a
                href={siteConfig.getProductWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amazon product-buy-button"
                style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
              >
                <MessageSquare size={16} />
                <span>BUY NOW ON WHATSAPP</span>
              </a>
              <button onClick={onClose} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
