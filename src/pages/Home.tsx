import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { productsData } from '../data/products';
import SEO from '../components/ui/SEO';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page animate-fade-in">
      <SEO 
        title="Home"
        description="QualEquips is your trusted partner for premium medical devices and hospital equipment in Kerala. We provide premium critical care furniture, patient monitors, and clinical solutions."
        keywords="medical devices Kerala, hospital equipment Kochi, Ababil healthcare, patient monitors, ICU beds, Medcaptain pumps"
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge animate-fade-in">Premium Medical Equipment</span>
            <h1 className="hero-title animate-delay-100">
              Elevating Patient Care Through Quality Equipment
            </h1>
            <p className="hero-desc">
              Your trusted partner in medical device distribution across Kerala. We provide premium critical care hospital furniture and clinical solutions.
            </p>
            <div className="hero-actions">
              <Button asLink to="/products" variant="accent" size="lg">
                Explore Products
              </Button>
              <Button asLink to="/contact" variant="outline" size="lg" className="btn-light">
                Contact Us
              </Button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">Ababil</span>
                <span className="stat-label">Authorized Partner</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">50+</span>
                <span className="stat-label">Hospitals Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <div className="container trust-container">
          <div className="trust-item">
            <ShieldCheck size={32} className="text-accent" />
            <div>
              <h4>Quality Assured</h4>
              <p>Certified, safe & reliable medical devices</p>
            </div>
          </div>
          <div className="trust-item">
            <Truck size={32} className="text-secondary" />
            <div>
              <h4>Fast Delivery</h4>
              <p>Prompt supply across Kerala</p>
            </div>
          </div>
          <div className="trust-item">
            <Users size={32} className="text-primary" />
            <div>
              <h4>Expert Support</h4>
              <p>Dedicated clinical & technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="featured-categories section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Categories</h2>
            <p>Discover our comprehensive range of high performance medical equipment designed for modern healthcare facilities.</p>
          </div>
          
          <div className="categories-grid">
            {['infivision-et1000', 'prunus-boaray-600', 'surgnova-sonicure-sc100e'].map(featureId => {
              const p = productsData.find(x => x.id === featureId);
              if (!p) return null;
              return (
                <ProductCard 
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  category={p.category}
                  brand={p.brand}
                  authorizedDealer={p.authorizedDealer}
                  description={p.description}
                  images={p.images}
                />
              );
            })}
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Button asLink to="/products" variant="outline" size="lg">
              View All Products <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about section-padding">
        <div className="container about-container">
          <div className="about-content">
            <span className="section-tag text-primary">About QualEquips</span>
            <h2>Bridging the gap between advanced medical technology and patient care.</h2>
            <p className="text-muted">
              Based in the heart of Kochi, Kerala, QualEquips is a trusted leader in medical device distribution. We are dedicated to equipping healthcare providers with the most reliable, efficient, and technologically superior medical tools available.
            </p>
            
            <ul className="about-list">
              <li>
                <CheckCircle2 size={20} className="text-success" />
                <span>Authorized partner of leading global medical brands</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="text-success" />
                <span>Offering complete end to end operation theatre installations</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="text-success" />
                <span>Extensive selection of premium hospital beds and ward furniture</span>
              </li>
            </ul>
            
            <Button asLink to="/about" variant="primary">
              Read Our Story
            </Button>
          </div>
          <div className="about-image">
             <img src="/images/facility_setup.png" alt="Medical Facility Setup" className="about-img shadow-lg" />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section bg-primary text-white">
        <div className="container cta-container">
          <h2>Ready to upgrade your medical facility?</h2>
          <p>Get in touch with our team for exclusive quotes and comprehensive product catalogs.</p>
          <div className="cta-buttons">
            <Button asLink to="/contact" variant="accent" size="lg">
              Request a Quote
            </Button>
            <Button asLink to="/products" variant="outline" size="lg" className="btn-light">
              Browse Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
