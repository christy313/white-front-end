import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background-color: #f4f4f4;
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
`;

// export const Left = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
// `;

// export const Logo = styled.h1``;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const Right = styled.div`
  display: flex;
  /* flex: 1; */
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;
