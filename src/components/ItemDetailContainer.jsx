import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  };

  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProduct().then((data) => setProduct(data));
  }, []);

  return (
    <>
      <ItemDetail
        title={product.title}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    </>
  );
};

export default ItemDetailContainer;
