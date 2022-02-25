import styled from 'styled-components';
import Cart from '../../Components/Cart';
import ShoppingList from '../../Components/ShoppingList';

const HomeContainer = styled.div`
  display : flex;
  `

function Home() {
  return (
    <HomeContainer >
      <Cart />
      <ShoppingList />
    </HomeContainer>
  );
}

export default Home;
