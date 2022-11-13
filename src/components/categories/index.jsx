import React from "react";
import CategoryItem from "../CategoryItem";
import { Container } from "./Categories.styles";

import { categories } from "../../data";

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;