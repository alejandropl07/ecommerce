import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../product-data';


function Products() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
          {products.map((product)   =>  {
              return(
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product    key={product.id}
            product={product}/>
        </Grid>
          )})}
      </Grid>
    </Box>
  );
}

export default Products;
