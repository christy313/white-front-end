import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  /* padding: 10px 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;

  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

// export const Container = styled.div`
//   height: 60px;

//   font-size: 20px;
//   font-weight: bold;

//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 12;
//   background-color: white;
//   left: 0;

//   ${mobile({ height: "50px" })}
// `;

// export const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   max-width: 1200px;
//   margin-left: auto;
//   margin-right: auto;

//   ${mobile({ padding: "10px 0px" })}
// `;
