import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrap, WrapItem } from "@chakra-ui/react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  };

  const getProductsByCategory = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return await response.json();
  };

  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category === undefined) {
      getProducts().then((data) => setProducts(data));
    } else {
      getProductsByCategory().then((data) => setProducts(data));
    }
  }, [category]);

  return (
    <>
      <Wrap>
        {products.map((prod) => {
          return (
            <WrapItem key={prod.id}>
              <ItemList
                id={prod.id}
                title={prod.title}
                image={prod.image}
                category={prod.category}
                count={prod.rating.count}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
};

export default ItemListContainer;
