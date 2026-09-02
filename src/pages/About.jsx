import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in" style={{padding: '60px 5%', maxWidth: '900px', margin: '0 auto'}}>
      
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <h2 className="hero-title" style={{fontSize: '48px', marginBottom: '20px'}}>عن <span className="text-gold">أثر</span></h2>
        <p className="hero-subtitle" style={{maxWidth: '700px', margin: '0 auto'}}>
          أثر ليس مجرد متجر، بل هو مبادرة بيئية تهدف إلى إعادة صياغة مفهوم الاستهلاك. نحن نؤمن بأن الجمال يمكن أن ينبع من الأشياء المهملة.
        </p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
        <div style={{background: 'var(--white)', padding: '40px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(67, 68, 32, 0.05)'}}>
          <h3 style={{fontSize: '28px', color: 'var(--olive-dark)', marginBottom: '20px', borderBottom: '2px dashed var(--beige)', paddingBottom: '10px', display: 'inline-block'}}>مهمتنا 🌍</h3>
          <p style={{fontSize: '18px', color: 'var(--olive-medium)', lineHeight: '1.8'}}>
            مهمتنا هي تقليل النفايات الورقية التي تضر ببيئتنا من خلال تحويلها إلى قطع ديكور فنية وعملية. كل منتج في أثر يمثل خطوة نحو مستقبل أكثر استدامة واخضراراً.
          </p>
        </div>

        <div style={{background: 'var(--white)', padding: '40px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid rgba(67, 68, 32, 0.05)'}}>
          <h3 style={{fontSize: '28px', color: 'var(--olive-dark)', marginBottom: '20px', borderBottom: '2px dashed var(--beige)', paddingBottom: '10px', display: 'inline-block'}}>قيمنا 🌿</h3>
          <ul style={{fontSize: '18px', color: 'var(--olive-medium)', lineHeight: '1.8', listStyleType: 'none', padding: 0}}>
            <li style={{marginBottom: '15px'}}><span className="text-gold" style={{fontWeight: 'bold', marginLeft: '10px'}}>الاستدامة:</span> البيئة أولاً في كل قرار نتخذه.</li>
            <li style={{marginBottom: '15px'}}><span className="text-gold" style={{fontWeight: 'bold', marginLeft: '10px'}}>الحرفية:</span> نصنع كل قطعة يدوياً بحب واهتمام بأدق التفاصيل.</li>
            <li style={{marginBottom: '15px'}}><span className="text-gold" style={{fontWeight: 'bold', marginLeft: '10px'}}>الابتكار:</span> نبحث دائماً عن طرق جديدة لاستغلال المواد المهملة.</li>
            <li style={{marginBottom: '15px'}}><span className="text-gold" style={{fontWeight: 'bold', marginLeft: '10px'}}>المجتمع:</span> نكافئ عملاءنا (شركاء النجاح) من خلال نظام النقاط لدعمهم المستمر.</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default About;
