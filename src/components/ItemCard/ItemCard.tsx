import styled from "styled-components";
import { Bushing } from "../Carousel/Carousel";
import image from "../../assets/d315-sdr11-photo.png";
import model from "../../assets/d315-sdr11-model.png";
import { ReactComponent as CartICon } from "../../assets/icon-cart.svg";
import { ReactComponent as RubleIcon } from "../../assets/icon-ruble.svg";

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

  p {
    color: #1ad079;
    font-size: 24px;
    margin: 0;
  }
`;

const InStock = styled.div`
  border-top: 1px solid #000;
  margin-top: 5px;
`;

const HeadingDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
`;

const Characteristics = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Characteristic = styled.p`
  font-size: 16px;
  margin: 0;
`;
export function ItemCard({ item }: Props) {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt="" width={150} height={150} />
        <img src={model} alt="" width={150} height={150} />
      </ImageContainer>
      <HeadingDiv>
        <Name> {item.name}</Name>
        <Price>
          <p>{item.price}</p>
          <RubleIcon width={20} height={20} fill="#1ad079" />
        </Price>
      </HeadingDiv>

      <Characteristics>
        <Characteristic>D{item.d} </Characteristic>
        <Characteristic>SDR{item.sdr}</Characteristic>
      </Characteristics>

      <CartICon width={20} height={20} />
      <InStock>В наличии {item.amountInStock} шт.</InStock>
    </CardContainer>
  );
}
