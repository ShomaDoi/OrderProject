import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserContextProvider } from "./store/UserContext";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <Header></Header>
          <Meals></Meals>
          <Cart></Cart>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
