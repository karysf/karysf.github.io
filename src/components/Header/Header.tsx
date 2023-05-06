import styled from "styled-components";

import { NavBar } from "../NavBar/NavBar";

const Navigation = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 5.56rem;
  padding: 0 3.33rem;
  margin-top: 1.11rem;
  max-width: 1408px;
  box-shadow: 0 0 40px 40px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 0.69rem;
`;

export function Header() {
  return (
    <HeaderDiv>
      <Navigation>
        <NavBar />
      </Navigation>
    </HeaderDiv>
  );
}
