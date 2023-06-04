import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex : 1;
    display : flex;
`

const Center = styled.div`
    flex : 1;
    padding : 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin : 0px;
    padding : 0px;
    list-style: none;
    display: flex;
    flex-wrap : wrap;

`
const ListItem = styled.li`
    width : 50%;
    margin-bottom : 10px;
`

const Left = styled.div`
    flex : 1;
    dislpay : flex;
    flex-direcction : column;
    padding  :20px;
`

const LOGO = styled.h1``
const Desc = styled.p`
    margin : 20px 0px;
`
const SocialContainer = styled.div`
    display : flex;
`
const SocialIcon = styled.div`
    width: 5vh;
    height : 5vh;
    border-radius:50%;
    color : white;
    background-color : #${props=>props.color};
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
`
const Right = styled.div`
    flex : 1;
    padding : 20px;
`
const ContactItem = styled.div`
    margin-bottom : 10px;
    display:flex;
    align-items : center;
`
const Payment =styled.img`
    width : 50%;
`

function Footer() {
  return (
    <Container>
        <Left>
            <LOGO>ADARSH.</LOGO>
            <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero qui, exercitationem reprehenderit quae suscipit dolore error cupiditate omnis asperiores, quod aperiam, sapiente distinctio! Debitis non odio dolor odit, numquam perferendis
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
            
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight : '10px'}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone  style={{marginRight : '10px'}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutline  style={{marginRight : '10px'}}/> contact@lama.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer
