import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 align-items: center;
 position: relative;
 overflow: hidden;
`

const Arrow = styled.div`
 width: 50px;
 height: 50px;
 background-color: #f7f7f7f7;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 left: ${(props) => props.direction === 'left' && '10px'};
 right: ${(props) => props.direction === 'right' && '10px'};
 cursor: pointer;
 z-index: 1;
`
const Wrapper = styled.div`
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 transition: all 1.6s ease;
 transform: translateX(${(props) => props.slideIndex * - 100}vw);
`
const Slide = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color: #${(props) => props.bg};
`
const ImageContainer = styled.div`
 flex: 1;
 height: 100%;
`
const Img = styled.img`
 width: 100%;
`
const InfoContainer = styled.div`
 flex: 1;
`
const Title = styled.h1`
 font-size: 70px;
`
const Desc = styled.span`
 font-size: 16px;
 letter-spacing: 3px;
 margin: 30px 0px;
`
const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if(direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
     <Arrow direction='left' onClick={() => handleClick('Left')}>
      <ArrowLeftOutlined />
     </Arrow>
     <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item) => (
        <Slide key={item.id} bg={item.bg}>
         <ImageContainer>
          <Img src={item.img} alt='slider'/>
         </ImageContainer>
         <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc><br/>
          <Button>SHOP NOW</Button>
          </InfoContainer>
          </Slide>
      ))}
     </Wrapper>
     <Arrow direction='right' onClick={() => handleClick('right')}>
      <ArrowRightOutlined />
     </Arrow>
    </Container>
  )
}

export default Slider