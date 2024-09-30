import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserContextProvider } from "./store/UserContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <Header></Header>
          <Meals></Meals>
          <Cart></Cart>
          <Checkout></Checkout>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
