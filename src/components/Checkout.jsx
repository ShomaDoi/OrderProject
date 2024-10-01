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

  function handleSubmit(event) {
    event.preventDefault();
    /*Getting input values and validating them*/
    const formData = new FormData(event.target);
    const orderData = Object.fromEntries(formData.entries());

    /*POSTing data*/
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: orderData,
        },
      }),
    });
  }
  return (
    <Modal
      className="checkout"
      open={userCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total: {currencyFormmater.format(totalCost)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
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
