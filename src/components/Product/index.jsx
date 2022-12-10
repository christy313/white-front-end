import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Info, Icon } from "./Product.styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => (
  <Container>
    <Image src={item.img} />
    <Info>
      <Icon>
        <ShoppingCartOutlinedIcon />
      </Icon>
      <Icon>
        <Link to={`/product/${item._id}`}>
          <SearchOutlinedIcon />
        </Link>
      </Icon>
      {/* <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon> */}
    </Info>
  </Container>
);

export default Product;
