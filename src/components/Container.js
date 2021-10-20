import React from "react";
import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { addMonths, subMonths } from "date-fns";

const Wrapper = styled.div`
  color: #000;
  width: 30vw;
  min-width: calc(100% - 1rem);
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

  @media screen and (max-width: 800px) and (min-width: 500px) {
    width: 45vw;
    min-width: calc(100% - 1rem);
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding: clamp(0.5rem, 1%, 1rem) 0;
  border-radius: 8px 8px 0 0;
  text-align: center;
  h1 {
    margin: 0;
    font-size: clamp(1.25rem, 0.5vw + 1rem, 1vw + 0.25rem);
    padding: 0;
  }
`;
const ChildrenWrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: clamp(1rem, 5%, 2rem);
  border-radius: 0 0 8px 8px;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
`;
const MonthChange = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  cursor: pointer;
  svg {
    font-size: 1.2rem;
  }
  &:hover {
    background-color: #74b9ff;
  }
`;

const Container = ({ title, children, calendar, setSelectedDate }) => {
  const nextMonth = () => {
    setSelectedDate((prev) => {
      return addMonths(prev, 1);
    });
  };

  const previousMonth = () => {
    setSelectedDate((prev) => {
      return subMonths(prev, 1);
    });
  };

  return (
    <Wrapper>
      <Header>
        {calendar && (
          <MonthChange
            aria-label={"Previous Month"}
            onClick={() => previousMonth()}
          >
            <GrFormPrevious />
          </MonthChange>
        )}
        <h1>{title}</h1>
        {calendar && (
          <MonthChange aria-label={"Next Month"} onClick={() => nextMonth()}>
            <GrFormNext />
          </MonthChange>
        )}
      </Header>

      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default Container;
