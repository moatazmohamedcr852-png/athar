import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section" style={{animationDelay: '0.1s'}}>
        <div className="hero-content">
          <h2 className="hero-title">من <span className="text-gold">ورق مهمل</span> إلى تحف فنية</h2>
          <p className="hero-subtitle">
            في "أثر"، نعيد الحياة للورق المستهلك لنصنع منه قطع ديكور متفردة ومستدامة. 
            اكتشف جمال الاستدامة وكن جزءاً من التغيير.
          </p>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px'}}>
            <Link to="/rewards">
              <button className="btn-primary">تصفح المنتجات والمكافآت</button>
            </Link>
            <Link to="/collect-points">
              <button className="btn-outline">كيف أجمع النقاط؟</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="products-section animate-fade-in" style={{paddingTop: '40px'}}>
        <div className="section-header">
          <h3 className="section-title">رحلة إعادة التدوير</h3>
        </div>
        
        <div className="process-grid">
          <div className="process-step">
            <span className="process-icon">📄</span>
            <h4 style={{fontSize: '20px', marginBottom: '10px'}}>1. جمع الورق</h4>
            <p style={{color: 'var(--olive-medium)', fontSize: '15px'}}>نجمع الأوراق التالفة والمستهلكة لإنقاذها من الهدر وحماية البيئة.</p>
          </div>
          <div className="process-step">
            <span className="process-icon">💦</span>
            <h4 style={{fontSize: '20px', marginBottom: '10px'}}>2. التحويل لعجينة</h4>
            <p style={{color: 'var(--olive-medium)', fontSize: '15px'}}>يتم نقع الورق وخلطه بمواد طبيعية ليتحول إلى عجينة قابلة للتشكيل.</p>
          </div>
          <div className="process-step">
            <span className="process-icon">🖐️</span>
            <h4 style={{fontSize: '20px', marginBottom: '10px'}}>3. التشكيل اليدوي</h4>
            <p style={{color: 'var(--olive-medium)', fontSize: '15px'}}>نقوم بتشكيل العجينة يدوياً بحرفية عالية لصنع تصاميم فريدة ومميزة.</p>
          </div>
          <div className="process-step">
            <span className="process-icon">🎨</span>
            <h4 style={{fontSize: '20px', marginBottom: '10px'}}>4. التحفة النهائية</h4>
            <p style={{color: 'var(--olive-medium)', fontSize: '15px'}}>بعد الجفاف، تظهر القطعة الفنية النهائية كتحفة مستدامة تزين مساحتك.</p>
          </div>
        </div>
      </section>

      <section style={{textAlign: 'center', padding: '60px 5% 100px', background: 'rgba(78, 79, 43, 0.05)'}}>
        <h3 className="section-title" style={{marginBottom: '30px'}}>لماذا أثر؟</h3>
        <p className="product-desc" style={{maxWidth: '700px', margin: '0 auto', fontSize: '18px', lineHeight: '1.8'}}>
          كل قطعة في "أثر" تحمل قصة استدامة. نحن لا نصنع الديكورات فحسب، بل نصنع وعياً بيئياً. 
          استخدامك لمنتجاتنا يعني مساهمتك المباشرة في تقليل النفايات الورقية.
          وبالإضافة لذلك، نكافئك على ولائك ومشاركتك عبر نظام نقاط مبتكر.
        </p>
      </section>
    </div>
  );
};

export default Home;
