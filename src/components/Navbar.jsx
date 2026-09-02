import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ points }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar animate-fade-in">
        <div className="nav-container">
          
          <div className="logo-section">
            <Link to="/" onClick={closeMenu}>
              <img src="/LOGO.jpeg" alt="Athar Logo" className="nav-logo" />
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="nav-links desktop-only">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>الرئيسية</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>عن أثر</Link>
            <Link to="/rewards" className={`nav-link ${location.pathname === '/rewards' ? 'active' : ''}`}>المكافآت</Link>
            <Link to="/collect-points" className={`nav-link ${location.pathname === '/collect-points' ? 'active' : ''}`}>جمع النقاط</Link>
          </div>

          <div className="nav-actions">
            <div className="points-badge">
              <span className="star-icon">⭐</span>
              <span className="text-gold">{points.toLocaleString()} نقطة</span>
            </div>
            
            {/* Mobile Hamburger Button */}
            <button className="hamburger-btn mobile-only" onClick={toggleMenu}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>الرئيسية</Link>
          <Link to="/about" className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>عن أثر</Link>
          <Link to="/rewards" className={`mobile-nav-link ${location.pathname === '/rewards' ? 'active' : ''}`} onClick={closeMenu}>المكافآت والمنتجات</Link>
          <Link to="/collect-points" className={`mobile-nav-link ${location.pathname === '/collect-points' ? 'active' : ''}`} onClick={closeMenu}>كيف أجمع النقاط؟</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
