import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="brand-logo">
          <img src="/images/logo_white.svg" alt="QualEquips Logo" className="logo-image" />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button asLink to="/contact" variant="accent" size="sm">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`mobile-nav-link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Button asLink to="/contact" variant="accent" size="md" className="mobile-cta">
              Get a Quote
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
