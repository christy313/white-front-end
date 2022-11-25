import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/apiCalls";

import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Center,
  SearchContainer,
  Input,
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
            <Logo>gap</Logo>
          </StyledLink>
          <StyledLink>Women</StyledLink>
          <StyledLink>Men</StyledLink>
          <StyledLink>Kids</StyledLink>
        </Left>
        {/* <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon
              style={{ color: "gray", fontSize: "16", textAlign: "flex-end" }}
            />
          </SearchContainer>
        </Center> */}
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

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
