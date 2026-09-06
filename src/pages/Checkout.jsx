import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart, handleCashPurchase, handlePointsPurchase, points }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'cash'
  });
  
  const [success, setSuccess] = useState(false);

  const totalCash = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalPoints = cartItems.reduce((acc, item) => acc + (item.points * item.quantity), 0);
  const canPayWithPoints = points >= totalPoints;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    if (formData.paymentMethod === 'points') {
      if (!canPayWithPoints) {
        alert('رصيد نقاطك غير كافٍ لإتمام هذه العملية.');
        return;
      }
      handlePointsPurchase(totalPoints);
    } else {
      // Award points for every 1 EGP = 1 point as an example
      handleCashPurchase(totalCash);
    }

    clearCart();
    setSuccess(true);
    
    setTimeout(() => {
      navigate('/');
    }, 4000);
  };

  if (success) {
    return (
      <div className="animate-fade-in flex-center" style={{flexDirection: 'column', padding: '100px 20px', minHeight: '60vh'}}>
        <div style={{fontSize: '80px', marginBottom: '20px'}}>🎉</div>
        <h2 style={{fontSize: '32px'}}>تم تأكيد الطلب بنجاح!</h2>
        <p style={{marginTop: '20px', color: 'var(--olive-medium)', fontSize: '18px'}}>شكراً لمساهمتك في الحفاظ على البيئة من خلال أثر.</p>
        <p style={{marginTop: '10px', color: 'var(--olive-medium)'}}>جاري تحويلك للصفحة الرئيسية...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div style={{padding: '100px', textAlign: 'center'}}>
        <h2>لا يوجد شيء لشرائه!</h2>
        <button className="btn-primary" style={{marginTop: '20px'}} onClick={() => navigate('/cart')}>العودة للسلة</button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{padding: '60px 5%', maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
      
      {/* Form Section */}
      <div style={{flex: '1 1 500px', background: 'var(--white)', padding: '40px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
        <h2 className="section-title" style={{marginBottom: '30px'}}>تفاصيل الشحن والدفع</h2>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>الاسم بالكامل</label>
            <input 
              required 
              type="text" 
              style={{width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #ccc', fontSize: '16px'}} 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>العنوان التفصيلي</label>
            <input 
              required 
              type="text" 
              style={{width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #ccc', fontSize: '16px'}} 
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>رقم الهاتف</label>
            <input 
              required 
              type="tel" 
              style={{width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #ccc', fontSize: '16px'}} 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div style={{marginTop: '10px'}}>
            <label style={{display: 'block', marginBottom: '15px', fontWeight: 'bold'}}>طريقة الدفع</label>
            <div style={{display: 'flex', gap: '20px'}}>
              <label style={{display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer'}}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cash" 
                  checked={formData.paymentMethod === 'cash'}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                />
                الدفع عند الاستلام
              </label>
              
              <label style={{display: 'flex', alignItems: 'center', gap: '10px', cursor: canPayWithPoints ? 'pointer' : 'not-allowed', color: canPayWithPoints ? 'inherit' : '#999'}}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="points" 
                  disabled={!canPayWithPoints}
                  checked={formData.paymentMethod === 'points'}
                  onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                />
                استبدال بالنقاط {canPayWithPoints ? '' : '(غير كافية)'}
              </label>
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{marginTop: '20px', padding: '18px', fontSize: '20px'}}>
            تأكيد الطلب
          </button>
        </form>
      </div>

      {/* Summary Section */}
      <div style={{flex: '1 1 300px'}}>
        <div style={{background: 'var(--gray-light)', padding: '30px', borderRadius: '30px', position: 'sticky', top: '120px'}}>
          <h3 style={{marginBottom: '20px', fontSize: '22px'}}>ملخص الطلب</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px'}}>
            {cartItems.map(item => (
              <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '10px'}}>
                <span>{item.title} (x{item.quantity})</span>
                <span style={{fontWeight: 'bold'}}>{item.price * item.quantity} ج.م</span>
              </div>
            ))}
          </div>
          
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '20px', borderTop: '2px dashed var(--beige)'}}>
            <span style={{fontSize: '20px', fontWeight: 'bold'}}>المجموع الكلي:</span>
            <div style={{textAlign: 'left'}}>
              <div style={{fontSize: '24px', fontWeight: 'bold', color: 'var(--olive-dark)'}}>{totalCash} ج.م</div>
              <div style={{fontSize: '16px', color: 'var(--olive-medium)'}}>أو {totalPoints} نقطة</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Checkout;
