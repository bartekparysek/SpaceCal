import React from 'react'
import styled from 'styled-components'
const StyledFooter = styled.div`
  display:flex;
  justify-content: center;
  color: #fff;
  font-size: clamp(1.5rem, 1rem, 1rem);
  p{
    margin: 2rem 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p> &copy; Bartłomiej Parysek</p>
    </StyledFooter>
  )
}

export default Footer
