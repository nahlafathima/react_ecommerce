import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Badge, Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



const Header = ({cartCount}) => {

    
  return (
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My E-Commerce Store
        </Typography>
        
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>

        {/* Cart Icon with Badge */}
       
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
    );
    
  
};

export default Header
