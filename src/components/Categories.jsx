// src/components/Categories.jsx

import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          variant={selectedCategory === 'All' ? 'contained' : 'outlined'}
          onClick={() => onSelectCategory('All')}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default Categories;
