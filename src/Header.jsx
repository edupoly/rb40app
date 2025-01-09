import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    color:${props=>props.$primary?'green':'blue'}
`;

function Header() {
  return (
    <>
        <Title $primary>Welcome to Styled Components</Title>
        <Title>Welcome to Styled Components</Title>
    </>
  )
}

export default Header