import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../recoil/atoms/cartState";
import { productListState } from "../../recoil/atoms/productsState";
import axios from "axios";
import { useMemo } from "react";
export function Cart() {
  const cart = useRecoilValue(cartState);
  const products = useRecoilValue(productListState);
  const tots = useRecoilValue(cartTotal);
  const itemsInCart = cart.map((item) => (
    <li>
      {products[item.id].name} - {products[item.id].price} Х {item.quantity}
    </li>
  ));

  // await axios.get(`https://api.telegram.org/bot${botToken}/getUpdates`);

  const text = useMemo(() => {
    const list = cart
      .map((item, i) => {
        const product = products[item.id];
        return `${i + 1}. ${product.name} D${product.d} SDR${product.sdr} — ${
          product.price
        } Х ${item.quantity}шт`;
      })
      .join("\n");
    return `Ура, новая заявОчка:\n${list}`;
  }, [cart, products]);

  const handleClick = async () => {
    const botToken = "5984371784:AAGJp9FcTOldC2dCRdpXxA_CFER6y2Ql-c4";
    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: 344505911,
        text: text,
      });
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: 1020171391,
        text: text,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Корзинка-лукошко</h1>
      <ul>{itemsInCart}</ul>
      <h4>Итого с вас деняк {tots}</h4>
      <button onClick={handleClick}>ok</button>
    </>
  );
}
