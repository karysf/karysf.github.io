import { Link } from "react-router-dom";
import { FactoryIcon } from "../FactoryIcon/FactoryIcon";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`;
const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  gap: 10px;
`;
const Li = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const HomeLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  &:hover {
    color: black;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const PhoneNumber = styled.a`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  width: max-content;
  color: #213547;
`;
const Mail = styled.a`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #213547;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: end;
`;

const LogoHeading = styled.h2`
  margin: 0;
  margin-left: 5px;
  font-family: GolosText-Bold;
`;
const links = [
  {
    label: "Каталог",
    to: "/catalog",
  },
  {
    label: "Доставка",
    to: "/delivery",
  },
  {
    label: "Оплата",
    to: "/payment",
  },
  {
    label: "Контакты",
    to: "/contacts",
  },
];

const list = links.map(({ label, to }) => {
  return (
    <Li to={to}>
      {label}
      {/* <Link to={to} >{label}</Link> */}
    </Li>
  );
});
export function NavBar() {
  return (
    <Container>
      <HomeLink to="/">
        <LogoDiv>
          <FactoryIcon />
          <LogoHeading>Пайпфитинг</LogoHeading>
        </LogoDiv>
      </HomeLink>

      <List>{list}</List>
      <Contacts>
        <PhoneNumber href="tel:+79172726123">+7 (917) 27-26-123</PhoneNumber>
        <Mail href="mailto:PipeFiting@mail.ru">PipeFiting@mail.ru</Mail>
      </Contacts>
    </Container>
  );
}
