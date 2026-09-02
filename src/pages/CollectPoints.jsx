import React from 'react';

const CollectPoints = () => {
  return (
    <div className="animate-fade-in" style={{padding: '40px 5%', maxWidth: '800px', margin: '0 auto'}}>
      <h2 className="section-title" style={{textAlign: 'center', marginBottom: '40px'}}>كيفية <span className="text-gold">جمع النقاط</span></h2>
      
      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        
        {/* Card 1: Purchases */}
        <div style={{background: 'var(--white)', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', gap: '20px', alignItems: 'center'}}>
          <div style={{fontSize: '40px'}}>🛍️</div>
          <div>
            <h3 style={{fontSize: '20px', marginBottom: '5px', color: 'var(--olive-dark)'}}>الشراء من المتجر</h3>
            <p style={{color: 'var(--olive-medium)'}}>
              احصل على <strong>500 نقطة</strong> مكافأة مقابل كل عملية شراء نقدية تقوم بها. كلما تسوقت أكثر، زادت نقاطك!
            </p>
          </div>
        </div>

        {/* Card 2: Feedback */}
        <div style={{background: 'var(--white)', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', gap: '20px', alignItems: 'center'}}>
          <div style={{fontSize: '40px'}}>📝</div>
          <div>
            <h3 style={{fontSize: '20px', marginBottom: '5px', color: 'var(--olive-dark)'}}>مشاركة رأيك</h3>
            <p style={{color: 'var(--olive-medium)'}}>
              رأيك يهمنا! قم بتقييم منتجاتنا وشاركنا تجربتك لتحصل على <strong>100 نقطة</strong>. (متاح مرة كل 3 أيام أو بعد كل عملية شراء).
            </p>
          </div>
        </div>

        {/* Card 3: Invite friends (Mock feature) */}
        <div style={{background: 'var(--white)', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', gap: '20px', alignItems: 'center'}}>
          <div style={{fontSize: '40px'}}>👥</div>
          <div>
            <h3 style={{fontSize: '20px', marginBottom: '5px', color: 'var(--olive-dark)'}}>دعوة الأصدقاء (قريباً)</h3>
            <p style={{color: 'var(--olive-medium)'}}>
              قم بدعوة أصدقائك للتسجيل في أثر واحصل على <strong>250 نقطة</strong> بمجرد إتمامهم لأول عملية شراء.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CollectPoints;
