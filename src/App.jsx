import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeedbackWidget from './components/FeedbackWidget';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import ProductDetails from './pages/ProductDetails';
import CollectPoints from './pages/CollectPoints';
import './App.css';

function App() {
  const [points, setPoints] = useState(2650);
  const [lastFeedbackTime, setLastFeedbackTime] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
  const FEEDBACK_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000;

  useEffect(() => {
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

  const handleGiveFeedback = () => {
    const now = Date.now();
    setLastFeedbackTime(now);
    localStorage.setItem('lastFeedbackTime', now.toString());
    
    const newPoints = points + 100;
    setPoints(newPoints);
    localStorage.setItem('atharPoints', newPoints.toString());
  };

  const checkFeedbackAvailability = () => {
    if (!canGiveFeedback()) {
      const remaining = FEEDBACK_COOLDOWN_MS - (Date.now() - lastFeedbackTime);
      const days = Math.ceil(remaining / (1000 * 60 * 60 * 24));
      setErrorMsg(`عذراً، لقد قمت بتقديم تقييم مؤخراً. يمكنك التقييم مرة أخرى بعد ${days} يوم (أو عند إتمام عملية شراء).`);
    } else {
      setErrorMsg('');
    }
  };

  // Payment Handlers
  const handleCashPurchase = () => {
    // Grant points for cash purchase and reset feedback timer!
    const newPoints = points + 500;
    setPoints(newPoints);
    localStorage.setItem('atharPoints', newPoints.toString());
    
    localStorage.removeItem('lastFeedbackTime');
    setLastFeedbackTime(null);
    setErrorMsg(''); // clear error so they know they can feedback
  };

  const handlePointsPurchase = (cost) => {
    const newPoints = points - cost;
    setPoints(newPoints);
    localStorage.setItem('atharPoints', newPoints.toString());
  };

  return (
    <div className="app-container">
      <Navbar points={points} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards points={points} />} />
        <Route path="/collect-points" element={<CollectPoints />} />
        <Route 
          path="/product/:id" 
          element={
            <ProductDetails 
              points={points} 
              handleCashPurchase={handleCashPurchase} 
              handlePointsPurchase={handlePointsPurchase}
            />
          } 
        />
      </Routes>

      <div onClick={checkFeedbackAvailability}>
        <FeedbackWidget 
          canGiveFeedback={canGiveFeedback} 
          handleGiveFeedback={handleGiveFeedback}
          errorMsg={errorMsg}
        />
      </div>
    </div>
  );
}

export default App;
