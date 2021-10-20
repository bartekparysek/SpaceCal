import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

const MarkDay = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
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

const Day = ({ day, flights }) => {
  const flightDays = flights.map((el) =>
    new Date(el.date_utc).toLocaleDateString()
  );
  if (flightDays.includes(new Date(day).toLocaleDateString())) {
    return <MarkDay>{format(day, "d")}</MarkDay>;
  } else {
    return <div>{format(day, "d")}</div>;
  }
};

export default Day;
