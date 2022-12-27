import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  display: flex;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  background-color: #fff7f7;
  color: #555;
  border: none;
  cursor: pointer;
`;

const Category = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt="category" />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Link to={`/productList/${item.cat}`}>
          <Button>SHOP NOW</Button>
        </Link>
      </InfoContainer>
    </Container>
  );
};

export default Category;
