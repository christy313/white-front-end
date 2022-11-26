import React from "react";
import CategoryItem from "../CategoryItem";
import { Container, Wrapper } from "./Categories.styles";

import { categories } from "../../data";

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
