import styled from "styled-components";
import icon from "./factory.png"
const Img = styled.img`
width:50px;
height: 50px;`
export const FactoryIcon = () => {
    return (
        <Img src={icon} alt="" />
    );
  };