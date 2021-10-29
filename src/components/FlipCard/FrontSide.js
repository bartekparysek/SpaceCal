import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const FrontCard = styled.div`
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  background-color: #f7f7f7;
  min-height: 15vh;
  width: 30ch;
  min-width: calc(100% - 1rem);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 8px;
  padding: clamp(0.75rem, 1%, 1rem) clamp(0.8rem, 6%, 2rem);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  backface-visibility: hidden;
  overflow: hidden;
  flex-basis: 80%;
  flex-shrink: 0;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  h2 {
    margin: 0;
    font-size: clamp(1.5rem, 1vw + 0.5rem, 0.75vw + 0.5rem);
    white-space: nowrap;
  }
`;

const FrontSide = ({ flight, launchpad, children }) => {
  const flightDate = new Date(flight.date_utc);
  return (
    <FrontCard key={"cardA"}>
      <Top>
        <h2>{flight.name}</h2>
        {children}
      </Top>
      {launchpad && <p>{`${launchpad.locality}, ${launchpad.region}`}</p>}
      <p>{format(flightDate, "PPPP")}</p>
    </FrontCard>
  );
};

export default FrontSide;
