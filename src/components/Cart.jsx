// Cart.js
import React from 'react';
import './cart.css';

const Cart = ({ cartItems, onRemove }) => {
  return (
    <div className="cart-container">
      <h2 className='Tit'>Carrito</h2>
      {cartItems.length === 0 ? (
        <p> vacío </p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => onRemove(item)} className="remove-button">Quitar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
