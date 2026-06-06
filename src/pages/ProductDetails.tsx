import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
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

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.images && product.images.length > 0 ? `https://www.qualequips.com${product.images[0]}` : "https://www.qualequips.com/images/logo.png",
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "QualEquips"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.qualequips.com/products/${product.id}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "QualEquips"
      },
      "areaServed": [
        { "@type": "State", "name": "Kerala" },
        { "@type": "City", "name": "Alappuzha" },
        { "@type": "City", "name": "Ernakulam" },
        { "@type": "City", "name": "Idukki" },
        { "@type": "City", "name": "Kottayam" },
        { "@type": "City", "name": "Palakkad" }
      ]
    }
  };
  const schemaMarkup = JSON.stringify(schemaData);

  return (
    <div className="product-details-page animate-fade-in">
      <SEO 
        title={product.title}
        description={`${product.description} Available for fast delivery in Alappuzha, Ernakulam, Idukki, Kottayam, and Palakkad.`}
        keywords={`${product.brand}, ${product.category}, ${product.title}, medical equipment Alappuzha, hospital equipment Ernakulam, medical devices Idukki, buy ${product.title} Kottayam, ${product.brand} supplier Palakkad`}
        type="product"
        schemaMarkup={schemaMarkup}
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
                  <ShieldCheck size={14} /> Authorized {product.brand} Distributor
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
            <div className="main-image-wrapper">
              {product.images && product.images.length > 0 ? (
                <img src={product.images[0]} alt={product.title} className="main-image" />
              ) : (
                <div className="image-placeholder">No Image Available</div>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="image-gallery-thumbnails mt-4">
                {product.images.map((img, idx) => (
                  <div key={idx} className="thumbnail-wrapper">
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

            <div className="product-actions mt-8" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Button asLink to="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
                Request a Quote
              </Button>
              <a 
                href="tel:+919605482625" 
                className="btn btn-outline btn-lg w-full sm:w-auto" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', height: '48px', textDecoration: 'none' }}
              >
                <Phone size={18} /> Call +91 9605482625
              </a>
            </div>
            
            <div className="delivery-info mt-6 text-muted" style={{ fontSize: '0.875rem', padding: '1rem', backgroundColor: 'var(--color-light-bg)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ margin: 0 }}>
                <strong>Authorized Supply & Service:</strong> Available for fast delivery, professional installation, and technical support across <strong>Alappuzha, Ernakulam, Idukki, Kottayam, and Palakkad</strong>.
              </p>
              <p style={{ margin: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
                <strong>For Sales & Inquiries:</strong> <Phone size={14} style={{ color: 'var(--color-primary)' }} /> <a href="tel:+919605482625" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>+91 9605482625</a> / <a href="tel:+917012426069" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>+91 70124 26069</a> (Domestic) | <Phone size={14} style={{ color: 'var(--color-primary)' }} /> <a href="tel:+918589891648" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>+91 8589891648</a> (International) | sales@qualequips.com | service@qualequips.com
              </p>
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
