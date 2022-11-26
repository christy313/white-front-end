import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
