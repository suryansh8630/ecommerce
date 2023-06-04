import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
const Container = styled.div`
    height : 30px;
    background-color : rgb(33, 9, 70);
    color : gold;
    display : flex ;
    align-items: center;
    justify-content : center;
    font-size : 16px;
    font-weight :500;
    ${mobile({fontSize:"10",
        width:"100%"
    })}
`

const Announcement = () => {
    return(
        <Container>
            Super deal! Free delivery over Rs. 5000
        </Container>
    )

}
export default Announcement