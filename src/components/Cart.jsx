import React from 'react';
import './cart.css';

const Cart = ({ cartItems, onRemove, onClose }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      {/* Botón de Cerrar */}
      <button className="close-button" onClick={onClose}>
        Cerrar
      </button>

      <h2 className="Tit">Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              <button
                onClick={() => onRemove(item)}
                className="remove-button"
              >
                Quitar
              </button>
            </div>
          ))}
          {/* Muestra el total */}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
