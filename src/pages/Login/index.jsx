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
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) return setErrorMessage(true);
    login(dispatch, { username, password });
    navigate("/");
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonWrapper>
            <Button onClick={handleLogin} disabled={isFetching}>
              LOGIN
            </Button>
            <StyledLink to="/register">Register</StyledLink>
          </ButtonWrapper>
          {error && errorMessage && <Error>Something went wrong!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
