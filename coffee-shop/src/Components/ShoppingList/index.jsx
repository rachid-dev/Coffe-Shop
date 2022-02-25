import { productList } from "../../Data/ProductList";
import Product from "../Product";
import styled from "styled-components";

const SLContainer = styled.div` 
    position : absolute;
    left : 200px;
    display : flex;
    justify-content: flex-center;`

const StyledDiv = styled.div`
    `
const Button = styled.button`
    position : relative;
    left : 145px;
    bottom : 25px;
    `

const ProductList = styled.ul`
    list-style-type: none;
    padding: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const ShoppingList = () => {
    return(
        <ProductList>
            {
                productList.map(({id, name, picture, price}) => (
                    <Product key ={id} name = {name} picture = {picture} price = {price} />
                ))
            }
        </ProductList>
    )
}
export default ShoppingList;