import React from 'react'
import styled from 'styled-components'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { addMonths, subMonths } from 'date-fns'

const Wrapper = styled.div`
  color: #000;
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  h1{
    margin: 0;
    font-size: 20px;
    padding:0;
  }
`;
const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255,255,255,0.4);
    padding: 0.5rem 5rem;
    border-radius: 8px 8px 0 0;
    text-align: center;
`
const ChildrenWrapper = styled.div`
  background-color: rgba(255,255,255,1);
  padding: 2rem;
  border-radius:  0 0 8px 8px;
  min-height: 25vh;
`;
const MonthChange = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  svg{
    font-size: 1.2rem;
  }
  &:hover{
    background-color: #74b9ff;
  }
`;

const Container = ({ title, children, calendar, setSelectedDate }) => {
  const nextMonth = () => {
    setSelectedDate((prev) => {
      return addMonths(prev, 1)
    })
  }

  const previousMonth = () => {
    setSelectedDate(prev => {
      return subMonths(prev, 1)
    })
  }

  return (
    <Wrapper>
      <Header>
        {calendar && <MonthChange onClick={() => previousMonth()}>
          <GrFormPrevious />
        </MonthChange>}
        <h1>{title}</h1>
        {calendar && <MonthChange onClick={() => nextMonth()}>
          <GrFormNext />
        </MonthChange>}
      </Header>

      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </Wrapper>
  )
}

export default Container
