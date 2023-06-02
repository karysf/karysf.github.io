import styled from "styled-components";
import { ItemCard } from "../ItemCard";
import { useRecoilValue } from "recoil";
import { productListState } from "../../recoil/atoms/productsState";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* column-gap: 10px; */
  row-gap: 15px;
`;

export function Carousel() {
  const productList = useRecoilValue(productListState);

  const items = productList.map((e) => <ItemCard key={e.id} item={e} />);

  return <Container>{items}</Container>;
}
