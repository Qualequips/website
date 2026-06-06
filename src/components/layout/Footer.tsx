import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/images/logo_white.svg" alt="QualEquips" className="footer-logo-image" />
            </Link>
            <p className="footer-desc">
              Your trusted medical device distribution company based in Kochi, Kerala. Authorized distributor of Ababil Healthcare products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-links">
            <h4 className="footer-heading">Categories</h4>
            <ul>
              <li><Link to="/products#critical-care">Critical Care</Link></li>
              <li><Link to="/products#hospital-furniture">Hospital Furniture</Link></li>
              <li><Link to="/products#ot-equipment">OT Equipment</Link></li>
              <li><Link to="/products#consumables">Consumables</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="text-secondary" />
                <span>Kochi, Kerala, India</span>
              </li>
              <li>
                <Phone size={18} className="text-secondary" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Phone (Domestic)</span>
                  <span style={{ display: 'block' }}><a href="tel:+919605482625" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9605482625</a></span>
                  <span style={{ display: 'block' }}><a href="tel:+917012426069" style={{ color: 'inherit', textDecoration: 'none' }}>+91 70124 26069</a></span>
                </div>
              </li>
              <li>
                <Phone size={18} className="text-secondary" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Phone (International)</span>
                  <span><a href="tel:+918589891648" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8589891648</a></span>
                </div>
              </li>
              <li>
                <Mail size={18} className="text-secondary" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Email (General)</span>
                  <span><a href="mailto:info@qualequips.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@qualequips.com</a></span>
                </div>
              </li>
              <li>
                <Mail size={18} className="text-secondary" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Email (Service)</span>
                  <span><a href="mailto:service@qualequips.com" style={{ color: 'inherit', textDecoration: 'none' }}>service@qualequips.com</a></span>
                </div>
              </li>
              <li>
                <Mail size={18} className="text-secondary" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7 }}>Email (International)</span>
                  <span><a href="mailto:international@qualequips.com" style={{ color: 'inherit', textDecoration: 'none' }}>international@qualequips.com</a></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} QualEquips. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
