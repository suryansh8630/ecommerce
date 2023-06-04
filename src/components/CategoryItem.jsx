import styled from "styled-components";

const Container = styled.div`
    flex : 1;
    margin : 3px ;
    heigth : 70 vh;
    position : relative;
`;
const Image = styled.img`
    width : 100%;
    height : 100%;
    object-fit:contain;
`;
const Info = styled.div`
    object-fit: cover;
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    align-items: center;
    display : flex;
    flex-direction : column;
    justify-content : center;
`
const Title = styled.h1`
    color : rgb(43, 255, 0);
    align-items : center;
`
const Button = styled.button`
    border : none;
    padding : 10px;
    background : white;
    color : gray;
    font-weight : 600px;
    cursor : pointer;
`

const CategoryItems = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}
export default CategoryItems