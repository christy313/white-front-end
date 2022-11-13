import React from "react";

import Navbar from "../../components/Navbar";
import Notice from "../../components/Notice";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button
} from "./SingleProduct.styles";

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Notice />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png" />
        </ImgContainer>

        <InfoContainer>
          <Title>I am title</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            enim, facere ut eius accusantium maxime sint. Ut quisquam tenetur
            accusamus.
          </Desc>
          <Price>$200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
