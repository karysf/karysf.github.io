import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../recoil/atoms/cartState";
import { ReactComponent as RubleIcon } from "../../assets/icon-ruble.svg";
import { productListState } from "../../recoil/atoms/productsState";
import axios from "axios";
import styled from "styled-components";
import { useMemo } from "react";
import { ClientContactsForm } from "../../components/ClientContactsForm/ClientContactsForm";
import { Card } from "primereact/card";
import { ItemControlButtons } from "../../components/ItemCard/ItemCard";
import styles from "./Cart.module.css";
const Price = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  background-color: #badfaf78;
  border-radius: 5%;
  padding: 2px 5px;

  p {
    color: #1ad079;
    font-size: 24px;
    margin: 0;
  }
`;
export function Cart() {
  const cart = useRecoilValue(cartState);
  const products = useRecoilValue(productListState);
  const tots = useRecoilValue(cartTotal);

  const itemsInCart = cart.map((item, i) => {
    const cost = products[item.id].price * item.quantity;
    return item.quantity > 0 ? (
      <Card key={item.id} className={styles.card}>
        <div className={styles.item_row}>
          <div>
            {products[item.id].name} - D{products[item.id].d}/SDR
            {products[item.id].sdr}
          </div>

          <ItemControlButtons key={i} item={item.product} />
          <div className={styles.price_container}>
            <Price>
              <p>{cost}</p>
              <RubleIcon width={20} height={20} fill="#1ad079" />
            </Price>
            <p>{products[item.id].price}/шт</p>
          </div>
        </div>
      </Card>
    ) : null;
  });

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
      // await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      //   chat_id: 1020171391,
      //   text: text,
      // });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Корзина</h1>
      <ul>{itemsInCart}</ul>
      <h4>Итого к оплате: {tots}</h4>
      <ClientContactsForm />
      <button onClick={handleClick}>ok</button>
    </>
  );
}
