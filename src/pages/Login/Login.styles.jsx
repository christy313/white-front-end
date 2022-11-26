import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png");

  background-size: auto;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 320px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  border: 1px solid teal;

  ${mobile({ width: "90%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  min-width: 200px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  display: inline-block;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid teal;
`;

// export const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 20px;

  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(Link)`
  margin: 5px 10px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  color: teal;
`;

export const Error = styled.h3`
  color: red;
`;
