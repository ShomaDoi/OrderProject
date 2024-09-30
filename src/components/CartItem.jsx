import { useContext } from "react";
import { currencyFormmater } from "../utils/format";
import CartContext from "../store/CartContext";
export default function CartItem({ item }) {
  const itemCtx = useContext(CartContext);
  return (
    <li key={item.id}>
      <div className="cart-item">
        <p>
          {item.name} - {item.quantity} x {currencyFormmater.format(item.price)}
        </p>
        <p className="cart-item-actions">
          <button onClick={() => itemCtx.removeItem(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => itemCtx.addItem(item)}>+</button>
        </p>
      </div>
    </li>
  );
}
