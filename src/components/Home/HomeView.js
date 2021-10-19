import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import Container from "../Container";
import Upcoming from "./Upcoming";
import Spinner from '../Spinner';

const FlightCard = lazy(() => import('../FlightCard'));

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 clamp(0.25rem, 0.5rem, 1rem);
	box-sizing: content-box !important;
	align-items: center;
`;
export const RightSide = styled.div`
	padding: 0 clamp(0.25rem, 0.5rem, 1rem);
	display:flex;
	flex-direction: column;
	align-items: center;
`;
const Home = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 500px){
		flex-direction: column;
	}
`;

const HomeView = ({ user, flights, launchpads, children, selectedDate, setSelectedDate }) => {
	const launchpad = (flight) => {
		if (launchpads && flights) {
			const launchpadData = launchpads.filter(
				(pad) => pad.id === flight.launchpad
			);
			return launchpadData[0];
		}
	};

	return (
		<Home>
			<LeftSide>
				<Container title={"Next launch"}>
					<Suspense fallback={<Spinner />}>
						{flights && (<FlightCard user={user} flight={flights[0]} launchpad={launchpad(flights[0])} />)}
					</Suspense>
				</Container>
				{children}
			</LeftSide>

			<RightSide>
				<Container title={"Upcoming launches"}>
					<Upcoming user={user} flights={flights} launchpads={launchpads} />
				</Container>
			</RightSide>
		</Home >
	);
};

export default HomeView;