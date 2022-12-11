import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;

  ${mobile({ flexDirection: "column", marginTop: "20px" })}
  ${tablet({ flexDirection: "column" })}
`;

export const Info = styled.div`
  margin-top: 80px;
  flex: 3;
`;

export const Summary = styled.div`
  flex: 1;
  border-radius: 20px;
  padding: 40px;
  height: 400px;
  min-width: 360px;
  position: sticky;
  top: 120px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  margin-top: 100px;

  ${mobile({
    margin: "20px",
    marginBottom: "100px",
    minWidth: "280px",
    fontSize: "12px",
  })}
  ${tablet({ margin: "20px 0", maxWidth: "360px", marginBottom: "100px" })}
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column", fontSize: "12px" })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ display: "block" })}
`;

export const Image = styled.img`
  width: 320px;
  height: 80%;
  object-fit: cover;
  /* margin-bottom: 20px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 20px;
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  margin: 20px;
  align-items: center;
  /* justify-content: space-between; */
  /* flex-direction: column; */
  /* ${mobile({ display: "block" })} */
`;

export const Details = styled.div`
  padding: 20px;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-around; */
  ${mobile({ display: "block" })}
`;

export const ProductName = styled.div`
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
`;

export const ProductId = styled.div`
  margin: 20px;
`;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.div``;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  ${mobile({ margin: "0" })}
`;

export const ProductAmount = styled.div`
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;

  ${mobile({ margin: "5px 15px" })}
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-left: 30px;

  ${mobile({ fontSize: "24px" })}
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 15px;
`;

export const RemoveProduct = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px;
  color: teal;
  margin: 20px;
  cursor: pointer;
  width: 80px;

  ${mobile({ margin: "5px 15px" })}
`;
