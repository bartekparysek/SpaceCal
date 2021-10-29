import React, { Suspense } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { takeMonth } from "./buildCalendar";
import Container from "../Container";
import Spinner from "../Spinner";
import WeeksDays from "./WeeksDays";

const CalendarContainer = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  width: 30ch;
  min-width: calc(100% - 1rem);
  /* height: 36vh;
	max-height: calc(100% - 1rem); */
  padding: clamp(0.75rem, 2%, 1rem) 0;
  align-self: center;
`;

const CalList = styled.ul`
  display: grid;
  padding: 0 0 1rem 0;
  margin: 0;
  justify-items: center;
`;

const CalDayName = styled.li`
  display: grid;
  grid-template-columns: repeat(7, minmax(2rem, 4rem));
  justify-items: center;
  padding: clamp(0.5rem, 3%, 1rem) 0;
  font-size: clamp(0.75rem, 1rem, 1.5rem); ;
`;

const WeekNames = () => {
  return (
    <CalDayName key={"weekDays"}>
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <div key={day}> {day}</div>
      ))}
    </CalDayName>
  );
};

const Calendar = ({ selectedDate, setSelectedDate, flights }) => {
  const month = takeMonth(selectedDate)();

  return (
    <Container
      setSelectedDate={setSelectedDate}
      calendar
      title={`${format(selectedDate, "MMMM")} ${format(selectedDate, "yyyy")}`}
    >
      <Suspense fallback={<Spinner />}>
        <CalendarContainer>
          <CalList>
            <WeekNames />
            <WeeksDays
              month={month}
              flights={flights}
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          </CalList>
        </CalendarContainer>
      </Suspense>
    </Container>
  );
};

export default Calendar;
