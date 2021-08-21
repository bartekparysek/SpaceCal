import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: #000;
  width: 30vw;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  h1{
    margin: 0;
    font-size: 20px;
    padding:0;

  }
  span{
    display: block;
    background-color: rgba(255,255,255,0.4);
    padding: 0.5rem 5rem;
    border-radius: 8px 8px 0 0;
    text-align: center;
  }
  div{
    background-color: rgba(255,255,255,1);
    padding: 1rem;
    border-radius:  0 0 8px 8px;
  }
`;

const Container = ({ title, children }) => {
  return (
    <>
      <Wrapper>
        <h1><span>{title}</span></h1>
        <div>
          {children}
        </div>
      </Wrapper>
    </>
  )
}

export default Container
