import styled from 'styled-components';
import Cart from '../../Components/Cart';
import ShoppingList from '../../Components/ShoppingList';
import { useState } from 'react';

const HomeContainer = styled.div`
  display : flex;
  `

function Home() {
  const [cart, updateCart] = useState([])

  return (
    <HomeContainer >
      <Cart cart = {cart} updateCart = {updateCart} />
      <ShoppingList cart = {cart} updateCart = {updateCart} />
    </HomeContainer>
  );
}

export default Home;
