import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Anoucement from "../components/Anoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h2`
  padding: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;
const Filter = styled.div``;

const FilterText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 10px;
  margin-left: 15px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Anoucement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option selected>Color</Option>
            <Option>yellow</Option>
            <Option>black</Option>
            <Option>white</Option>
            <Option>red</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option selected>Size</Option>
            <Option>l</Option>
            <Option>xl</Option>
            <Option>m</Option>
            <Option>s</Option>
            <Option>xs</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" selected>
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
