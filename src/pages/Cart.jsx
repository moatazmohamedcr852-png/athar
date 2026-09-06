import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  const totalCash = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalPoints = cartItems.reduce((acc, item) => acc + (item.points * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="animate-fade-in flex-center" style={{flexDirection: 'column', padding: '100px 20px', minHeight: '60vh'}}>
        <h2>سلة المشتريات فارغة</h2>
        <p style={{marginTop: '20px', color: 'var(--olive-medium)'}}>أضف بعض المنتجات الرائعة المعاد تدويرها!</p>
        <button className="btn-primary" style={{marginTop: '30px'}} onClick={() => navigate('/rewards')}>
          تصفح المنتجات
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{padding: '60px 5%', maxWidth: '900px', margin: '0 auto', minHeight: '80vh'}}>
      <h2 className="hero-title" style={{marginBottom: '40px'}}>سلة المشتريات 🛒</h2>
      
      <div className="cart-list" style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px'}}>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item" style={{display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--white)', padding: '20px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'}}>
            <img src={item.image} alt={item.title} style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '15px'}} />
            <div style={{flex: 1}}>
              <h3 style={{fontSize: '20px'}}>{item.title}</h3>
              <p style={{color: 'var(--olive-medium)'}}>{item.price} ج.م | {item.points} نقطة</p>
            </div>
            
            <div className="quantity-controls" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <button className="btn-outline" style={{padding: '5px 15px', borderRadius: '10px'}} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span style={{fontSize: '18px', fontWeight: 'bold'}}>{item.quantity}</span>
              <button className="btn-outline" style={{padding: '5px 15px', borderRadius: '10px'}} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            
            <button className="btn-outline" style={{borderColor: '#ff4d4f', color: '#ff4d4f'}} onClick={() => removeFromCart(item.id)}>
              🗑️
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary" style={{background: 'var(--gray-light)', padding: '30px', borderRadius: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>
        <div>
          <h3 style={{fontSize: '24px'}}>الإجمالي:</h3>
          <p style={{fontSize: '22px', fontWeight: 'bold', marginTop: '10px'}}>{totalCash} ج.م</p>
          <p style={{fontSize: '16px', color: 'var(--olive-medium)'}}>أو {totalPoints} نقطة</p>
        </div>
        
        <button className="btn-primary" style={{padding: '15px 40px', fontSize: '18px'}} onClick={() => navigate('/checkout')}>
          متابعة الدفع &larr;
        </button>
      </div>
    </div>
  );
};

export default Cart;
