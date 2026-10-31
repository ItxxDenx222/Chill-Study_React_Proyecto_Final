import { useState, useEffect } from 'react';
import { productsData } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import Controls from './components/Controls';
import ProductCard from './components/ProductCard';
import Modal from './components/Modal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'; 

export default function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('chill_study_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('chill_study_favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('chill_study_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('chill_study_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Header cartCount={totalCartItems} onOpenCart={() => setIsCartOpen(true)} />
      <Hero />
      
      <main className="main-container" id="carta">
        <h2 className="section-title">Nuestra Selección</h2>
        
        <Controls 
          currentCategory={category} 
          setCategory={setCategory} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />

        <section className="contenedor" id="grid-productos">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={() => toggleFavorite(product.id)}
                onOpenModal={setSelectedProduct} 
              />
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#777', padding: '40px' }}>
              No se encontraron cafés o postres con esa búsqueda.
            </p>
          )}
        </section>
      </main>

      <Modal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={() => addToCart(selectedProduct)} 
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      <Footer />
    </div>
  );
}