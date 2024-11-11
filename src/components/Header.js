
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Comidas Rápidas</h1>
      <nav style={styles.nav}>
        <a href="#menu" style={styles.link}>Menú</a>
        <a href="#ubicaciones" style={styles.link}>Ubicaciones</a>
        <a href="#contacto" style={styles.link}>Contacto</a>
        <button style={styles.orderButton}>Pide Ahora</button>
      </nav>
    </header>
  );
};

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#FF6347' },
  logo: { color: '#fff' },
  nav: { display: 'flex', gap: '1rem' },
  link: { color: '#fff', textDecoration: 'none' },
  orderButton: { backgroundColor: '#FFD700', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' },
};

export default Header;
