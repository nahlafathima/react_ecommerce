// src/App.jsx

import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/Productlist';
import Cart from './components/Cart';
import Login from './components/Login';
import Categories from './components/Categories';
import products, { categories } from './products'; // Import categories
import theme from './theme';

import './App.css';

function App() {
  // Cart state with cart items array
  const [cartItems, setCartItems] = useState([]);

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Header */}
        <Header cartCount={cartItems.length} />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Container sx={{ paddingY: 4 }}>
                {/* Categories Component */}
                <Categories
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleSelectCategory}
                />
                {/* Product List */}
                <ProductList
                  addToCart={addToCart}
                  selectedCategory={selectedCategory}
                />
              </Container>
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} clearCart={clearCart} />}
          />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
