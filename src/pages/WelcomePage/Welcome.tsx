import styled from "styled-components";
// import wolf from "../../assets/Pose_0000.png";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icon-arrow-right.svg";
import { ReactComponent as Phone } from "../../assets/icon-phone-call.svg";
import pipes from "../../assets/pipes.png";

const WolfContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 25px;
  width: 50%;
`;

const BasicLink = styled(Link)`
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  width: 235px;
  border-radius: 19px;
  height: 100px;

  text-decoration: none;
  font-weight: 700;
  font-size: 22px;

  -webkit-box-shadow: -6px 7px 14px 2px rgba(37, 108, 33, 0.2);
  -moz-box-shadow: -6px 7px 14px 2px rgba(37, 108, 33, 0.2);
  box-shadow: -6px 7px 14px 2px rgba(37, 108, 33, 0.2);
`;

const StyledLink = styled(BasicLink)`
  background-color: #1ad079;
  color: white;

  &:hover {
    background-color: #0e7e48c0;
    color: white;
  }
`;

const StyledLink2 = styled(BasicLink)`
  border: 1.5px solid #1ad079;
  color: #1ad079;

  &:hover {
    background-color: #d1e6dc89;
    color: #1ad079;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  margin-top: 20px;
`;

const Paragraph = styled.p`
  text-align: end;
  font-size: 42px;
  font-family: "GolosText-Bold";
  margin-block-start: 0;
  margin-block-end: 0;
`;

const ArrowStyled = styled(Arrow)`
  width: 40px;
  height: 40px;
  fill: #fff;
  align-self: flex-end;
  opacity: 0;
  transition: opacity 0.1s ease-in;

  ${StyledLink}:hover & {
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }
`;

const PhoneStyled = styled(Phone)`
  width: 50px;
  height: 50px;
  fill: #1ad079;
  align-self: flex-end;
  opacity: 0;
  transition: opacity 0.1s ease-in;

  ${StyledLink2}:hover & {
    opacity: 1;
    transition: opacity 0.1s ease-in;
  }
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export function Welcome() {
  return (
    <WolfContainer>
      {/* <img src={wolf} alt="приветственный волчара" width={400} height={400} /> */}
      <CenterDiv>
        <div>
          <img src={pipes} alt="Склад труб" />
        </div>

        <RightContainer>
          <div>
            <Paragraph>Завод по производству полиэтиленовых изделий</Paragraph>
          </div>

          {/* <img src={pipes} alt="Склад труб" /> */}
          <LinksContainer>
            <StyledLink to="/catalog">
              Посмотреть каталог
              <ArrowStyled />
            </StyledLink>
            <StyledLink2 to="/contacts">
              Связаться с менеджерами
              <PhoneStyled />
            </StyledLink2>
          </LinksContainer>
        </RightContainer>
      </CenterDiv>
    </WolfContainer>
  );
}
