import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 8vh;
  font-size: 20px;
  font-weight: bold;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 12;
  background-color: #f4f4f4;
  left: 0;

  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;

  align-items: center;
  display: flex;
  height: 100%;
  z-index: 1;
`;

export const Logo = styled.img`
  height: 60px;
  ${mobile({ fontSize: "24px" })};
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

export const MenuItem = styled.div`
  cursor: pointer;
  &:hover {
    color: teal;
    transform: scale(1.05);
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  position: relative;
  color: #000;
  padding: 0.75rem;
  display: inline-block;

  &:hover {
    color: teal;
    transform: scale(1.05);
  }
`;
