import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 width: 100%;
 height: 60vh;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 background-color: #fcf1ed;
`
const Title = styled.h2`
 font-size: 70px;
 margin-bottom: 20px;
`
const Desc = styled.span`
 font-size: 24px;
 font-weight: 300;
`
const InputContainer = styled.div`
 width: 40%;
 height: 40px;
 border: 1px solid lightgray;
 background-color: #fff7f7;
 display: flex;
 justify-content: space-between;
 border-radius: 5px 5px 5px 5px;
`

const Input = styled.input`
 flex: 8;
 border: none;
 outline: none;
 font-size: 18px;
 margin-left: 10px; 
 color: #555;
`

const Button = styled.button`
 flex: 1;
 background-color: teal;
 color: white;
 cursor: pointer;
 border: none;
 border-radius: 0px 5px 5px 0px; 
`

const Newsletter = () => {
  return (
    <Container>
     <Title>Newsletter</Title>
     <Desc>AB MaLak KhAns Software Engineer...</Desc>
     <InputContainer>
      <Input placeholder='Enter Your Email...'/>
      <Button>
        <Send />
      </Button>
     </InputContainer>
    </Container>
  )
}

export default Newsletter