import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``
const Wrapper = styled.div`
    padding : 50px;
    display : flex;
`
const ImgContainer = styled.div`
    flex : 1;
    background-color: rgb(246, 246, 246);
   
`
const Image = styled.img`
    width : 100%;
    height : 70vh;
`
const InfoContainer = styled.div`
    flex : 1;
    padding : 0px 50px;
`
const Title = styled.h1`
    font-weight : 100;
`
const Desc = styled.p`
    margin : 20px 0px;
`
const Price = styled.span`
    font-weight : 100;
    font-size : 30px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width : 50%;
    margin: 30px 0px;
`
const Filter = styled.div`
    display : flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size : 20px;
    font-weight : 200;
`
const FilterColor = styled.div`
    width : 20px;
    height : 20px;
    border-radius : 50%;
    background-color : ${props=>props.color};
    margin : 0px 5px;
    cursor : pointer;
`
const FilterSize = styled.select`
    margin-left : 10px;
    padding : 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width : 50%;
    display : flex;
    align-items: center;
    justify-content : space-between;
`
const AmountContainer = styled.div`
    display : flex;
    align-items : center;
    font-weight : 700;
`
const Amount = styled.span`
    width : 30px;
    height : 30px;
    border-radius : 25%;
    border :1px solid teal;
    display :flex;
    align-items:center;
    justify-content : center;
    margin : 0px 5px;
`
const Button = styled.button`
    padding : 15px;
    border :1px solid teal;
    background-color:white;
    cursor : pointer;
    font-weight : 600;

    &:hover{
        background-color:rgb(169, 173, 166);
    }

`

function Product() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src='https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1681401617/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/267742_0_w9jy39.png/mxw_2048,s_webp,f_auto'/>
        </ImgContainer>
        <InfoContainer>
            <Title>Keyboard</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit tempore tempora distinctio soluta illum ducimus blanditiis mollitia eaque facilis consequuntur dicta iure laborum debitis molestiae deleniti aperiam, obcaecati, nesciunt porro.</Desc>
            <Price>₹2000</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='Darkblue'/>
                    <FilterColor color='gray'/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>

            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Add/>
                    <Amount>1</Amount>
                    <Remove/>
                </AmountContainer>
                <Button>Add to Cart</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
