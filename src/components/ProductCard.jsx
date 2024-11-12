// ProductCard.js
import React from 'react';
import './ProductCart.css'; // Asegúrate de importar el archivo CSS

const ProductCard = ({ image, name, description, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price.toFixed(2)}</div>
      <button className="add-to-cart" onClick={onAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard
