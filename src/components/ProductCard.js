// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ image, name, description, price, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p style={styles.price}>${price}</p>
      <button onClick={onAddToCart} style={styles.button}>Agregar al Carrito</button>
    </div>
  );
};

const styles = {
  card: { border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center', maxWidth: '200px' },
  image: { width: '100%', borderRadius: '8px' },
  price: { fontWeight: 'bold', color: '#FF6347' },
  button: { backgroundColor: '#FFD700', border: 'none', padding: '0.5rem', cursor: 'pointer' },
};

export default ProductCard;
