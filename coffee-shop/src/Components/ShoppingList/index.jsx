import Product from "../Product";
import { productList } from "../../Data/ProductList";

import styled from "styled-components";

// const SLContainer = styled.div` 
//     position : absolute;
//     left : 200px;
//     display : flex;
//     justify-content: flex-center;`

const StyledLi = styled.li`
    margin-bottom :50px;
    `
    
const Button = styled.button`
    position : relative;
    left : 15px;
    `

const ProductList = styled.ul`
    list-style-type: none;
    padding: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const ShoppingList = ( { cart, updateCart }) => {

    const addToCart = (id, name, price, amount) => {
        const newProduct = {id, name, price, amount}
        const product =  cart.find( cartProduct => cartProduct.name === newProduct.name)
        
        //if the product doesn't exists
        if(!product){
            updateCart([...cart, newProduct])
        }
        else{
            // const filtredCart = cart.filter( cartProduct => cartProduct.name !== product.name)
            // product.amount += 1

            const cartCopy = cart
            const index = cartCopy.indexOf(product)
            cartCopy[index].amount +=1
            updateCart([...cartCopy])
        }
    }


    return(
        <ProductList>
            {
                productList.map(({id, name, picture, price, amount}) => (
                    <StyledLi key ={id}>
                        <Product  name = {name} picture = {picture} price = {price} />
                        <Button onClick={ () => addToCart(id, name, price, amount)} > Ajouter </Button>
                    </StyledLi>                    
                ))
            }
        </ProductList>
    )
}
export default ShoppingList;