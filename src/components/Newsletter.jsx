
import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
  height : 60vh;
  background-color : rgb(206, 189, 189);
  display : flex;
  align-items : center;
  justify-content:center;
  flex-direction : column;
`
const Title =styled.h1`
  font-size: 70px;
  margin-bottom : 20px;
`
const Description =styled.div`
  font-size : 24px;
  font-weight : 300;
  margin-bottom : 20px;
`
const InputContainer =styled.div`
  width : 50%;
  height : 40px;
  background-color : white;
  display : flex;
  justify-content : space-between;
  border : 1px solid rgb(190, 49, 49);
`
const Input =styled.input`
  padding-left : 20px;
  border : none;
  flex : 80;
`
const Button =styled.button`
  flex :1;
  border : none;
  background-color:rgb(83, 47, 47);
  color : white;
`

function Newsletter() {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Description>Get timely updates from your favourite brand!</Description>
        <InputContainer>
            <Input placeholder='YOUR EMAIL'/>
            <Button>
              <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
