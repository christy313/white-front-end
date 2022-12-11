import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 60vh;
  position: relative;
  min-width: 280px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  ${mobile({ margin: "10px" })}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;

  ${mobile({ height: "40vh" })}
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 20px;
  transition: all 0.5 ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
