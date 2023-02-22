import React from "react";
import accounting from "accounting";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Total = () => {
  const { favorites } = useSelector((state) => state);

  return (
    <div className="total">
      <h5>Total items: {favorites?.length}</h5>
      {/* <h5>{accounting.formatMoney(getBasketTotal(basket), "€")}</h5> */}
      <Link to="/checkout">
        <Button className="checkout-button" variant="contained" color="primary">
          Check out
        </Button>
      </Link>
    </div>
  );
};

export default Total;
