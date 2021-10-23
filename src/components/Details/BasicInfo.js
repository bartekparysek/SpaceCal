import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Header = styled.div`
  display: flex;
  padding: clamp(0.5rem, 2%, 1rem) 0;
  align-items: center;
  div {
    padding: 0 clamp(0.5rem, 4%, 2rem);
  }
  @media screen and (max-width: 580px) and (min-width: 500px) {
    flex-direction: column;
    div {
      padding: 0;
    }
  }
`;

const Logo = styled.img`
  border-radius: 50%;
  width: clamp(6rem, 7rem, 9rem);
  height: auto;
  aspect-ratio: 1/1;
`;

const BasicInfo = ({ flight, launchpad }) => {
  return (
    <Header>
      <Logo src={launchpad.images.large} alt={launchpad.full_name}></Logo>
      <div>
        <h3>{format(new Date(flight.date_utc), "PPPP")}</h3>
        <h3>{`${launchpad.locality}, ${launchpad.region}`}</h3>
      </div>
    </Header>
  );
};

export default BasicInfo;
