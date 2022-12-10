import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/apiCalls";

import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem,
  StyledLink,
} from "./Navbar.styles";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser(dispatch);
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <StyledLink to="/">
            <Logo>Gap</Logo>
          </StyledLink>
          <StyledLink to="/products/women">Women</StyledLink>
          <StyledLink to="/products/coat">Men</StyledLink>
          <StyledLink to="/products/jeans">Kids</StyledLink>
        </Left>

        <Right>
          {user ? (
            <StyledLink to="/" onClick={handleLogout}>
              <MenuItem>Logout</MenuItem>
            </StyledLink>
          ) : (
            <>
              <StyledLink to="/register">
                <MenuItem>Register</MenuItem>
              </StyledLink>

              <StyledLink to="/login">
                <MenuItem>Login</MenuItem>
              </StyledLink>
            </>
          )}

          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
