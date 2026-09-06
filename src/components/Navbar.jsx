import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ points, cartCount = 0 }) => {
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

          <div className="nav-actions" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <Link to="/cart" style={{textDecoration: 'none', position: 'relative', display: 'flex', alignItems: 'center'}}>
              <span style={{fontSize: '24px'}}>🛒</span>
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute', top: '-8px', right: '-8px', 
                  background: '#ff4d4f', color: 'white', 
                  borderRadius: '50%', width: '20px', height: '20px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '12px', fontWeight: 'bold'
                }}>
                  {cartCount}
                </span>
              )}
            </Link>
            
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
          <Link to="/cart" className={`mobile-nav-link ${location.pathname === '/cart' ? 'active' : ''}`} onClick={closeMenu}>السلة ({cartCount})</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
