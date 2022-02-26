import styled from 'styled-components';
import Cart from '../../Components/Cart';
import ShoppingList from '../../Components/ShoppingList';
import { useState } from 'react';

const HomeContainer = styled.div`
  display : ${({isOpen}) => (isOpen ? 'flex':'')};
  `

function Home() {
  const [cart, updateCart] = useState([])
  const [isOpen, setIsOpen] = useState(true)

  return (
    <HomeContainer isOpen = {isOpen} >
      <Cart cart = {cart} updateCart = {updateCart} isOpen={isOpen} setIsOpen = {setIsOpen} />
      <ShoppingList cart = {cart} updateCart = {updateCart} />
    </HomeContainer>
  );
}

export default Home;
