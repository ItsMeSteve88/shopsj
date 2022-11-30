import React from "react";
import { useState, useEffect } from "react";
import "./ProductCard.css";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 20%;
  margin: 20px;
  padding: 30px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
  
  }
`;

const TitleBox = styled.div``;

const Title = styled.h2`
  color: black;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: black;
  font-size: 0.9rem;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin: 30px 0px 30px 0px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

const Button = styled.button`
  width: 40%;
  height: 50px;
  background-color: green;
  font-size: large;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: green;
    transform: scale(1.1);
    transition: 0.5s ease ;
    border: 1px solid green;
    border-radius: 5px;
  }
`;

// const Highlight = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: gray;
//   z-index: 3;
//   opacity: 0.1;

//   &:hover {
//     background-color: red;
//   }
// `;

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setProducts(jsonData);
  };
  return (
    <Container>
      {products.map((product) => {
        return (
          <>
            <Box>
              <TitleBox>
                <Title>{product.title}</Title>
                <Description>{product.description}</Description>
              </TitleBox>
              <Image src={product.image} alt={product.image}></Image>
              <PriceBox>
                <Price>£{product.price}</Price>
                <Button className="btn">Add to Cart</Button>
              </PriceBox>
            </Box>
          </>
        );
      })}
    </Container>
  );
};

export default ProductCard;
