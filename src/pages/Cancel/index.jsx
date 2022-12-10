import React from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router";
import { Container, Wrapper, OrderNotice, Button } from "./Cancel.styles";

const Cancel = () => {
  // const location = useLocation();
  // temporary use state.id as order id
  // const orderId = location.state.id;
  // console.log(location);
  return (
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
};

export default Cancel;
