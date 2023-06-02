import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../recoil/atoms/cartState";
import { productListState } from "../../recoil/atoms/productsState";
export function Cart() {
  const cart = useRecoilValue(cartState);
  const products = useRecoilValue(productListState);
  const tots = useRecoilValue(cartTotal);
  const itemsInCart = cart.map((item) => (
    <li>
      {products[item.id].name} - {products[item.id].price} Х {item.quantity}
    </li>
  ));
  return (
    <>
      <h1>Корзинка-лукошко</h1>
      <ul>{itemsInCart}</ul>
      <h4>Итого с вас деняк {tots}</h4>
    </>
  );
}
