import styled from "styled-components";

const ProductContainer = styled.div`
    margin: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    text-transform: capitalize;
    position: relative;
    `

const ProductInfo = styled.p`
    text-align : center;
    `

const StyledImg = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 20px;
    
    `
const Product = ({name, picture, price}) => {
    
    return(
        <ProductContainer>
            <StyledImg src={picture} alt = {name} />
            <span>{ `Nom : ${name}` } <br/></span>
            <span>{`Prix : ${price} fcfa`}</span>
        </ProductContainer>
    )
}
export default Product;