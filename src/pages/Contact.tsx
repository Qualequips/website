import { Mail, Phone, MapPin } from 'lucide-react';
// Form components deprecated in favor of Zoho iFrame
import SEO from '../components/ui/SEO';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page animate-fade-in">
      <SEO 
        title="Contact Us"
        description="Get in touch with QualEquips to request quotes and inquire about our critical care and hospital furniture products."
        keywords="contact QualEquips, medical equipment quote, hospital beds Kerala contact"
      />
      <div className="page-header bg-primary text-center">
        <div className="container">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-white" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
            We are here to help you equip your healthcare facility with the best. Reach out to us for product inquiries, quotes, or support.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="text-muted mb-8">
              Fill out the form and our sales team will get back to you within 24 hours. Connect with us to discover how we can elevate your medical practice.
            </p>

            <ul className="contact-methods">
              <li>
                <div className="icon-wrapper">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <strong>Our Office</strong>
                  <span>Kochi, Kerala, India</span>
                </div>
              </li>
              <li>
                <div className="icon-wrapper">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <strong>Phone (Domestic)</strong>
                  <span style={{ display: 'block' }}><a href="tel:+919605482625" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9605482625</a></span>
                  <span style={{ display: 'block' }}><a href="tel:+917012426069" style={{ color: 'inherit', textDecoration: 'none' }}>+91 70124 26069</a></span>
                </div>
              </li>
              <li>
                <div className="icon-wrapper">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <strong>Phone (International)</strong>
                  <span><a href="tel:+918589891648" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8589891648</a></span>
                </div>
              </li>
              <li>
                <div className="icon-wrapper">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <strong>Email (Sales & Support)</strong>
                  <span><a href="mailto:sales@qualequips.com" style={{ color: 'inherit', textDecoration: 'none' }}>sales@qualequips.com</a></span>
                </div>
              </li>
              <li>
                <div className="icon-wrapper">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <strong>Email (Service & Support)</strong>
                  <span><a href="mailto:service@qualequips.com" style={{ color: 'inherit', textDecoration: 'none' }}>service@qualequips.com</a></span>
                </div>
              </li>
              <li>
                <div className="icon-wrapper">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <strong>Email (International Business)</strong>
                  <span><a href="mailto:international@qualequips.com" style={{ color: 'inherit', textDecoration: 'none' }}>international@qualequips.com</a></span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper" style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--radius-lg)', backgroundColor: 'transparent' }}>
            <iframe 
              aria-label="Contact Us" 
              frameBorder="0" 
              style={{ height: '650px', width: '100%', border: 'none' }} 
              src="https://forms.zohopublic.in/founderquale1/form/ContactUs/formperma/hJL_fd-CeAMcPNbbhwff2BcjXzlAQgfAZoDd8_1u6A4">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
