import React from "react";
import { SpinnerCircularFixed } from "spinners-react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <Wrapper>
      <SpinnerCircularFixed
        size={40}
        color="rgba(255, 255, 255, 0.63)"
        secondaryColor="rgba(0, 0, 0, 0.24)"
      />
    </Wrapper>
  );
};

export default Spinner;
