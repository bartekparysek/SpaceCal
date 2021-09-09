import React, { useState } from "react";
import styled from "styled-components";
import { format, isSameDay, isSameMonth } from 'date-fns'
import { takeMonth, } from "./buildCalendar";


const CalendarContainer = styled.div`
	background-color: #f7f7f7;
	border-radius: 8px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
`;

const CalList = styled.ul`
	display:grid;
	padding:0 0 1rem 0;
	margin:0;
`;

const CalWeek = styled.li`
	display:grid;
	grid-template-columns: repeat(7, 4.56rem);
	justify-items: center;
`;
const CalDayName = styled.li`
	display:grid;
	grid-template-columns: repeat(7, 4.56rem);
	justify-items: center;
	color: #D8D6D6;
	padding:1rem 0;
`;

const StyledGrid = styled.div`
	display:flex;
	justify-content:center;
	padding: 1rem 2rem;
	max-width: 1rem;
	border-radius: 8px;
	background-color: ${props => props.background};
	cursor: pointer;
	color: ${props => props.color};
	div{
		padding:0;
	}
`

const WeekNames = () => {
	return (
		<CalDayName key={"weekDays"}>
			{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (<div key={day}> {day}</div>))}
		</CalDayName >
	);
}

const Calendar = ({ selectedDate, setSelectedDate }) => {

	const month = takeMonth(selectedDate)();
	const dayColor = (day) => {
		if (!isSameMonth(day, selectedDate)) return "#D8D6D6";
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
							<div>{format(day, "d")}</div>
						</StyledGrid>
					)
					)}
				</CalWeek>)
			})}

		</CalList>
	</CalendarContainer>;
};

export default Calendar;
