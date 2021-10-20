import React from "react";
import styled from "styled-components";
import { MdList } from "react-icons/md";
import Link from "../Link";

export const StyledButton = styled.button`
  font-size: clamp(0.5rem, 0.9rem, 1.5rem);
  font-family: inherit;
  background-color: #ece7e7ab;
  border-radius: 5px;
  color: #000;
  border: none;
  width: 11rem;
  padding: clamp(0.3rem, 5%, 0.5rem) clamp(0.25rem, 1rem, 0.75rem);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;

  svg {
    font-size: clamp(0.8rem, 1.25rem, 1.5rem);
    margin-right: 2px;
  }

  &:hover {
    background-color: #ece7e7;
  }
`;
const ButtonsWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  > ${StyledButton} {
    margin-right: 0.5rem;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
    > ${StyledButton} {
      margin-bottom: 0.5rem;
      margin-right: 0;
    }
  }

  @media screen and (max-width: 650px) and (min-width: 500px) {
    flex-direction: column;
    align-items: center;
    > ${StyledButton} {
      margin-bottom: 0.5rem;
      margin-right: 0;
    }
  }
  @media screen and (max-width: 930px) and (min-width: 801px) {
    flex-direction: column;
    align-items: center;
    > ${StyledButton} {
      margin-bottom: 0.5rem;
      margin-right: 0;
    }
  }
`;

const Buttons = ({ children }) => {
  return (
    <ButtonsWrapper>
      {children}
      <Link to="/">
        <StyledButton aria-label={"Flight list"}>
          <MdList />
          Flight list
        </StyledButton>
      </Link>
    </ButtonsWrapper>
  );
};

export default Buttons;
