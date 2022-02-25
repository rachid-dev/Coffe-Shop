import styled from 'styled-components'

const CartContainer = styled.div`
    display : block flow;
    padding: 32px;
    margin-right : 100px; 
    color: white;
    background-color: #31b572;
    `

const Cart = () => {
    return(
        <CartContainer>
            <h1>Mon Panier</h1>
        </CartContainer>
    )
}
export default Cart;