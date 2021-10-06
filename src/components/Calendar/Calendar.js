import React from "react";
import styled from "styled-components";
import { format, isSameDay, isSameMonth } from 'date-fns'
import { takeMonth, } from "./buildCalendar";


const CalendarContainer = styled.div`
	background-color: #f7f7f7;
	border-radius: 8px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
	width: 25vw;
  min-width: calc(100% - 2rem);
	/* height: 36vh;
	max-height: calc(100% - 1rem); */
	padding: clamp(0.75rem, 2%, 1rem) 0;
	align-self: center;
`;

const CalList = styled.ul`
	display:grid;
	padding:0 0 1rem 0;
	margin:0;
	justify-items: center;
`;

const CalWeek = styled.li`
	display:grid;
	grid-template-columns: repeat(7, minmax(2rem, 4rem));
	justify-items: center;
	font-size: clamp(0.75rem, 1rem, 1.5rem);
`;
const CalDayName = styled.li`
	display:grid;
	grid-template-columns: repeat(7, minmax(2rem, 4rem));
	justify-items: center;
	padding: clamp(0.5rem, 3%, 1rem) 0;
	font-size: clamp(0.75rem, 1rem, 1.5rem);;
`;

const StyledGrid = styled.div`
	display:flex;
	justify-content:center;
	padding:clamp(0.5rem, 2%, 1rem) clamp(1.25rem,4%, 1.75rem);
	max-width: 1rem;
	border-radius: 5px;
	background-color: ${props => props.background};
	cursor: pointer;
	color: ${props => props.color};
	div{
		padding:0;
		font-size: clamp(0.75rem, 1rem, 1.5rem);
	}
`;

const MarkDay = styled.div`
	display:flex;
	flex-direction: column-reverse;
	align-items: center;
	&:after{
		position: absolute;
		content: " ";
		border-top: 2px solid #e84118;
		border-bottom: 2px solid #e84118;
		border-radius: 2px;
		width:1.5rem;
		display: block;
	}
`;

const WeekNames = () => {
	return (
		<CalDayName key={"weekDays"}>
			{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (<div key={day}> {day}</div>))}
		</CalDayName >
	);
}

const Calendar = ({ selectedDate, setSelectedDate, flights = [] }) => {

	const Day = ({ day }) => {
		const flightDays = flights.map(el => new Date(el.date_utc).toLocaleDateString());
		if (flightDays.includes(new Date(day).toLocaleDateString())) {
			return (
				<MarkDay>
					{format(day, "d")}
				</MarkDay>);
		} else {
			return <div>{format(day, "d")}</div>
		}
	}

	const month = takeMonth(selectedDate)();
	const dayColor = (day) => {
		if (!isSameMonth(day, selectedDate)) return "#5E727D";
	}
	const backgroundColor = (day) => {
		if (isSameDay(day, selectedDate)) return "#74b9ff";
	}

	return <CalendarContainer>
		<CalList>
			<WeekNames />
			{month.map((week, i) => {
				return (<CalWeek key={week[i]}>
					{week.map(day => (
						<StyledGrid key={format(day, "DDD")} onClick={() => setSelectedDate(day)} background={backgroundColor(day)} color={dayColor(day)} >
							{flights && <Day day={day} />}
						</StyledGrid>
					)
					)}
				</CalWeek>)
			})}

		</CalList>
	</CalendarContainer>;
};

export default Calendar;
