import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
// import {getBasketTotal} from '../reducer';
// import { useStateValue } from '../StateProvider';

const Total = () => {
  // const [{basket}, dispatch]  = useStateValue();

  return (
    <div className="total">
      <h5>Total items: 5</h5>
      <h5>{accounting.formatMoney(500, "€")}</h5>
      <Button className="checkout-button" variant="contained" color="primary">
        Check out
      </Button>
    </div>
  );
};

export default Total;
