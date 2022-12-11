import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;

  ${mobile({ margin: "10px", marginTop: "90px", flexDirection: "column" })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
