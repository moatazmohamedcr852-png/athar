import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';

const ProductDetails = ({ points, handleCashPurchase, handlePointsPurchase }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <div style={{padding: '100px', textAlign: 'center'}}>المنتج غير موجود</div>;
  }

  const canBuyWithPoints = points >= product.points;

  const onCashPurchase = () => {
    handleCashPurchase();
    alert('تمت عملية الشراء بنجاح! كسبت 500 نقطة إضافية وتم تفعيل التقييم.');
    navigate('/rewards');
  };

  const onPointsPurchase = () => {
    if (!canBuyWithPoints) return;
    handlePointsPurchase(product.points);
    alert('تم استبدال النقاط بنجاح! شكراً لك.');
    navigate('/rewards');
  };

  return (
    <div className="animate-fade-in" style={{padding: '60px 5%', maxWidth: '1100px', margin: '0 auto'}}>
      <button className="btn-outline" onClick={() => navigate(-1)} style={{marginBottom: '40px', padding: '8px 20px'}}>
        &rarr; العودة للمنتجات
      </button>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '50px', background: 'var(--white)', padding: '40px', borderRadius: '30px 25px 35px 25px', boxShadow: '0 15px 40px rgba(0,0,0,0.04)', border: '1px solid rgba(67, 68, 32, 0.05)'}}>
        
        <div style={{flex: '1 1 450px'}}>
          <div className="product-image-wrapper" style={{margin: 0, borderRadius: '20px 25px 22px 18px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
            <img src={product.image} alt={product.title} style={{width: '100%', height: 'auto', display: 'block'}} onError={(e) => { e.target.style.display='none' }} />
          </div>
        </div>

        <div style={{flex: '1 1 350px', display: 'flex', flexDirection: 'column'}}>
          
          <div className="sustainability-tag animate-fade-in" style={{animationDelay: '0.2s', width: 'fit-content'}}>
            <span>♻️</span> مصنوع 100% من ورق معاد تدويره
          </div>
          
          <h2 className="section-title" style={{marginBottom: '15px', textAlign: 'right'}}>{product.title}</h2>
          
          <p className="product-desc" style={{fontSize: '18px', marginBottom: '35px', lineHeight: '1.8'}}>{product.desc}</p>
          
          <div style={{background: 'var(--gray-light)', padding: '25px', borderRadius: '20px', marginBottom: '40px', border: '1px dashed rgba(67, 68, 32, 0.1)'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center'}}>
              <span style={{fontWeight: '700', color: 'var(--olive-dark)', fontSize: '18px'}}>السعر النقدي:</span>
              <span style={{fontSize: '28px', fontWeight: '800'}}>{product.price} ج.م</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontWeight: '700', color: 'var(--olive-dark)', fontSize: '18px'}}>سعر الاستبدال:</span>
              <div className="points-badge" style={{background: 'transparent', boxShadow: 'none', padding: 0, border: 'none'}}>
                <span className="star-icon">⭐</span>
                <span className="text-gold" style={{fontSize: '24px'}}>{product.points.toLocaleString()} نقطة</span>
              </div>
            </div>
          </div>

          <div style={{marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <button className="btn-primary" style={{width: '100%', padding: '16px', fontSize: '18px'}} onClick={onCashPurchase}>
              💳 شراء نقداً (+500 نقطة مكافأة)
            </button>
            
            <button 
              className={`btn-outline ${!canBuyWithPoints ? 'disabled' : ''}`} 
              style={{
                width: '100%', 
                padding: '16px', 
                fontSize: '18px',
                borderColor: canBuyWithPoints ? 'var(--olive-dark)' : '#C0C0C0', 
                color: canBuyWithPoints ? 'var(--olive-dark)' : '#A0A0A0', 
                cursor: canBuyWithPoints ? 'pointer' : 'not-allowed',
                background: canBuyWithPoints ? 'transparent' : 'rgba(0,0,0,0.02)'
              }} 
              disabled={!canBuyWithPoints}
              onClick={onPointsPurchase}
            >
              ⭐ استبدال بالنقاط {canBuyWithPoints ? '' : '(نقاط غير كافية)'}
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
