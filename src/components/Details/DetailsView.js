import React, { useState, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns'
import CalendarButton from '../CalendarButton'
import Container from '../Container';
import { LeftSide, RightSide } from '../Home/HomeView';
import BasicInfo from './BasicInfo';
import Buttons from './Buttons';

import Spinner from '../Spinner';
const MapBox = lazy(() => import('./MapBox'));
const Calendar = lazy(() => import('../Calendar/Calendar'));

export const Section = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.5rem;
	a {
		padding: 0.5rem 0;
	}
	h1{
		color:#fff;
	}
	@media (max-width: 500px){
		padding-right: 1rem;
	}

`;
const Details = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 500px){
		flex-direction: column;
	}
`;

const Description = styled.div`
	padding: 0.5rem 0;
	text-align: justify;
	font-size:1em;
`;

const DetailsView = ({ children, user, flights, launchpads, selectedDate, setSelectedDate }) => {
	const [flight, setFlight] = useState(null);
	const [launchpad, setLaunchPad] = useState(null);
	const flightId = window.location.pathname.substring(15);

	useEffect(() => {
		if (flights) {
			const [searchedFlight] = flights.filter(el => el.id === flightId);
			setFlight(searchedFlight);
		}
	}, [flightId, flights]);

	useEffect(() => {
		if (launchpads && flight) {
			const [searchedLaunchpad] = launchpads.filter(el => el.id === flight.launchpad);
			setLaunchPad(searchedLaunchpad);
		}
	}, [launchpads, flight])

	return (
		<Details>
			<LeftSide>
				<Container title={!flight ? "Loading..." : flight.name}>
					<Suspense fallback={<Spinner />}>
						{flight && launchpad && (
							<div>
								<BasicInfo flight={flight} launchpad={launchpad} />
								<Description>
									<p>{flight.details === null ? "Description will launch soon" : flight.details}</p>
								</Description>
								<MapBox launchpad={launchpad} lat={launchpad.latitude} lng={launchpad.longitude} />
								<Buttons>
									{user.isSignedIn && <CalendarButton flight={flight} launchpad={launchpad} button={true} />}
								</Buttons>
							</div>
						)}
					</Suspense>
				</Container>
			</LeftSide>

			<RightSide>
				<Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} flights={flights} />
			</RightSide>
		</Details>
	);
}

export default DetailsView;