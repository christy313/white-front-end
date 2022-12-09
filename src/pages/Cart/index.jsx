import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import StripeCheckout from "react-stripe-checkout";

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
  // Title,
  // Top,
  Bottom,
  // TopButton,
  // TopTexts,
  // TopText,
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

const stripeKey = process.env.REACT_APP_STRIPE;

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

const Cart = () => {
  // const [stripeToken, setStripeToken] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const cart = useSelector((state) => state.cart);
  let products = cart.products || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8080/api/checkout/payment", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           // Authorization: `Bearer ${TOKEN}`,
  //         },
  //         body: JSON.stringify({
  //           tokenId: stripeToken.id,
  //           amount: cart.total * 100,
  //         }),
  //       });
  //       const data = await res.json();
  //       navigate("/success", { state: data });
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, navigate, cart.total]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
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

  const handleIncreaseItem = (product) => {
    dispatch(increaseCartItem(product));
  };

  const handleDecreaseItem = (product) => {
    dispatch(decreaseCartItem(product));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        {/* <Title>Your bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <StripeCheckout
            name="gap"
            image="https://avatars.githubusercontent.com/u/50518097?v=4"
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={stripeKey}
          >
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </StripeCheckout>
        </Top> */}
        <Bottom>
          <Info>
            {products.map((product) => (
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

            {/* <StripeCheckout
              name="gap"
              image="https://avatars.githubusercontent.com/u/50518097?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={stripeKey}
            >
              <Button>Checkout Now</Button>
            </StripeCheckout> */}
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
