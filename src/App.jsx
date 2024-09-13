import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";


function App() {
  return (
    <div>
      <CartContextProvider>
        <Header></Header>
        <Meals></Meals>
      </CartContextProvider>
    </div>
  );
}

export default App;
