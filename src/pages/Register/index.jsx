import React, { useState } from "react";
// import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  // Agreement,
  Button,
  StyledLink,
} from "./Register.styles";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
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
        </Form>
        {/* <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement> */}
        <Button onSubmit={handleRegister}>Register</Button>
        <StyledLink to="/login">Login</StyledLink>
      </Wrapper>
    </Container>
  );
};

export default Register;
