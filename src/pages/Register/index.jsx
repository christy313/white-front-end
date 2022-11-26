import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../redux/apiCalls";

import Navbar from "../../components/Navbar/index";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  // Agreement,
  ButtonWrapper,
  Button,
  StyledLink,
} from "./Register.styles";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    RegisterUser(dispatch, { username, email, password });
    navigate("/");
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <ButtonWrapper>
            <Button onClick={handleRegister}>Register</Button>
            <StyledLink to="/login">Login</StyledLink>
          </ButtonWrapper>
        </Form>
        {/* <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement> */}
      </Wrapper>
    </Container>
  );
};

export default Register;
