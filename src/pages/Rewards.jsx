import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';

const Rewards = ({ points }) => {
  return (
    <div className="animate-fade-in">
      <section className="hero-section" style={{padding: '40px 5%'}}>
        <div className="hero-content">
          <h2 className="hero-title" style={{fontSize: '36px'}}>المكافآت والمنتجات</h2>
          <p className="hero-subtitle">
            استبدل نقاطك بقطع فنية أو قم بشرائها مباشرة لتكسب المزيد من النقاط!
          </p>
        </div>
      </section>

      <main className="products-section">
        <div className="products-grid">
          {MOCK_PRODUCTS.map((product, index) => (
            <Link to={`/product/${product.id}`} key={product.id} style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="product-card" style={{animationDelay: `${0.1 * index}s`, height: '100%'}}>
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.title} className="product-image" onError={(e) => { e.target.style.display='none' }} />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-points">
                    <span className="star-icon" style={{fontSize: '18px'}}>⭐</span>
                    <span className="text-gold">{product.points.toLocaleString()} نقطة</span>
                    <span style={{fontSize: '14px', color: 'var(--olive-medium)', marginRight: 'auto'}}>{product.price} ج.م</span>
                  </div>
                  <p className="product-desc">{product.desc}</p>
                  
                  <div className="progress-container">
                    <div className="progress-text">
                      <span>التقدم نحو المكافأة</span>
                      <span>{product.progress}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${product.progress}%` }}></div>
                    </div>
                  </div>
                  
                  <button className="btn-outline" style={{width: '100%', marginTop: '10px'}}>
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Rewards;
