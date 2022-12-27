import {
  FavoriteBorder,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoContainer = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 1.4s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 285px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fafd;
  position: relative;

  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 75%;
  z-index: 1;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt="product" />
      <Circle />
      <InfoContainer>
        <SocialIcon>
          <FavoriteBorder />
        </SocialIcon>
        <Link to={`/products/${item._id}`}>
          <SocialIcon>
            <Search />
          </SocialIcon>
        </Link>
        <SocialIcon>
          <ShoppingCartOutlined />
        </SocialIcon>
      </InfoContainer>
    </Container>
  );
};

export default Product;
