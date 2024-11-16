import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  const products = [
    { name: 'Hamburguesa', description: 'Lechuga,Tomate,Pan Artesanal,Carne de res o cerdo artesanal,queso,ripio,tocineta y salsas de la casa', price: 22000, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1200px-NCI_Visuals_Food_Hamburger.jpg' },
    { name: 'Pizza', description: 'Con pepperoni', price: 25000, image: 'https://unareceta.com/wp-content/uploads/2016/08/receta-Pizza-pepperoni.jpg' },
    { name: 'Perros Calientes', description: 'Con tocineta,queso mozzarella, ripio,cebolla caramelizada, y salsas de la casa', price: 15000, image: 'https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Mexican-Style-Hot-Dogs.jpg' },
    { name: 'Salchi Papas', description: 'Sencilla,Especial,La Mega', price: 5000, image: 'https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/none/11101/PAOX/whatsapp-image-2021-08-12-at-11-02-48-am-1_38328947_20210813161521.jpg' },
    { name: 'Tacos', description: 'De res, de cerdo y de pollo', price: 10000, image: 'https://i0.wp.com/unapizcadeamor.com/wp-content/uploads/2021/02/DSC_2905-4.jpg?resize=750%2C938&ssl=1' },
    { name: 'Burrito', description: 'De Pollo, Cerdo y Res', price: 12000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VrVBrZTcdjQW3Dz_DnfdmRchcHWXbdOz6A&s' },
    { name: 'Ensalada', description: 'Con pollo a la parrilla', price: 8000, image: 'https://comedera.com/wp-content/uploads/sites/9/2015/10/ensalada-de-pollo.jpg?w=500&h=375&crop=1' },
    { name: 'Sopa', description: 'De pollo y verduras', price: 6000, image: 'https://especiasmontero.com/wp-content/uploads/2018/02/CaldoDePollo-1-500x500.jpg' },
    { name: 'Sandwich', description: 'De jamón y queso, de corde y de pollo', price: 4000, image: 'https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/In-Development/FULL-SAND.png' },
    { name: 'Jugos', description: 'Naturales y en leche', price: 3000, image: 'https://dayamineral.pe/wp-content/uploads/2020/08/4_1070-3.jpg' },
  ];

  return (
    <div>
      <Header onCartClick={() => setIsCartVisible(!isCartVisible)} cartCount={cart.length} />
      <main className="main-content">
        <section>
          <h2>Menú</h2>
          <div className="menu">
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
        {isCartVisible && ( // Muestra el carrito solo si es visible
          <aside>
            <Cart cartItems={cart} onRemove={removeFromCart} />
          </aside>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App
