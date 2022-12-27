import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Anoucement from "../components/Anoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Form = styled.form`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 30px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  border: 1px solid lightgray;
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: teal;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15px;
  border-radius: 5px;
`;

const CheckOutPrice = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Navbar />
      <Anoucement />
      <Form>
        <Label>Your Name</Label>
        <Input />
        <Label>Your Email</Label>
        <Input />
        <Label>Your Address</Label>
        <Input />
        <Label>Your Total</Label>
        <Input value={cart.total} />
        <Button>Buy Now</Button>
      </Form>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default CheckOutPrice;
