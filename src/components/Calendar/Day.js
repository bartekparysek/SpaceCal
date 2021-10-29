import React, { useRef } from "react";
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
  border-radius: inherit;
  padding: clamp(0.5rem, 2%, 1rem) clamp(1.2rem, 5%, 3rem);
  min-width: calc(4ch - 1em);

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
const RegularDay = styled.div`
  display: flex;
  justify-content: center;
  min-width: calc(4ch - 1em);
  font-size: clamp(0.75rem, 1rem, 1.5rem);
  background-color: inherit;
  border-radius: inherit;
  padding: clamp(0.5rem, 2%, 1rem) clamp(1.2rem, 5%, 3rem);
`;

const Day = ({ setOpen, day, flights, open, selectedDate }) => {
  const node = useRef(null);
  const flightDays = flights.map((el) =>
    new Date(el.date_utc).toLocaleDateString()
  );
  const flight = flights.find((el) =>
    isSameDay(new Date(el.date_utc), new Date(day))
  );

  if (flightDays.includes(new Date(day).toLocaleDateString())) {
    return (
      <MarkDay ref={node}>
        <div>{format(day, "d")}</div>
        {open && isSameDay(new Date(day), new Date(selectedDate)) && (
          <DropDown node={node} setOpen={setOpen} open={open}>
            <p>{!undefined && flight.name}</p>
            <DetailsLink dropdown flight={flight} />
          </DropDown>
        )}
      </MarkDay>
    );
  } else {
    return (
      <RegularDay>
        <div>{format(day, "d")}</div>
      </RegularDay>
    );
  }
};

export default Day;
