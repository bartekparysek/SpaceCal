import React from "react";
import styled from "styled-components";
import { takeMonth, takeWeek } from "./buildCalendar";

const CalendarContainer = styled.div`
	background-color: #f7f7f7;
`;

const Calendar = () => {
	const wGen = takeMonth()();
	console.log(wGen)
	return <CalendarContainer>{ }</CalendarContainer>;
};

export default Calendar;
