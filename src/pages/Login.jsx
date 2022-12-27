import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.form`
  width: 30%;
  background-color: #fff7f7;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 25%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 20px;
  font-weight: 300;
`;

const Button = styled.button`
  width: 40%;
  background-color: teal;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 19px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
`;

const ChangeLink = styled.span`
  margin: 10px 0px 0px 0px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Email..." />
          <Input placeholder="Password" />
          <Button>SIGIN</Button>
          <ChangeLink>DO NOT YOU REMEMBER THE PASSWORD?</ChangeLink>
          <Link to="/register">
            <ChangeLink>CREATE A NEW ACCOUNT</ChangeLink>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
