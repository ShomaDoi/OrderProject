import logoimg from "../assets/logo.jpg";
import Button from "./UI/Button";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg} id="img" />
        <h1>Food</h1>
      </div>
      <nav>
        <Button isTextOnly>cart(0)</Button>
      </nav>
    </header>
  );
}
