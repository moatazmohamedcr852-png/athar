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
    <div className="animate-fade-in" style={{padding: '40px 5%', maxWidth: '1000px', margin: '0 auto'}}>
      <button className="btn-outline" onClick={() => navigate(-1)} style={{marginBottom: '30px', padding: '5px 15px'}}>
        &rarr; عودة
      </button>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px', background: 'var(--white)', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
        
        <div style={{flex: '1 1 400px'}}>
          <div className="product-image-wrapper" style={{margin: 0, borderRadius: '15px', overflow: 'hidden'}}>
            <img src={product.image} alt={product.title} style={{width: '100%', height: 'auto', display: 'block'}} onError={(e) => { e.target.style.display='none' }} />
          </div>
        </div>

        <div style={{flex: '1 1 300px', display: 'flex', flexDirection: 'column'}}>
          <h2 className="section-title" style={{marginBottom: '10px'}}>{product.title}</h2>
          <p className="product-desc" style={{fontSize: '16px', marginBottom: '30px'}}>{product.desc}</p>
          
          <div style={{background: 'var(--gray-light)', padding: '20px', borderRadius: '15px', marginBottom: '30px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', alignItems: 'center'}}>
              <span style={{fontWeight: 'bold', color: 'var(--olive-dark)'}}>السعر النقدي:</span>
              <span style={{fontSize: '24px', fontWeight: '800'}}>{product.price} ج.م</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{fontWeight: 'bold', color: 'var(--olive-dark)'}}>سعر النقاط:</span>
              <div className="points-badge" style={{background: 'transparent', boxShadow: 'none', padding: 0, border: 'none'}}>
                <span className="star-icon">⭐</span>
                <span className="text-gold" style={{fontSize: '20px'}}>{product.points.toLocaleString()} نقطة</span>
              </div>
            </div>
          </div>

          <div style={{marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <button className="btn-primary" style={{width: '100%', padding: '15px'}} onClick={onCashPurchase}>
              💳 شراء نقداً (+500 نقطة)
            </button>
            
            <button 
              className={`btn-outline ${!canBuyWithPoints ? 'disabled' : ''}`} 
              style={{width: '100%', padding: '15px', borderColor: canBuyWithPoints ? 'var(--olive-dark)' : '#A0A0A0', color: canBuyWithPoints ? 'var(--olive-dark)' : '#A0A0A0', cursor: canBuyWithPoints ? 'pointer' : 'not-allowed'}} 
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
