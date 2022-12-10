import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;

  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
