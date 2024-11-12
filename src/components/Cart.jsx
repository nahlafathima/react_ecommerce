import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box, Avatar } from '@mui/material';

const Cart = ({ cartItems, clearCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <Box>
          <List>
            {cartItems.map((item, index) => (
              <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={item.image} // Assuming the product image URL is stored in the 'image' property
                  alt={item.name}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <ListItemText
                  primary={item.name}
                  secondary={`Price: $${item.price.toFixed(2)} | Quantity: ${item.quantity}`}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>Total: ${getTotalPrice()}</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={clearCart}
            sx={{ mt: 2 }}
          >
            Clear Cart
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
