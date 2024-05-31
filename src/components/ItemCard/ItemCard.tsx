/* eslint-disable no-debugger */
import styled from "styled-components";
import image from "../../assets/d315-sdr11-photo.png";
import { ReactComponent as CartICon } from "../../assets/icon-cart.svg";
import { ReactComponent as RubleIcon } from "../../assets/icon-ruble.svg";
import { useCallback, useMemo, useState } from "react";
import {
  addToCart,
  cartState,
  removeFromCart,
} from "../../recoil/atoms/cartState";

import styles from "./ItemCard.module.css";
import { useRecoilState } from "recoil";
import { Bushing } from "../../recoil/atoms/productsState";
interface Props {
  item: Bushing;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5%;
  max-width: 250px;

  padding: 5px;

  -webkit-box-shadow: -8px 7px 18px -3px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -8px 7px 18px -3px rgba(34, 60, 80, 0.2);
  box-shadow: -8px 7px 18px -3px rgba(34, 60, 80, 0.2);
`;

const ImageContainer = styled.div`
  > * {
    transition: opacity 0.5s ease-in-out;

    &:first-child {
      width: 150px;
      height: 150px;
      opacity: 1;
    }

    &:last-child {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }

  &:hover > * {
    transition: opacity 0.5s ease-in-out;

    &:first-child {
      width: 0;
      height: 0;
      opacity: 0;
    }

    &:last-child {
      width: 150px;
      height: 150px;
      opacity: 1;
    }
  }
`;

const Name = styled.p`
  text-align: start;
  max-width: 60%;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  background-color: #badfaf78;
  border-radius: 5%;
  padding: 2px 5px;
`;

// const InStock = styled.div`
//   border-top: 1px solid #000;
//   margin-top: 5px;
// `;

const HeadingDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
`;

const Characteristics = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;
const Characteristic = styled.p`
  font-size: 16px;
  margin: 0;
`;
const CartButton = styled(CartICon)`
  width: 20px;
  height: 20px;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

function getModelImgSrc(sdr: number, d: number) {
  const res = `src/assets/pipe-models/d${d}-sdr${sdr}-long-model.png.png`;
  return res;
}

export const ItemControlButtons = ({ item }: Props) => {
  const [cart, setCart] = useRecoilState(cartState);
  const addedAmount = useMemo(
    () => cart.find((el) => el.id === item.id)?.quantity || 0,
    [cart, item.id]
  );

  const handleAddToCart = useCallback(
    (product: Bushing) => {
      const newCart = addToCart(cart, product);
      setCart(newCart);
    },
    [cart, setCart]
  );

  const handleAddFromInput = (product: Bushing, quantity: number) => {
    const newCart = addToCart(cart, product, quantity);
    setCart(newCart);
  };

  const handleRemoveFromCart = useCallback(
    (product: Bushing) => {
      const newCart = removeFromCart(cart, product);
      setCart(newCart);
    },
    [cart, setCart]
  );
  const [value, setValue] = useState<string>(`${addedAmount}`);

  const addItem = useCallback(() => {
    setValue((prev) => `${Number(prev) + 1}`);
    handleAddToCart(item);
  }, [handleAddToCart, item]);

  const addFromInput = (quantity: string) => {
    handleAddFromInput(item, Number(quantity));
  };

  const deleteITem = useCallback(() => {
    if (addedAmount >= 0) {
      setValue((prev) => `${Number(prev) - 1}`);

      handleRemoveFromCart(item);
    }
  }, [addedAmount, handleRemoveFromCart, item]);

  return (
    <div className={styles.add_to_cart_button_container}>
      {addedAmount === 0 && (
        <CartButton onClick={addItem} className={styles.ak} />
      )}
      {addedAmount > 0 && (
        <>
          <button onClick={deleteITem}>-</button>
          <input
            className={styles.amountInput}
            type="number"
            value={value}
            min="0"
            max="1000"
            onChange={(e) => {
              setValue(e.target.value);

              addFromInput(e.target.value);
            }}
          />
          <button onClick={addItem}>+</button>
        </>
      )}
    </div>
  );
};
export function ItemCard({ item }: Props) {
  const modelSrc = getModelImgSrc(item.sdr, item.d);
  // const modelAlt = `Чертеж втулки d${item.d} sdr${item.sdr}`;

  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt="" width={150} height={150} />
        <img
          src={modelSrc}
          // alt={modelAlt}
          width={150}
          height={150}
        />
      </ImageContainer>
      <HeadingDiv>
        <Name> {item.name}</Name>
        <Price>
          <p className={styles.price}>{item.price}</p>
          <RubleIcon width={20} height={20} fill="#1ad079" />
          <p className={styles.price_hint}> шт</p>
        </Price>
      </HeadingDiv>
      <Characteristics>
        <Characteristic>D{item.d} </Characteristic>
        <Characteristic>SDR{item.sdr}</Characteristic>
      </Characteristics>
      <ItemControlButtons item={item} />
      {/* <InStock>В наличии {item.amountInStock} шт.</InStock> */}
    </CardContainer>
  );
}
