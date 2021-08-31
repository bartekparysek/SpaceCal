import React from 'react'
import styled from 'styled-components'
const StyledFooter = styled.div`
  display:flex;
  justify-content: center;
  color: #fff;
  font-size: 20px;
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
