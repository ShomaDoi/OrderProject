import logoimg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
export default function Header() {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg} id="img" />
        <h1>Food</h1>
      </div>
      <nav>
        <Button isTextOnly>cart({numberOfItems})</Button>
      </nav>
    </header>
  );
}
