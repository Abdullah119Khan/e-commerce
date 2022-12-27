import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  Phone,
  Room,
  Mail,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h3`
  font-size: 35px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  color: #555;
`;

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #${(props) => props.color};
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MaLak KhAns</Logo>
        <Desc>
          My name is AB MaLak KhAns. i am a full Stack Web Engineer My name is
          AB MaLak KhAns. i am a full Stack Web Engineer, My name is AB MaLak
          KhAns. i am a full Stack Web Engineer
        </Desc>
        <SocialIconContainer>
          <SocialIcon color="3B5999">
            {" "}
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            {" "}
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            {" "}
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="E4405F">
            {" "}
            <Instagram />
          </SocialIcon>
        </SocialIconContainer>
      </Left>
      <Center>
        <Title>Usefull Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Sirsinai Tehsil Kabal Swat
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +9234296669617
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> kab6611@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
