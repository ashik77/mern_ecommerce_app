import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/v1/products?category=${category}`
            : "http://localhost:5000/api/v1/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((first, second) => first.createdAt - second.createdAt)
      );
    } else if (sort === "lowest") {
      setfilteredProducts((prev) =>
        [...prev].sort((first, second) => first.prices - second.prices)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((first, second) => second.price - first.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
