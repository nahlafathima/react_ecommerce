import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';


const Productcard = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        alert(`${product.name} added to the cart!`);
        addToCart(product); // Add product to the cart
      };
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      
      {/* Product Details */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      
      {/* Add to Cart Button */}
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
  


export default Productcard
