import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``
const Wrapper = styled.div`
    padding : 20px;
`
const Title = styled.h1`
    font-weight : 300;
    text-align : center;
`
const Top = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding:20px;
`
const TopButton = styled.button`
    padding : 20px;
    font-weight: 600;
    cursor : pointer;
    border : ${props=>props.type === 'filled' && 'none'};
    background-color : ${props=>props.type === 'filled' ? 'black':'transparent'};
    color : ${props=>props.type === 'filled' ? 'white' : 'black'};
`
const TopTexts = styled.div`

`
const Toptext = styled.span`
    text-decoration : underline;
    cursor : pointer; 
    margin : 0px 10px;
`
const Bottom = styled.div`
    display :flex;
    justify-content : space-between;
`
const Info = styled.div`
    flex:3
`

const Product = styled.div`
    display :flex;
    justify-content : space-between;
`
const ProductDetail = styled.div`
    display : flex;
    flex :2;
`
const Image = styled.img`
    width : 40%;
`
const Details = styled.div`
    padding :20px;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color : ${props=>props.color}
`
const PriceDetail = styled.div`
    flex: 1;
    display : flex;
    flex-direction : column;
    align-items:center;
    justify-content:center;
`
const ProductAmountContainer = styled.div`
    display :flex;
    align-items:center;
    margin-bottom : 20px;
`
const ProductAmount= styled.div`
    font-size:24px;
    margin:5px;

`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight: 300;
`
const Hr=styled.hr`
    background-color:white;
    boder:none;
    height : 1px;
`
const Summary = styled.div`
    flex:1;
    border : 1px solid lightgray;
    border-radius: 10px;
    padding:20px;
    height :50vh;
`
const SummaryItem =styled.div`
    margin : 30px 0px;
    display :flex;
    justify-content : space-between;
    font-weight : ${props=>props.type==="total" && '500'};
    font-size : ${props=>props.type==="total" && '24px'};
`
const SummaryItemPrice=styled.span``
const SummaryItemText=styled.span``
const SummaryTitle=styled.h1`
    font-weight:200;
`
const Button=styled.button`
    width :100%;
    padding:10px;
    background-color : black;
    color:white;
    cursor:pointer;
    font-weight:600;
`

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPING</TopButton>
            <TopTexts>
                <Toptext>Shopping bag(2)</Toptext>
                <Toptext>Your wishlist (0)</Toptext>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663347195/Croma%20Assets/Computers%20Peripherals/Laptop/Images/236835_0_sahuor.png/mxw_2048,s_webp,f_auto"/>
                        <Details>
                        <ProductName><b>Product : </b>Iphone XX</ProductName>    
                        <ProductId><b>ID : </b>3472389823</ProductId>    
                        <ProductColor color='black'/>
                        <ProductSize><b>Size : </b>37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs. 67,980</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1681401617/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/267742_0_w9jy39.png/mxw_2048,s_webp,f_auto"/>
                        <Details>
                        <ProductName><b>Product : </b>Iphone XX</ProductName>    
                        <ProductId><b>ID : </b>3472389823</ProductId>    
                        <ProductColor color='blue'/>
                        <ProductSize><b>Size : </b>37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs. 7,980</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Sub Total</SummaryItemText>
                    <SummaryItemPrice>Rs. 1,24,980</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>Rs. 500</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>Rs. -500</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>Rs. 1,24,980</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
