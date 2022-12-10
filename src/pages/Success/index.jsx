import React from "react";
import { Link } from "react-router-dom";
import { Container, Wrapper, OrderNotice, Button } from "./Success.styles";

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <OrderNotice>Order has been created successfully.</OrderNotice>
        <Link to="/">
          <Button>Homepage</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
