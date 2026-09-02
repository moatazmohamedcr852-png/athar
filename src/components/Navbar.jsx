import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ points }) => {
  const location = useLocation();

  return (
    <nav className="navbar animate-fade-in">
      <div className="nav-container">
        <div className="logo-section">
          <Link to="/">
            <img src="/LOGO.jpeg" alt="Athar Logo" style={{ height: '40px', borderRadius: '5px' }} />
          </Link>
        </div>
        
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>الرئيسية</Link>
          <Link to="/rewards" className={`nav-link ${location.pathname === '/rewards' ? 'active' : ''}`}>المكافآت</Link>
          <Link to="/collect-points" className={`nav-link ${location.pathname === '/collect-points' ? 'active' : ''}`}>جمع النقاط</Link>
          <Link to="#" className="nav-link">الطلبات</Link>
        </div>

        <div className="nav-actions">
          <div className="points-badge">
            <span className="star-icon">⭐</span>
            <span className="text-gold">{points.toLocaleString()} نقطة</span>
          </div>
          <button className="icon-btn" style={{color: 'var(--olive-dark)'}}>👤</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
