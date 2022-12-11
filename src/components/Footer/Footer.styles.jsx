import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background-color: #f4f4f4;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 12;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

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
