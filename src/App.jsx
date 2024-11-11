
import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  const products = [
    //Aca agregamos los productos Darwin
    //{ name: 'Hamburguesa', description: 'Con queso y papas', price: 5.99, image: 'url_de_imagen' },
    //{ name: 'Pizza', description: 'Con pepperoni', price: 8.99, image: 'url_de_imagen' },
    
  ];

  return (
    <div>
      <Header />
      <main style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem' }}>
        <section>
          <h2>Menú</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </section>
        <aside>
          <Cart cartItems={cart} onRemove={removeFromCart} />
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default App;


