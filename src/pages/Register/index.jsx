import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  Error,
} from "./Register.styles";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error, currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    RegisterUser(dispatch, { username, email, password });
    if (currentUser) navigate("/");
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        {error && <Error>Something went wrong!</Error>}
        <Title>Register</Title>
        <Form onSubmit={handleRegister}>
          <label htmlFor="username">Username:</label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            placeholder="username"
          />

          <label htmlFor="email">Email:</label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="email"
            required
          />

          <label htmlFor="password">Password:</label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="password"
          />
          <ButtonWrapper>
            <Button>Register</Button>
            <StyledLink to="/login">Login</StyledLink>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
