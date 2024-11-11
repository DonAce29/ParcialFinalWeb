import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Comidas Rápidas © 2024</p>
      <div style={styles.socials}>
        <a href="#" style={styles.socialLink}>Instagram</a>
        <a href="#" style={styles.socialLink}>Facebook</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: { textAlign: 'center', padding: '1rem', backgroundColor: '#FF6347', color: '#fff' },
  socials: { display: 'flex', justifyContent: 'center', gap: '1rem' },
  socialLink: { color: '#FFD700', textDecoration: 'none' },
};

export default Footer;