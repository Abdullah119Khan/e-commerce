import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 width: 100%;
 height: 30px;
 background-color: teal;
 color: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
 font-weight: bold;
 font-size: 14px;
`

const Anoucement = () => {
  return (
    <Container>
     Super Deal! Free Shipping On order $50
    </Container>
  )
}

export default Anoucement