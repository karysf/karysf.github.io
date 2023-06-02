import { selector } from "recoil";
import { cartState } from "../atoms/cartState";

const itemsInCart = selector({
  key: "itemsInCart",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.length;
  },
});
itemsInCart;
