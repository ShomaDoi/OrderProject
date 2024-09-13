import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const exsistingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const updatedItem = {
        ...state.items[exsistingCartItemIndex],
        quantity: state.items[exsistingCartItemIndex].quantity + 1,
      };
      updatedItems[exsistingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const exsistingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[exsistingCartItemIndex];

    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, { items: [] });

  const cartContext = {
    items: cartState.items,
    addItem,
    removeItem
  };

  function addItem(item) {
    dispatchCart({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCart({ type: "REMOVE_ITEM", id });
  }
  return (
    <CartContext.Provider value={cartContext} >{children} </CartContext.Provider>
  );
}

export default CartContext;
