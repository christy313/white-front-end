import React from "react";
import Navbar from "../../components/Navbar/index";
import Notice from "../../components/Notice/index";
import Products from "../../components/Products/index";
import Newsletter from "../../components/Newsletter/index";
import Footer from "../../components/Footer/index";

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option
} from "./ProductsList.styles";

const ProductsList = () => {
  return (
    <Container>
      <Notice />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductsList;
