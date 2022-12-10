import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteCartItem,
  clearCartItem,
  increaseCartItem,
  decreaseCartItem,
} from "../../redux/cartRedux";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Container,
  Wrapper,
  Bottom,
  Info,
  Summary,
  ProductDetail,
  Product,
  Image,
  PriceDetail,
  ProductName,
  // ProductId,
  // ProductColor,
  // ProductSize,
  Details,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  RemoveProduct,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./Cart.styles";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseItem = (product) => {
    dispatch(increaseCartItem(product));
  };

  const handleDecreaseItem = (product) => {
    dispatch(decreaseCartItem(product));
  };

  const handleRemove = (id) => {
    dispatch(deleteCartItem(id));
  };

  const handleClear = () => {
    dispatch(clearCartItem());
  };

  const handleCheckout = () => {
    fetch("http://localhost:8080/api/checkout/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: cart.total * 100,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>{product.title}</ProductName>
                    {/* <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId> */}
                    {/* <ProductColor color={product.color} /> */}
                    {/* <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize> */}
                    <PriceDetail>
                      <ProductAmountContainer>
                        <RemoveIcon
                          onClick={() => handleDecreaseItem(product)}
                          style={{ cursor: "pointer" }}
                        />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <AddIcon
                          onClick={() => handleIncreaseItem(product)}
                          style={{ cursor: "pointer" }}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        $ {product.price * product.quantity}
                      </ProductPrice>
                    </PriceDetail>
                    <RemoveProduct onClick={() => handleRemove(product._id)}>
                      Remove
                    </RemoveProduct>
                  </Details>
                </ProductDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

            <Button onClick={handleCheckout}>Checkout</Button>
            <Button onClick={handleClear}>clear all</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
