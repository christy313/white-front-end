import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { Container, Wrapper, OrderNotice, Button } from "./Success.styles";

const Success = () => {
  const location = useLocation();
  // temporary use state.id as order id
  const orderId = location.state.id;
  console.log(location);
  return (
    <Container>
      <Wrapper>
        <OrderNotice>
          Order has been created successfully. Your order number is {orderId}
        </OrderNotice>
        <Link to="/">
          <Button>Homepage</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Success;
