import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { productsData } from '../data/products';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const product = productsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="product-not-found container section-padding text-center">
        <SEO title="Product Not Found" description="The requested product does not exist." />
        <h2>Product not found</h2>
        <p className="text-muted mb-8">The medical device you are looking for does not exist or has been removed.</p>
        <Button asLink to="/products" variant="primary">
          Return to Catalog
        </Button>
      </div>
    );
  }

  return (
    <div className="product-details-page animate-fade-in">
      <SEO 
        title={product.title}
        description={product.description || `View details about the ${product.title} from ${product.brand}.`}
        keywords={`${product.brand}, ${product.category}, ${product.title}, medical equipment, QualEquips`}
        type="product"
      />
      {/* Detail Header area */}
      <div className="detail-header bg-light">
        <div className="container">
          <Link to="/products" className="back-link text-primary">
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <div className="detail-title-wrapper mt-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="product-badge">{product.category}</span>
              {product.authorizedDealer && product.brand && (
                <span className="product-badge" style={{ backgroundColor: '#FF8A00', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ShieldCheck size={14} /> Authorized {product.brand} Dealer
                </span>
              )}
            </div>
            <h1>{product.title}</h1>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="product-core-grid">
          {/* Image Gallery */}
          <div className="product-image-section">
            <div className="main-image-wrapper shadow-md">
              {product.images && product.images.length > 0 ? (
                <img src={product.images[0]} alt={product.title} className="main-image" />
              ) : (
                <div className="image-placeholder">No Image Available</div>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="image-gallery-thumbnails mt-4">
                {product.images.map((img, idx) => (
                  <div key={idx} className="thumbnail-wrapper shadow-sm">
                    <img src={img} alt={`${product.title} view ${idx + 1}`} className="thumbnail-img" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="product-info-section">
            <h2 className="section-title">Overview</h2>
            <p className="product-long-desc text-muted">
              {product.longDescription || product.description}
            </p>

            <div className="mt-8">
              <h3 className="mb-4">Key Features</h3>
              <ul className="features-list">
                {product.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-actions mt-8">
              <Button asLink to="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="specs-section mt-16">
          <h2 className="section-title text-center mb-8">Technical Specifications</h2>
          <div className="specs-table-wrapper shadow-sm">
            <table className="specs-table">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key}>
                    <td className="spec-key">{key}</td>
                    <td className="spec-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
