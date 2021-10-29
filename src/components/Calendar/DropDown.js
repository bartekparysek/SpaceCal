import React from "react";
import styled from "styled-components";
import useOnClickOutside from "../customHooks/UseOnClickOutside";

const DropWrapper = styled.div`
  position: absolute;
  top: 3rem;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  min-width: calc(10vw - 1rem);
  border-radius: 4px;
  p {
    font-size: clamp(0.7rem, 0.8rem, 2rem);
    white-space: no-wrap;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(1em, 2%, 2em) 0;
  button {
    padding: 0.7em 0.5em;
  }
`;
const Diamond = styled.div`
  top: -0.5em;
  align-self: center;
  position: absolute;
  height: 1em;
  width: 1em;
  transform: rotate(45deg);
  background-color: inherit;
  box-shadow: rgba(99, 99, 99, 0.1) -1px -1px 2px 0px;
`;

const DropDown = ({ children, setOpen, open, node }) => {
  const handleClickOutside = () => {
    setOpen(!open);
  };

  useOnClickOutside(node, handleClickOutside);

  return (
    <DropWrapper>
      <Diamond />
      <Content>{children}</Content>
    </DropWrapper>
  );
};

export default DropDown;
