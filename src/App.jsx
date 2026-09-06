import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeedbackWidget from './components/FeedbackWidget';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import ProductDetails from './pages/ProductDetails';
import CollectPoints from './pages/CollectPoints';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  const [points, setPoints] = useState(2650);
  const [lastFeedbackTime, setLastFeedbackTime] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Cart State
  const [cartItems, setCartItems] = useState([]);

  const FEEDBACK_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const savedTime = localStorage.getItem('lastFeedbackTime');
    const savedPoints = localStorage.getItem('atharPoints');
    const savedCart = localStorage.getItem('atharCart');
    
    if (savedTime) setLastFeedbackTime(parseInt(savedTime, 10));
    if (savedPoints) setPoints(parseInt(savedPoints, 10));
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // Save Cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('atharCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

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
  const handleCashPurchase = (cashSpent) => {
    // Grant 1 point for every 1 EGP spent
    const earnedPoints = cashSpent || 500; // fallback to 500 if not provided
    const newPoints = points + earnedPoints;
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
      <Navbar points={points} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards points={points} />} />
        <Route path="/collect-points" element={<CollectPoints />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/cart" 
          element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} 
        />
        <Route 
          path="/checkout" 
          element={<Checkout cartItems={cartItems} clearCart={clearCart} handleCashPurchase={handleCashPurchase} handlePointsPurchase={handlePointsPurchase} points={points} />} 
        />
        <Route 
          path="/product/:id" 
          element={
            <ProductDetails 
              points={points} 
              handleCashPurchase={handleCashPurchase} 
              handlePointsPurchase={handlePointsPurchase}
              addToCart={addToCart}
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
