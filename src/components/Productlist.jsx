// src/components/Productlist.jsx

import React from 'react';
import { Grid } from '@mui/material';
import Productcard from './Productcard';
import products from '../products';
import PropTypes from 'prop-types';

const Productlist = ({ addToCart, selectedCategory }) => {
  // Filter products based on selectedCategory
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Grid container spacing={4}>
      {filteredProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Productcard product={product} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

Productlist.propTypes = {
  addToCart: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default Productlist;
