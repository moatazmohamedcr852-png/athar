import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <section className="hero-section" style={{animationDelay: '0.1s'}}>
        <div className="hero-content">
          <h2 className="hero-title">أهلاً بك في <span className="text-gold">أثر</span></h2>
          <p className="hero-subtitle">
            وجهتك الأولى لديكورات مميزة ومستلزمات فنية مستدامة. 
            اكتشف جمال التفاصيل المصنوعة بحب.
          </p>
          <div style={{display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px'}}>
            <Link to="/rewards">
              <button className="btn-primary">تصفح المكافآت والمنتجات</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="products-section" style={{textAlign: 'center', padding: '100px 5%'}}>
        <h3 className="section-title" style={{marginBottom: '20px'}}>لماذا أثر؟</h3>
        <p className="product-desc" style={{maxWidth: '600px', margin: '0 auto'}}>
          في أثر، نؤمن بأن كل قطعة ديكور تحمل قصة. نستخدم مواد مستدامة كعجينة الورق لابتكار تحف فنية صديقة للبيئة تضفي لمسة من الدفء والجمال على مساحتك. بالإضافة إلى ذلك، نكافئك على ولائك ومشاركتك عبر نظام نقاط مبتكر.
        </p>
      </section>
    </div>
  );
};

export default Home;
