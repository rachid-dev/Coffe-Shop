import Product from "../Product";
import { productList } from "../../Data/ProductList";
import styled from "styled-components";
import { cartContext } from "../../utils/Context";
import { useContext } from "react";

// const SLContainer = styled.div` 
//     padding : 35px;`


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
    display: inline flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Input = styled.input`
    margin-right : 50px;`

const ShoppingList = ({setClientName, setDeliveryDate}) => {
    const { cart, updateCart, setIsOpen} = useContext(cartContext)

    const addToCart = (id, name, description, price, amount) => {
        setIsOpen(true)
        const newProduct = {id, name, description, price, amount}
        const product =  cart.find( cartProduct => cartProduct.name === newProduct.name)
        
        //if the product doesn't exists
        if(!product){
            newProduct.amount +=1
            updateCart([...cart, newProduct])
        }
        else{
            const cartCopy = cart
            const index = cartCopy.indexOf(product)
            cartCopy[index].amount +=1
            updateCart([...cartCopy])
        }
    }


    return(
        <div>
            <label htmlFor ={"clientName"}>Nom du client </label> <Input id={"clientName"}  onChange ={(e)=> setClientName(e.target.value)}   type={'text'} placeholder={'--HOTEL ONOMO--'} size={'23'}/>
            <label htmlFor ={"deliveryDate"}>Date de Livraison </label> <input id={"deliveryDate"} onChange ={(e)=> setDeliveryDate(e.target.value)} type={'Date'} />
            <ProductList>
                {
                    productList.map(({id, name, description, picture, price, amount}) => (
                        <StyledLi key ={id}>
                            <Product  name = {name} picture = {picture} price = {price} />
                            <Button onClick={ () => addToCart(id, name, description, price, amount)} > Ajouter </Button>
                        </StyledLi>                    
                    ))
                }
            </ProductList>
        </div>
    )
}
export default ShoppingList;