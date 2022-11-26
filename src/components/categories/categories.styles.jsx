import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
