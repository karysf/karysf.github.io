import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import styled from "styled-components";

const RootContainer = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    115deg,
    rgb(47 245 77 / 32%),
    rgb(12 159 224 / 16%),
    rgb(253 253 253 / 22%),
    rgb(253 253 253 / 22%),
    rgb(253 253 253 / 22%)
  );
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
`;

export function Layout() {
  return (
    <RootContainer>
      <ContentContainer>
        <Header />
        <main>
          <Outlet />
        </main>
      </ContentContainer>
    </RootContainer>
  );
}
