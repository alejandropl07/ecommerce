import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Total from "./Total";
import CheckoutCard from "./CheckoutCard";
import { useSelector } from "react-redux";

function CheckoutPage() {
  const { favorites } = useSelector((state) => state);

  function FormRow() {
    return (
      <>
      {console.log(favorites)}
        {favorites?.map((item) => (
          <Grid key={item.id} item xs={12} sm={8} md={6} lg={4} container spacing={2}>
            <CheckoutCard key={item.id} product={item} />
          </Grid>
        ))}
      </>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: "2rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <Total />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CheckoutPage;
