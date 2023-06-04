import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``
const Title = styled.h1`
    margin : 20px;
`
const FilterContainer = styled.div`
    display : flex;
    justify-content : space-between;
`
const Filter = styled.div`
    display : flex;
    align-items : center;
    margin : 20px;
`
const FilterText = styled.div`
    font-size : 20px;
    font-weight : 300;
`
const Select = styled.select`
    padding : 10px;
    margin-left : 20px;
`
const Option =styled.option``


function ProductList() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Computers</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Product :</FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
        </Filter>
        <Filter><FilterText>Sort Product :</FilterText>
            <Select>
                <Option disabled selected>
                    Newest
                </Option>
                <Option>Price (asc)</Option>
                <Option>Price (dsc)</Option>
                <Option>Top Rated</Option>
                <Option>Featured</Option>
                <Option>Latest Arrival</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
