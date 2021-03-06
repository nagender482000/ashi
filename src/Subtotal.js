import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
// import { ShoppingBasket } from "@material-ui/icons";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <h6>Place Order</h6>
            {/* <small className="proceed">
              <input type="checkbox" />
              Proceed to Checkout
            </small> */}
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs "}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
