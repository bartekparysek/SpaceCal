import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { format } from 'date-fns';
import Container from "../Container";
import spaceX from "../../apis/spaceX";
import FlightCard from "../FlightCard";
import Calendar from "../Calendar/Calendar";
import Upcoming from "./Upcoming";

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
`;
export const RightSide = styled.div`
	padding: 0 1rem;
`;
const Home = styled.div`
	display: flex;
	justify-content: space-between;
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
					{flights && (
						<FlightCard
							user={user}
							flight={flights[0]}
							launchpad={launchpad(flights[0].launchpad)}
						/>
					)}
				</Container>
				<Container title={`${format(selectedDate, "MMMM")} ${format(selectedDate, "yyyy")}`}>
					<Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
				</Container>
			</LeftSide>

			<RightSide>
				<Container title={"Upcoming launches"}>
					<Upcoming user={user} flights={flights} launchpads={launchpads} />
				</Container>
			</RightSide>
		</Home>
	);
};

export default HomeView;
