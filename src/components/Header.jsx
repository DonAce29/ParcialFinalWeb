// Header.js
import React from 'react';
import './Header.css';

const Header = ({ onCartClick, cartCount }) => {
  return (
    <header>
      <h1 className="logo">
        <img src="logo.jpeg" alt="Logo de Opitas Food" className="logo-image" />
        Opitas Food
      </h1>

      <nav className="nav">
        {/* <a href="#menu" className="link">Menú</a>
        <a href="#ubicaciones" className="link">Ubicaciones</a>
        <a href="#contacto" className="link">Contacto</a>
        <button className="order-button">Pide Ahora</button> */}
        <a href="#carrito" id='carro' className="cart-container" onClick={onCartClick}>
          🛒 Carrito
          
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </a>
      </nav>
    </header>
  );
};

export default Header;
