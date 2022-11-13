import React from "react";

import Product from "../Product/index";
import { popularProducts } from "../../data";

import { Container } from "./Products.styles";

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
