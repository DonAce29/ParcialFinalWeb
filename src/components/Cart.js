import React from 'react';

const Cart = ({ cartItems, onRemove }) => {
  return (
    <div style={styles.cart}>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={styles.item}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => onRemove(item)} style={styles.removeButton}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  cart: { padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' },
  item: { display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' },
  removeButton: { color: '#FF6347', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' },
};

export default Cart;