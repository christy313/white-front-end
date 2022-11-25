import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 12;
  background-color: white;
  left: 0;

  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
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

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 24px;
  padding: 3px;
`;

export const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({ width: "50px" })}
`;

export const Center = styled.div`
  flex: 1;
  /* display: flex; */
  align-items: center;
`;

export const Logo = styled.div`
  font-weight: bold;

  ${mobile({ fontSize: "24px" })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 24px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  position: relative;
  color: #000;
  padding: 1rem 0.75rem;
  display: inline-block;
`;
