import { useState } from 'react';

const FeedbackWidget = ({ canGiveFeedback, handleGiveFeedback, errorMsg }) => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const POINTS_PER_FEEDBACK = 100;

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (!text.trim()) return;
    handleGiveFeedback();
    setText('');
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button className="floating-feedback-btn animate-fade-in" onClick={handleOpen} style={{animationDelay: '0.5s'}}>
        <span>📝</span> تقييمك يهمنا
        <span className="reward-text">(+{POINTS_PER_FEEDBACK} نقطة)</span>
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content animate-fade-in">
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2 className="modal-title">شاركنا رأيك</h2>
            
            {errorMsg && !canGiveFeedback() ? (
              <div style={{color: '#d9534f', marginBottom: '25px', fontSize: '15px', fontWeight: 'bold'}}>{errorMsg}</div>
            ) : (
              <>
                <p className="modal-text">
                  نحن نهتم برأيك! شاركنا تجربتك مع منتجات أثر واربح <strong className="text-gold">{POINTS_PER_FEEDBACK} نقطة</strong> تضاف فوراً لرصيدك.
                </p>
                <textarea 
                  className="feedback-textarea" 
                  placeholder="كيف كانت تجربتك؟ ماذا تقترح لنحسن من خدماتنا؟..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </>
            )}

            <div className="modal-actions">
              {(!errorMsg || canGiveFeedback()) ? (
                <>
                  <button className="btn-outline" onClick={() => setShowModal(false)}>إلغاء</button>
                  <button 
                    className="btn-primary" 
                    onClick={handleSubmit}
                    disabled={!text.trim()}
                  >
                    إرسال التقييم
                  </button>
                </>
              ) : (
                <button className="btn-primary" onClick={() => setShowModal(false)}>حسناً</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackWidget;
