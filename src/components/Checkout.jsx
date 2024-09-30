import CartContext from "../store/CartContext";
import { useContext } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import UserContext from "../store/UserContext";
import { currencyFormmater } from "../utils/format";
import Button from "./UI/Button";
export default function Checkout() {
  const userCtx = useContext(UserContext);
  const cartCtx = useContext(CartContext);
  const totalCost = cartCtx.items.reduce(
    (totalCost, item) => totalCost + item.quantity * item.price,
    0
  );
  function handleCloseCheckout() {
    userCtx.hide();
  }

  return (
    <Modal className="checkout" open={userCtx.progress === "checkout"} onClose={handleCloseCheckout}>
      <form>
        <h2>Checkout</h2>
        <p>Total: {currencyFormmater.format(totalCost)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Street Address" type="text" id="street-address" />
        <div className="control-row">
          <Input label="Postal Code" type="number" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" isTextOnly onClick={handleCloseCheckout}>  
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
