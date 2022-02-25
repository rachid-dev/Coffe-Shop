import styled from 'styled-components'

const CartContainer = styled.div`
    width : 200px;
    display : block flow;
    padding: 35px;
    margin-right : 50px; 
    color: white;
    background-color: #31b572;
    `

const StyledSpan = styled.span`
    font-size : 15px;
    `

const Cart = ({ cart, updateCart }) => {
    return(
        <CartContainer>
            {
                cart.map(({id, name, price, amount}) => (
                    <StyledSpan key ={id} > {`${name}   ${price}`} {amount > 0 && ` x ${amount}` } <br /> <br /> </StyledSpan>
                ))
            }
        </CartContainer>
    )
}
export default Cart;