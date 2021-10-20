import React, { useState } from "react";
import { format, isSameDay } from "date-fns";
import styled from "styled-components";
import DropDown from "./DropDown";
import DetailsLink from "../FlipCard/DetailsLink";

const MarkDay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 1em;
  &:after {
    position: absolute;
    content: " ";
    border-top: 2px solid #e84118;
    border-bottom: 2px solid #e84118;
    border-radius: 2px;
    width: 1.5rem;
    display: block;
  }
`;

const Day = ({ day, flights, open, selectedDate }) => {
  const flightDays = flights.map((el) =>
    new Date(el.date_utc).toLocaleDateString()
  );
  const flight = flights.find((el) =>
    isSameDay(new Date(el.date_utc), new Date(day))
  );
  // Wyciągnąć flight id i flight name z flights
  if (flightDays.includes(new Date(day).toLocaleDateString())) {
    return (
      <MarkDay>
        {format(day, "d")}
        {open && isSameDay(new Date(day), new Date(selectedDate)) && (
          <DropDown>
            <p>{!undefined && flight.name}</p>
            <DetailsLink flight={flight} />
          </DropDown>
        )}
      </MarkDay>
    );
  } else {
    return <div>{format(day, "d")}</div>;
  }
};

export default Day;
