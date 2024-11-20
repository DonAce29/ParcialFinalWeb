import React, { useState } from 'react';
import 'header.css';

const Header = ({ onCartClick, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    onCartClick();
    if (isMenuOpen) {
      setIsMenuOpen(false);  // Cerrar el menú hamburguesa al hacer clic en el carrito
    }
  };

  return (
    <header>
      <h1 className="logo">
        <img src="logo.jpeg" alt="Logo de Opitas Food" className="logo-image" />
      </h1>
      <h2 id="opitasFood">Opitas Food</h2>

      {/* Botón del menú hamburguesa */}
      <button
        id="menu-toggle"
        className="menu-hamburguesa"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Menú de navegación */}
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="#contacto" className="link">
          Contacto
        </a>
        <a href="#ubicaciones" className="link">
          Ubicación
        </a>
        <a
          href="#carrito"
          id="carro"
          className="cart-container"
          onClick={handleCartClick}  // Llamar a handleCartClick para cerrar el menú
        >
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </a>
      </nav>
    </header>
  );
};

export default Header;
