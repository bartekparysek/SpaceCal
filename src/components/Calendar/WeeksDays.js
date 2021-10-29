import React, { useState } from "react";
import styled from "styled-components";
import { format, isSameMonth, isSameDay } from "date-fns";
import Day from "./Day";

const CalWeek = styled.li`
  display: grid;
  grid-template-columns: repeat(7, minmax(2rem, 4rem));
  justify-items: center;
  font-size: clamp(0.75rem, 1rem, 1.5rem);
`;

const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  cursor: pointer;
  color: ${(props) => props.color};
`;

const WeeksDays = ({ month, flights, setSelectedDate, selectedDate }) => {
  const [open, setOpen] = useState(false);

  const dayColor = (day) => {
    if (!isSameMonth(day, selectedDate)) return "#5E727D";
  };
  const backgroundColor = (day) => {
    if (isSameDay(day, selectedDate)) return "#74b9ff";
  };

  const handleInsideClick = (day) => {
    setOpen(!open);
    setSelectedDate(day);
  };

  return (
    <>
      {month.map((week, i) => {
        return (
          <CalWeek key={week[i]}>
            {week.map((day) => (
              <StyledGrid
                key={format(day, "DDD")}
                background={backgroundColor(day)}
                color={dayColor(day)}
                onClick={() => handleInsideClick(day)}
              >
                {flights && (
                  <Day
                    setOpen={setOpen}
                    open={open}
                    day={day}
                    flights={flights}
                    selectedDate={selectedDate}
                  />
                )}
              </StyledGrid>
            ))}
          </CalWeek>
        );
      })}
    </>
  );
};

export default WeeksDays;
