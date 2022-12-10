import React from "react";
import { Link } from "react-router-dom";
import { Container, Wrapper, OrderNotice, Button } from "./Cancel.styles";

const Cancel = () => (
  <Container>
    <Wrapper>
      <OrderNotice>
        Sorry to see you cancel the order, wanna go back to homepage?
      </OrderNotice>
      <Link to="/">
        <Button>Homepage</Button>
      </Link>
    </Wrapper>
  </Container>
);

export default Cancel;
