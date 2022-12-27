import React from 'react'
import Category from './Category'
import { categories } from '../data'
import styled from 'styled-components'

const Container = styled.div`
 padding: 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
     {categories.map((item) => (
      <Category key={item.id} item={item}/>
     ))}
    </Container>
  )
}

export default Categories