import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Header = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  div {
    padding: 0 2rem;
  }
`;

const Logo = styled.img`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
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
