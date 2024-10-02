import CartContext from "../store/CartContext";
import { useContext } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import UserContext from "../store/UserContext";
import { currencyFormmater } from "../utils/format";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
export default function Checkout() {
  const userCtx = useContext(UserContext);
  const cartCtx = useContext(CartContext);
  const { data, isLoading, error, sendRequest } = useHttp();
  const totalCost = cartCtx.items.reduce(
    (totalCost, item) => totalCost + item.quantity * item.price,
    0
  );
  function handleCloseCheckout() {
    userCtx.hide();
    cartCtx.clearCart();
  }

  function handleSubmit(event) {
    event.preventDefault();
    /*Getting input values and validating them*/
    const formData = new FormData(event.target);
    const orderData = Object.fromEntries(formData.entries());

    /*POSTing data*/
    sendRequest("http://localhost:3000/orders", {
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

    /*fetch("http://localhost:3000/orders", {
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
    });*/
  }
  let actions = (
    <>
      <Button type="button" isTextOnly onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (error) {
    actions = <span className="center">failed to submit,{error}</span>;
  } else if (isLoading) {
    actions = <span className="center">processing orders...</span>;
  } else if (data && !error) {
    actions = (
      <Modal
        className="checkout"
        open={userCtx.progress === "checkout"}
        onClose={handleCloseCheckout}
      >
        <p>Your order has been submited!</p>
        <Button type="button" isTextOnly onClick={handleCloseCheckout}>
          Close
        </Button>
      </Modal>
    );
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

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
