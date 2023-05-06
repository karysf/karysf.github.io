import styled from "styled-components";
import { Carousel } from "../../components/Carousel/Carousel";
import { ItemCard } from "../../components/ItemCard";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
export function Catalog() {
  return (
    <Container>
      <Carousel />
    </Container>
  );
}
