import { useState } from 'react'
import styled from 'styled-components'

const CartContainer = styled.div`
    width : 260px;
    display : block flow;
    padding-left : 5px;
    padding-top: 35px;
    padding-right: 35px;
    padding-bottom : 35px;
    margin-right : 50px; 
    color: white;
    background-color: #31b572;
    `

const StyledLi = styled.li`
    font-size : 14px;
    `

const Button = styled.button`
    align-items: start;`

const Cart = ({ cart, updateCart, isOpen, setIsOpen }) => {
    

    let total = 0

    const addProduct = (name) => {
        const currentProduct = cart.find(cartProduct => cartProduct.name === name)
        const cartCopy = cart
        const index = cartCopy.indexOf(currentProduct)
        cartCopy[index].amount +=1
        updateCart([...cartCopy])
    }
    const removeProduct = (name) => {
        const currentProduct = cart.find(cartProduct => cartProduct.name === name)
        const cartCopy = cart
        const index = cartCopy.indexOf(currentProduct)
        cartCopy[index].amount -=1
        updateCart([...cartCopy])
    }

    return(
        !isOpen ?(
            <Button onClick={() => setIsOpen(true)}> Ouvrir le panier </Button>
        ):(
            <CartContainer>
                {
                    <div>
                    <button onClick={() => setIsOpen(false)}> Fermer le panier </button>
                    <ul>
                        <h3>Panier</h3>
                        {
                            cart.map(({id, name, price, amount}) => {
        
                                const priceInt = parseInt(price.split(' ').join(''), 10)
                                total += priceInt * amount
                                return  amount > 0 && (
                                    <StyledLi key ={id} >
                                        {`${amount} ${name}   ${price}` }
                                        <button onClick={() => addProduct(name)}> + </button>
                                        <button onClick={() => removeProduct(name)}> - </button> <br /> <br />
                                    </StyledLi>                           
                                    
                                )
                            })
                        }
                    </ul>
                    {
                        total !== 0 ? (
                            <div>
                                <span>{`Total =   ${total} FCFA`} <br /> <br /></span>
                                <button onClick={() => updateCart([])}>Vider le panier</button>
                            </div>
                        ):(
                            <span> Votre panier est vide</span>
                        )
                    }
                </div>
                }
            </CartContainer>
        )
    )
}
export default Cart;

