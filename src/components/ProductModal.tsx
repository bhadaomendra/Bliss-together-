import React from 'react';
import { X, CheckCircle2, Leaf, Clock, Sparkles, MessageSquare } from 'lucide-react';
import { Product } from '../data/products';
import { siteConfig } from '../data/site';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

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
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
            />
            <p className="product-detail-flavour">
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
