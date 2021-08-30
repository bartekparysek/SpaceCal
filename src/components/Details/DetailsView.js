import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Link from "../Link";
import CalendarButton from "../CalendarButton";
import Container from '../Container';
import spaceX from "../../apis/spaceX";
import { LeftSide, RightSide } from "../Home/HomeView";

export const StyledButton = styled.button`
	font-size: 14px;
	background-color: #27292f;
	border-radius: 10px;
	color: #fff;
	border: none;
	padding: 0.5rem 1.94rem;
	display: inline-flex;
	align-items: center;
	white-space: nowrap;
	@media screen and (max-width: 375px) {
		padding: 0.33rem 0.5rem;
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
						<Logo src={launchpad.images.large} alt={launchpad.full_name}></Logo>
						<p>{new Date(flight.date_utc).toDateString()}</p>
						<p>{`${launchpad.locality}, ${launchpad.region}`}</p>
						<p>{flight.details === null ? "Description will launch soon" : flight.details}</p>

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