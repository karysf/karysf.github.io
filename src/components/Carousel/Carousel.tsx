import styled from "styled-components";
import { ItemCard } from "../ItemCard";

type Diameter = 225 | 250 | 280 | 315 | 355 | 400;
type Sdr = 11 | 13.6 | 17;

export interface Bushing {
  id: number;
  name: string;
  type: "cast short" | "cast elongated" | "welded elongated";
  elongated: boolean;
  d: Diameter;
  sdr: Sdr;
  price: number;
  amountInStock: number;
}

//spigot - втулка под фланец
const bushings: Array<Bushing> = [
  {
    id: 0,
    name: "Втулка литая удлиненная под фланец (Бурт)",
    type: "cast elongated",
    elongated: true,
    d: 400,
    price: 2600,
    sdr: 11,
    amountInStock: 16,
  },
  {
    id: 1,
    name: "Втулка литая удлиненная под фланец (Бурт)",
    type: "cast elongated",
    elongated: true,
    d: 225,
    price: 1346,
    sdr: 13.6,
    amountInStock: 7,
  },
  {
    id: 2,
    name: "Втулка литая короткая под фланец (Бурт)",
    type: "cast short",
    elongated: false,
    d: 250,
    price: 5555,
    sdr: 17,
    amountInStock: 100,
  },
];

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const items = bushings.map((e, i) => <ItemCard key={i} item={e} />);

export function Carousel() {
  return <Container>{items}</Container>;
}
