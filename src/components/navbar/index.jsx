import React from "react";
import { useSelector } from "react-redux";
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
} from "./Navbar.styles";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>gap</Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon
              style={{ color: "gray", fontSize: "16", textAlign: "flex-end" }}
            />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
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
