import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
	display: flex;
	padding: 1rem 0;
	align-items: center;
	div{
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
        <h1>{new Date(flight.date_utc).toDateString()}</h1>
        <h1>{`${launchpad.locality}, ${launchpad.region}`}</h1>
      </div>
    </Header>
  )
}

export default BasicInfo
