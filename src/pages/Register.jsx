import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    width:100vw;
    height : 100vh;
    background :linear-gradient(
        rgba(255,255,255,0.2),
        rgba(255,255,255,0.2)
    ), url(https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80) center;
    display :flex;
    align-items:center;
    justify-content: center;
`
const Wrapper=styled.div`
    width:40%;
    padding :20px;
    background-color:white;
`
const Form=styled.form`
    flex-wrap :wrap;
    display : flex;
`
const Title=styled.h1`
    font-size:24px;
    font-weight:300;
`
const Input=styled.input`
    flex :1;
    min-width : 40%;
    margin : 20px 10px 0px 0px;
    padding : 10px;
    box-shadow: 0 0 3px red !important;
    border: 1px solid red !important;
`
const Agreement = styled.span`
    font-size : 20px;
    margin : 20px 0px;
`
const Button=styled.button`
    width : 40%;
    border : none;
    padding : 15px 20px;
    background-color : teal;
    cursor : pointer;
`

function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder = "name"/>
                <Input placeholder = "last name"/>
                <Input placeholder = "username"/>
                <Input placeholder = "email"/>
                <Input placeholder = "password"/>
                <Input placeholder = "Confirm password"/>
                <Agreement>
                    By creating an account I consent to processing of my personal data in accordance with <b>Privacy Policy</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
