import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './ProductCard.css';

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  brand?: string;
  authorizedDealer?: boolean;
  description: string;
  images?: string[];
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  brand,
  authorizedDealer,
  description,
  images,
  className,
}) => {
  return (
    <div className={`product-card shadow-sm ${className || ''}`}>
      <div className="product-card-image-wrapper">
        <Link to={`/products/${id}`}>
          {images && images.length > 0 ? (
            <img src={images[0]} alt={title} className="product-card-img" />
          ) : (
            <div className="product-card-ph">No Image Available</div>
          )}
        </Link>
        <div className="badges-container" style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end', pointerEvents: 'none' }}>
          <span className="product-badge">{category}</span>
          {authorizedDealer && brand && (
            <span className="product-badge authorized-badge" style={{ backgroundColor: '#FF8A00', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <ShieldCheck size={12} /> Authorized {brand}
            </span>
          )}
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <Link to={`/products/${id}`} className="product-link text-primary">
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
