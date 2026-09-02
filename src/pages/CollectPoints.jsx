import React from 'react';

const CollectPoints = () => {
  return (
    <div className="animate-fade-in" style={{padding: '60px 5%', maxWidth: '900px', margin: '0 auto'}}>
      
      {/* Certificate-like header */}
      <div style={{
        textAlign: 'center', 
        marginBottom: '60px',
        padding: '40px',
        background: 'var(--white)',
        borderRadius: '20px 30px 25px 20px', /* Organic */
        border: '1px dashed var(--olive-medium)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
        position: 'relative'
      }}>
        <div style={{position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: 'var(--beige)', padding: '10px', borderRadius: '50%'}}>
          <span className="star-icon" style={{fontSize: '30px'}}>⭐</span>
        </div>
        <h2 className="section-title" style={{marginBottom: '15px', marginTop: '10px'}}>كيفية <span className="text-gold">جمع النقاط</span></h2>
        <p style={{color: 'var(--olive-medium)', fontSize: '18px'}}>
          في أثر، نكافئك على كل خطوة تخطوها معنا نحو الاستدامة.
        </p>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
        
        {/* Card 1: Purchases */}
        <div style={{background: 'var(--white)', padding: '30px', borderRadius: '25px', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', display: 'flex', gap: '25px', alignItems: 'center', transition: 'transform 0.3s ease'}} className="hover-lift">
          <div style={{fontSize: '50px', background: 'var(--beige)', padding: '20px', borderRadius: '50%', border: '1px solid rgba(67, 68, 32, 0.1)'}}>🛍️</div>
          <div>
            <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--olive-dark)'}}>الشراء من المتجر</h3>
            <p style={{color: 'var(--olive-medium)', fontSize: '16px', lineHeight: '1.6'}}>
              احصل على <strong>500 نقطة</strong> مكافأة مقابل كل عملية شراء نقدية تقوم بها. كلما اقتنيت قطعاً مستدامة أكثر، زادت نقاطك!
            </p>
          </div>
        </div>

        {/* Card 2: Feedback */}
        <div style={{background: 'var(--white)', padding: '30px', borderRadius: '25px', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', display: 'flex', gap: '25px', alignItems: 'center'}} className="hover-lift">
          <div style={{fontSize: '50px', background: 'var(--beige)', padding: '20px', borderRadius: '50%', border: '1px solid rgba(67, 68, 32, 0.1)'}}>📝</div>
          <div>
            <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--olive-dark)'}}>مشاركة رأيك</h3>
            <p style={{color: 'var(--olive-medium)', fontSize: '16px', lineHeight: '1.6'}}>
              رأيك يهمنا في تحسين جودة منتجاتنا المعاد تدويرها! قم بتقييم تجربتك لتحصل على <strong>100 نقطة</strong>. (متاح مرة كل 3 أيام).
            </p>
          </div>
        </div>

        {/* Card 3: Recycle with us */}
        <div style={{background: 'var(--white)', padding: '30px', borderRadius: '25px', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', display: 'flex', gap: '25px', alignItems: 'center', border: '1px solid rgba(216, 165, 32, 0.3)'}} className="hover-lift">
          <div style={{fontSize: '50px', background: 'var(--beige)', padding: '20px', borderRadius: '50%', border: '1px solid rgba(67, 68, 32, 0.1)'}}>♻️</div>
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h3 style={{fontSize: '22px', marginBottom: '10px', color: 'var(--olive-dark)'}}>أعد التدوير معنا (قريباً)</h3>
              <span className="sustainability-tag" style={{margin: 0, padding: '4px 10px', fontSize: '12px'}}>مبادرة أثر</span>
            </div>
            <p style={{color: 'var(--olive-medium)', fontSize: '16px', lineHeight: '1.6'}}>
              أرسل أوراقك القديمة إلينا لنعيد تدويرها، واحصل على <strong>1000 نقطة</strong> مكافأة لمساهمتك الفعالة في حماية البيئة.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        .hover-lift:hover { transform: translateY(-5px); }
      `}</style>
    </div>
  );
};

export default CollectPoints;
