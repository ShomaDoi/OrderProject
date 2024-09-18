import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormmater } from "../utils/format";
import UserContext from "../store/UserContext";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const totalCost = cartCtx.items.reduce(
    (totalCost, item) => totalCost + item.quantity * item.price,
    0
  );
  const userCtx = useContext(UserContext);
  function handleCloseCart() {
    userCtx.hide();
  }
  console.log(cartCtx.items);
  return (
    <Modal className="cart" open={userCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </ul>
      <p className="cart-total">{currencyFormmater.format(totalCost)}</p>
      <p className="modal-actions">
        <Button isTextOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button>Go To Checkout</Button>
      </p>
    </Modal>
  );
}
