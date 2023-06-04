import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components'

const Container= styled.div`
  display : flex;
  align-items : center;
  padding :20px;
  flex-wrap :wrap ;
  justify-content : space-between;
`

const Products = () => {
  return (
    <div>
      <Container>
        {popularProducts.map(item=>(
          <Product item={item} key={item.id}/>
        ))}
      </Container>
    </div>
  )
}
export default Products