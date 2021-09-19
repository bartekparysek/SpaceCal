import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns'
import CalendarButton from '../CalendarButton'
import Container from '../Container';
import spaceX from '../../apis/spaceX';
import { LeftSide, RightSide } from '../Home/HomeView';
import BasicInfo from './BasicInfo';
import Buttons from './Buttons';
import Calendar from '../Calendar/Calendar'
import MapBox from './MapBox';

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
`;
const Details = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Description = styled.div`
	padding: 0.5rem 0;
	text-align: justify;
	font-size:0.8em;
`;

const DetailsView = ({ children, user }) => {
	const [selectedDate, setSelectedDate] = useState(new Date());
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

	return (
		<Details>
			<LeftSide>
				{flight && launchpad ? (
					<Container title={flight.name}>
						<BasicInfo flight={flight} launchpad={launchpad} />
						<Description>
							<p>{flight.details === null ? "Description will launch soon" : flight.details}</p>
						</Description>
						<MapBox launchpad={launchpad} lat={launchpad.latitude} lng={launchpad.longitude} />
						<Buttons>
							{user.isSignedIn && <CalendarButton flight={flight} launchpad={launchpad} button={true} />}
						</Buttons>

					</Container>
				) : null}
			</LeftSide>

			<RightSide>

				<Container setSelectedDate={setSelectedDate} calendar title={`${format(selectedDate, "MMMM")} ${format(selectedDate, "yyyy")}`}>
					<Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
				</Container>

			</RightSide>
		</Details>
	);
}

export default DetailsView;