type Diameter = 225 | 250 | 280 | 315 | 355 | 400;
type Sdr = 11 | 13.6 | 17;

interface Bushing {
  id: number;
  name: string;
  type: "cast short" | "cast elongated" | "welded elongated";
  elongated: boolean;
  d: Diameter;
  sdr: Sdr;
  price: number;
}

//spigot - втулка под фланец
const bushings: Array<Bushing> = [
  {
    id: 0,
    name: "Втулка литая удлиненная под фланец (Бурт)",
    type: "cast elongated",
    elongated: true,
    d: 400,
    price: 100,
    sdr: 11,
  },
];

export function Carousel() {
  return <></>;
}
