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
  background-size: contain;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 320px;
  padding: 50px;
  margin-top: 30px;
  background-color: white;
  border-radius: 20px;
  text-align: center;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  ${mobile({ width: "90%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > label {
    margin: 14px;
  }
`;

export const Input = styled.input`
  min-width: 200px;
  padding: 10px;
  display: inline-block;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid teal;
`;

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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const StyledLink = styled(Link)`
  margin: 5px 10px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  color: teal;
`;

export const Error = styled.h3`
  color: #d81159;
  padding: 10px;
`;
