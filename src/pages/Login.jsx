import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    width:100vw;
    height : 100vh;
    background :linear-gradient(
        rgba(255,255,255,0.2),
        rgba(255,255,255,0.2)
    ), url(https://rexus.id/wp-content/uploads/2018/03/pc-gaming-1.jpg) center;
    background-size : cover;
    display :flex;
    align-items:center;
    justify-content: center;
`
const Wrapper=styled.div`
    width:20%;
    padding :20px;
    background-color:black;
    opacity : 0.8;
`
const Form=styled.form`
    flex-direction : column;
    display : flex;
`
const Title=styled.h1`
    font-size:24px;
    font-weight:300;
    color: white;
`
const Input=styled.input`
    flex :1;
    min-width : 40%;
    margin : 10px 0px;
    padding : 10px;
    box-shadow: 0 0 3px red !important;
    border: 1px solid red !important;
`
const Button=styled.button`
    width : 40%;
    border : none;
    padding : 15px 20px;
    background-color : teal;
    cursor : pointer;
`

const Link = styled.a`
    margin: 10px 0px;
    font-size : 12px;
    text-decoration : underline;
    cursor : pointer;
    display :flex;
    color :white;
    align-items:center;
    justify-content : space-between;
`

function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder = "username"/>
                <Input placeholder = "password"/>
                <Button>LOGIN</Button>
            </Form>
              <Link>Forgot password?</Link>
              <Link>Create a new account</Link>
        </Wrapper>
      
    </Container>
  )
}

export default Login
