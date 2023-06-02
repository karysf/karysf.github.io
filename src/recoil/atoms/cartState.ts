import { atom, selector } from "recoil";
import { Bushing } from "./productsState";
interface CartItem {
  id: number;
  product: Bushing;
  quantity: number;
}
export const cartState = atom<CartItem[]>({
  key: "cart",
  default: [],
});

export const addToCart = (
  cart: CartItem[],
  item: Bushing,
  quantity?: number
) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((x) => x.id === item.id);
  // Increase quantity if existing
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: quantity ? quantity : cart[foundIndex].quantity + 1,
    };
    return newCart;
  }

  newCart.push({
    id: item.id,
    product: item,
    quantity: quantity ? quantity : 1,
  });
  return newCart;
};

export const removeFromCart = (cart: CartItem[], item: Bushing) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((x) => x.id === item.id);
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity - 1,
    };
    return newCart;
  }
  return newCart;
};

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  },
});
