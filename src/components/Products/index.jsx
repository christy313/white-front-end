import React, { useState, useEffect } from "react";
import Product from "../Product/index";
import { Container, Wrapper } from "./Products.styles";
// import { popularProducts } from "../../data";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          category
            ? `http://localhost:8080/api/products?category=${category}`
            : `http://localhost:8080/api/products`
        );

        const productsData = await res.json();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      <Wrapper>
        {category
          ? filteredProducts.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item._id} />)}
      </Wrapper>
    </Container>
  );
};

export default Products;
