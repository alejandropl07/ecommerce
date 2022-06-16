import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo.png'
// import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow:1, marginBottom: "7rem", }}>
      <AppBar position="fixed"  sx={{ boxShadow:"none", backgroundColor:"whitesmoke"}}>
        <Toolbar>
        {/* <Link to="/"> */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
            <img src={logo} alt="eCommerce" style={
          {
            marginRight:"1rem", height:"3rem"
        }
      }  />
          </IconButton>
          {/* </Link> */}
          <Box sx={{ flexGrow: 1 }}/>
          <Typography variant="h6" color="textPrimary" component="paragraph" sx={{ marginRight: "1rem"}}>
            Hello Guest
          </Typography>
        
          <Button   variant="outlined">
                <strong>   Sign In </strong>
          </Button>

              {/* <Link to="/checkout-page"> */}
            <IconButton aria-label="show-cart-items"    color="inherit" sx={{ marginRight: "1rem"}} >
                <Badge  badgeContent={5}    color="secondary">
                <ShoppingCartIcon fontSize="large"    color="primary" />
                </Badge>
            </IconButton>
            {/* </Link> */}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
