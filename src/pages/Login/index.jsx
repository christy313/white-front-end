import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import Navbar from "../../components/Navbar/index";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  // Agreement,
  Button,
  ButtonWrapper,
  StyledLink,
  Error,
} from "./Login.styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error, currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    if (currentUser) navigate("/");
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        {error && <Error>Something went wrong!</Error>}
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonWrapper>
            <Button>LOGIN</Button>
            <StyledLink to="/register">Register</StyledLink>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
