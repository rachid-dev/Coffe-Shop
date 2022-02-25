import styled from 'styled-components'

const Title = styled.h1`
    text-align : center;
    `
const HeaderContainer = styled.div`
    display : block flow;
    border : 2px solid black ;
    padding : 20px;
    
    `


const Header = () => {
    return (
        <HeaderContainer>
            <Title>
                My Market
            </Title>
        </HeaderContainer>
    )
}

export default Header