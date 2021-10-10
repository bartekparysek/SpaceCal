import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
`;

const Spinner = () => {

  return (
    <Wrapper>
      <SpinnerCircularFixed size={30} color="rgba(94, 114, 125, 0.55)" secondaryColor="rgba(255, 255, 255, 1)" />
    </Wrapper>

  );
}

export default Spinner
