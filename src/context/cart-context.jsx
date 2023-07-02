import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  totalDiscount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
