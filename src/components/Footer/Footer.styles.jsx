import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background-color: #f4f4f4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({ flexDirection: "column", textAlign: "center", fontSize: "12px" })}
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const SocialContainer = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "row",
    marginTop: "10px",
    justifyContent: "center",
  })}
`;

export const SocialIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  &:hover {
    transform: scale(1.2);
  }
`;
