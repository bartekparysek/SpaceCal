import React, { useState, useEffect, lazy, Suspense } from "react";
import styled from "styled-components";
import { format } from 'date-fns';
import Container from "../Container";
import spaceX from "../../apis/spaceX";
import Calendar from "../Calendar/Calendar";
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

const HomeView = ({ user }) => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [flights, setFlights] = useState(null);
	const [launchpads, setLaunchpads] = useState(null);

	useEffect(() => {
		const fetchFlights = async () => {
			const response = await spaceX.get("/launches/upcoming");
			setFlights(response.data);
		};
		const fetchLaunchPads = async () => {
			const response = await spaceX.get("/launchpads");
			setLaunchpads(response.data);
		};
		fetchFlights();
		fetchLaunchPads();
	}, []);

	const launchpad = (launchpadId) => {
		if (launchpads) {
			const launchpadData = launchpads.filter(
				(pad) => pad.id === launchpadId
			);
			return launchpadData[0];
		}
	};

	return (
		<Home>
			<LeftSide>
				<Container title={"Next launch"}>
					<Suspense fallback={<Spinner />}>
						{flights && (
							<FlightCard
								user={user}
								flight={flights[0]}
								launchpad={launchpad(flights[0].launchpad)}
							/>
						)}
					</Suspense>

				</Container>
				<Container setSelectedDate={setSelectedDate} calendar title={`${format(selectedDate, "MMMM")} ${format(selectedDate, "yyyy")}`}>
					<Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} flights={flights} />
				</Container>
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
