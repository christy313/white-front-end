import React from "react";
import CategoryItem from "../categoryItem/categoryItem.component";
import { Container } from "./categories.styles";

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
