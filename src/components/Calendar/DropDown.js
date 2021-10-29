import React from "react";
import styled from "styled-components";
import useOnClickOutside from "../customHooks/UseOnClickOutside";

const DropWrapper = styled.div`
  position: absolute;
  top: 6ch;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  min-width: calc(10ch - 1rem);
  border-radius: 4px;
  p {
    white-space: nowrap;
    font-size: clamp(0.5rem, 1.5ch, 2rem);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(1em, 2%, 2em) 0;
  button {
    padding: 1em clamp(0.5rem, 2%, 2rem);
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
