import React from "react";
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
  MenuItem
} from "./navbar.styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>gap</Logo>
        </Left>
        <Center>
          {/* <Language>En</Language> */}
          <SearchContainer>
            <Input />
            <SearchIcon
              style={{ color: "gray", fontSize: "16", textAlign: "flex-end" }}
            />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
