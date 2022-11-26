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
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password || !email) return setErrorMessage(true);
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
            <Button onClick={handleRegister} disabled={isFetching}>
              Register
            </Button>
            <StyledLink to="/login">Login</StyledLink>
          </ButtonWrapper>
        </Form>
        {error && errorMessage && <Error>Something went wrong!</Error>}

        {/* <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement> */}
      </Wrapper>
    </Container>
  );
};

export default Register;
