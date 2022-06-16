import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";

const Total = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="total">
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "€")}</h5>
      <Button className="checkout-button" variant="contained" color="primary">
        Check out
      </Button>
    </div>
  );
};

export default Total;
