import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Link from '../Link';
import CalendarButton from '../CalendarButton'
import Container from '../Container';
import spaceX from '../../apis/spaceX';
import { LeftSide, RightSide } from '../Home/HomeView';
import GoogleMap from './GoogleMap';

export const StyledButton = styled.button`
	font-size: 16px;
	font-family:inherit;
	background-color: #ece7e7ab;
	border-radius: 8px;
	color: #000;
	border: none;
	width: 10rem;
	padding: 0.5rem 2rem;
	display: inline;
	text-align: center;
	white-space: nowrap;
	@media screen and (max-width: 375px) {
		padding: 0.33rem 0.5rem;
	}
	&:hover{
      background-color: #ece7e7;
   }
`;

export const Section = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.5rem;
	a {
		padding: 0.5rem 0;
	}
`;
const Details = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Logo = styled.img`
	border-radius: 50%;
	width: 8rem;
	height: 8rem;
`;
const Header = styled.div`
	display: flex;
	padding: 1rem 0;
	align-items: center;
	div{
		padding: 0 2rem;
	}
`;
const Description = styled.div`
	padding: 0.5rem 0;
	text-align: justify;
	font-size:0.8em;
`;
const ButtonsWrapper = styled.div`
	padding:1rem 0;
	display: flex;
	justify-content: space-between;
`;

const DetailsView = () => {
	const [flight, setFlight] = useState(null);
	const [launchpad, setLaunchPad] = useState(null);
	const flightId = window.location.pathname.substring(15);


	useEffect(() => {
		const fetchFlight = async (id) => {
			const response = await spaceX.get(`/launches/${id}`);
			setFlight(response.data);
		}
		fetchFlight(flightId);
	}, [flightId]);

	useEffect(() => {
		const fetchLaunchPad = async (id) => {
			const response = await spaceX.get(`/launchpads/${id}`)
			setLaunchPad(response.data);
		}
		if (flight) {
			fetchLaunchPad(flight.launchpad)
		}
	}, [flight])

	// renderCalendarButton(flightId) {
	// 	if (this.props.isSignedIn === true) {
	// 		return <CalendarButton flightDetails flightId={flightId} />;
	// 	} else {
	// 		return null;
	// 	}
	// }

	return (
		<Details>
			<LeftSide>
				{flight && launchpad ? (
					<Container title={flight.name}>
						<Header>
							<Logo src={launchpad.images.large} alt={launchpad.full_name}></Logo>
							<div>
								<h1>{new Date(flight.date_utc).toDateString()}</h1>
								<h1>{`${launchpad.locality}, ${launchpad.region}`}</h1>
							</div>
						</Header>
						<Description>
							<p>{flight.details === null ? "Description will launch soon" : flight.details}</p>
						</Description>
						{/* Add 2 buttons and little map based on lon and lat*/}
						<GoogleMap lat={launchpad.latitude} lng={launchpad.longitude} />
						<ButtonsWrapper>
							<StyledButton>Add to Calendar</StyledButton>
							<Link to="/">
								<StyledButton>
									Flight list
								</StyledButton>
							</Link>

						</ButtonsWrapper>
					</Container>
				) : null}
			</LeftSide>

			<RightSide>

				<Container title={"August 2021"}>

				</Container>

			</RightSide>
		</Details>
	);
}

export default DetailsView;