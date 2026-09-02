import { useState, useEffect } from 'react'
import './App.css'

// Mock Data
const MOCK_PRODUCTS = [
  { id: 1, title: 'مزهرية عجينة ورق كروية', points: 7500, desc: 'خصم 15% على إكسسوارات المنزل', progress: 50, image: '/products2026-09-02 at 1.18.52 PM.jpeg' },
  { id: 2, title: 'مجموعة حاويات مجوفة', points: 3200, desc: 'مثالية للتخزين', progress: 95, image: '/products2026-09-02 at 1.18.53 PM (1).jpeg' },
  { id: 3, title: 'تمثال حيوان تجريدي', points: 2500, desc: 'خصم 10% على المفروشات', progress: 100, image: '/products2026-09-02 at 1.18.53 PM (2).jpeg' },
  { id: 4, title: 'شراء عجينة ورق جاهزة', points: 2500, desc: 'مزيج جاهز للاستخدام مباشرة', progress: 10, image: '/products2026-09-02 at 1.18.54 PM.jpeg' },
];

function App() {
  const [points, setPoints] = useState(2650);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [lastFeedbackTime, setLastFeedbackTime] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Feedback Rules
  const FEEDBACK_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000; // 3 Days in milliseconds
  const POINTS_PER_FEEDBACK = 100;

  useEffect(() => {
    // Load state from local storage on mount
    const savedTime = localStorage.getItem('lastFeedbackTime');
    const savedPoints = localStorage.getItem('atharPoints');
    if (savedTime) setLastFeedbackTime(parseInt(savedTime, 10));
    if (savedPoints) setPoints(parseInt(savedPoints, 10));
  }, []);

  const canGiveFeedback = () => {
    if (!lastFeedbackTime) return true;
    const now = Date.now();
    return (now - lastFeedbackTime) >= FEEDBACK_COOLDOWN_MS;
  };

  const handleOpenFeedback = () => {
    if (!canGiveFeedback()) {
      const remaining = FEEDBACK_COOLDOWN_MS - (Date.now() - lastFeedbackTime);
      const days = Math.ceil(remaining / (1000 * 60 * 60 * 24));
      setErrorMsg(`عذراً، يمكنك تقديم ملاحظاتك مرة أخرى بعد ${days} يوم (أو عند إتمام عملية شراء).`);
    } else {
      setErrorMsg('');
    }
    setShowFeedbackModal(true);
  };

  const handleSubmitFeedback = () => {
    if (!canGiveFeedback()) return;
    if (feedbackText.trim() === '') return;

    const now = Date.now();
    setLastFeedbackTime(now);
    localStorage.setItem('lastFeedbackTime', now.toString());
    
    const newPoints = points + POINTS_PER_FEEDBACK;
    setPoints(newPoints);
    localStorage.setItem('atharPoints', newPoints.toString());
    
    setFeedbackText('');
    setShowFeedbackModal(false);
    alert(`شكرًا لملاحظاتك! لقد حصلت على ${POINTS_PER_FEEDBACK} نقطة.`);
  };

  const simulatePurchase = () => {
    // A purchase resets the feedback cooldown!
    localStorage.removeItem('lastFeedbackTime');
    setLastFeedbackTime(null);
    alert('تمت عملية الشراء بنجاح! يمكنك الآن تقييمنا والحصول على نقاط إضافية.');
  };

  return (
    <div className="app-container animate-fade-in">
      
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <button className="icon-btn">⚙️</button>
          <h1 className="header-title">المكافآت والديكور</h1>
          <button className="icon-btn">{'<'}</button>
        </div>
        
        <div className="points-banner">
          <span className="star-icon">⭐</span>
          <span className="points-text">نقاطك الحالية: {points.toLocaleString()}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="products-grid">
        {MOCK_PRODUCTS.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} className="product-image" onError={(e) => { e.target.style.display='none' }} />
            </div>
            <h3 className="product-title">{product.title}</h3>
            <div className="product-points">
              <span className="star-icon" style={{fontSize: '14px'}}>⭐</span>
              <span className="text-gold">{product.points.toLocaleString()} نقطة</span>
            </div>
            <p className="product-desc">{product.desc}</p>
            
            <div className="progress-container">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${product.progress}%` }}></div>
              </div>
              <div className="progress-text">
                <span>{product.progress}%</span>
                <span>استبدال النقاط</span>
              </div>
            </div>
            
            <button 
              className={`btn-primary redeem-btn`} 
              disabled={points < product.points}
            >
              استبدال النقاط
            </button>
          </div>
        ))}
      </main>

      {/* Demo Action Buttons (Just for demonstration of the feedback flow) */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button className="btn-outline" onClick={handleOpenFeedback}>
          📝 تقديم ملاحظات (اربح نقاط)
        </button>
        <button className="btn-outline" onClick={simulatePurchase} style={{ borderColor: 'var(--beige)', backgroundColor: 'var(--gray-light)' }}>
          🛍️ محاكاة عملية شراء (إعادة ضبط التقييم)
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className="nav-item">
          <span className="nav-icon">👤</span>
          <span>الحساب</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📋</span>
          <span>الطلبات</span>
        </button>
        <button className="nav-item active">
          <span className="nav-icon">🎁</span>
          <span>المكافآت</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">🏠</span>
          <span>الرئيسية</span>
        </button>
      </nav>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="modal-overlay">
          <div className="modal-content animate-fade-in">
            <button className="modal-close" onClick={() => setShowFeedbackModal(false)}>×</button>
            <h2 className="modal-title">تقييمك يهمنا</h2>
            
            {errorMsg ? (
              <div style={{color: 'red', marginBottom: '20px', fontSize: '14px'}}>{errorMsg}</div>
            ) : (
              <>
                <p className="modal-text">شاركنا رأيك في منتجاتنا واربح <strong>{POINTS_PER_FEEDBACK} نقطة</strong> تضاف لرصيدك!</p>
                <textarea 
                  className="feedback-textarea" 
                  placeholder="اكتب ملاحظاتك هنا..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                />
              </>
            )}

            <div className="modal-actions">
              {!errorMsg && (
                <button 
                  className="btn-primary" 
                  onClick={handleSubmitFeedback}
                  disabled={!feedbackText.trim()}
                >
                  إرسال الملاحظات
                </button>
              )}
              <button className="btn-outline" onClick={() => setShowFeedbackModal(false)}>
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
