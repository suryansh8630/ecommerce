import { Badge } from '@material-ui/core'
import { MailOutlineOutlined, Search, ShopOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container = styled.div`
    height : 60px;
    background-color :rgb(0, 0, 0);
    ${mobile({height:"50px"})}
`
const Wrapper=styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    ${mobile({padding:"10px 0px"})};
`
const Left = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
`
const Language= styled.div`
    font-size: 14px;
    cursor : pointer;
    color:white;
    ${mobile({display:"none"})};
`
const Searchcontainer= styled.div`
    border : 1px solid grey;
    display : flex;
    align-items : center;
    margin-left: 25px;
    padding : 5px;
    font-weight : 500;
    box-shadow: 0 0 3px red !important;
    border: 1px solid red !important;
`

const Input = styled.input`
    border : none;
    font-size : 14px;
    background-color : rgb(0, 0, 0);
    color:white;
    box-shadow: 0 0 3px red !important;
    border: 1px solid red !important;

`

const Center = styled.div`
    flex : 1;
`
const Logo = styled.h1`
    font-weight : bold;
    text-align : center;
    color: white;
    ${mobile({fontSize:"24px"})};
`
const Right = styled.div`
    flex : 1;
    display : flex;
    justify-content : flex-end;
    ${mobile({flex: 2,justifyContent:"center"})};
    
`
const MenuItem = styled.div`
    font-size : 14px;
    cursor : pointer;
    margin-left : 5px;
    padding : 10px;
    color:white;
    ${mobile({fontSize:"12px" ,marginLeft:"10px"})}
`

const Navbar = () =>{
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <Searchcontainer>
                        <Input/>
                        <Search style={{color: "red",fontSize : 16}}/>
                    </Searchcontainer>
                </Left>
                <Center><Logo>ADARSH.</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar