import {ArrowLeftRounded, ArrowRightRounded } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    background-color : white; 
    position : relative;
    overflow : hidden;
`
const Arrows = styled.div`
    width: 50px;
    height : 50px;
    background-color : white;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    position : absolute;
    top : 0;
    bottom : 0;
    left : ${props=> props.direction === "left" && "10px"};
    right : ${props=> props.direction === "right" && "10px"};
    margin : auto;
    opacity :0.5;
    cursor : pointer;
    z-index : 2;
`
const Wrapper = styled.div`
    height : 100%;
    display : flex;
    transition : all 1.5s ease;
    transform : translateX(${props => props.slideIndex * -100}vw)
`
const Slide=styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    align-items: center;
`
const Imgcontainer = styled.div`
    width : 100vw;
    height: 100vh;
    flex : 1; 
    align-items : center;
`
const Image = styled.img`
    margin-left : 100px;
    height : 80%;
`
const Infocontainer =styled.div`
    flex : 1;
    padding : 50px;
`
const Title =styled.h1`
    margin : 50px 0px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    letter-spacing : 3px;
    align-items : center;

`
const Button =styled.button`
    font-size : 30px; 
    background-color : transparent;
    cursor : pointer;
`

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 0)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 2)
        }
    }
    return(
        <Container>
            <Arrows direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftRounded/>
            </Arrows>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((items)=>(
                    
                    <Slide bg={items.bg} key={items.id}>    
                    <Imgcontainer>
                    <Image src={items.img}/>
                    </Imgcontainer>
                    <Infocontainer>
                        <Title>{items.title}</Title>
                        <Desc>{items.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </Infocontainer> 
                </Slide>
                ))}
            </Wrapper>
            <Arrows direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightRounded/>
            </Arrows>
        </Container>
    )
}
export default Slider