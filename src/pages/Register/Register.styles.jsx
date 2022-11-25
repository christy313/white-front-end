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
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 320px;
  padding: 20px;
  background-color: lightblue;
  text-align: center;

  ${mobile({ width: "80%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  min-width: 200px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  display: inline-block;
  justify-content: center;
`;

// export const Agreement = styled.div`
//   font-size: 12px;
//   margin: 20px 0px;
//   text-align: left;
// `;

export const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  margin: 5px 10px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
`;
