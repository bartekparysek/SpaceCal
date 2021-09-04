import React from "react";
import styled from "styled-components";
import { takeMonth, takeWeek } from "./buildCalendar";

const CalendarContainer = styled.div`
	background-color: #f7f7f7;
`;

const Calendar = () => {
	const wGen = takeWeek();
	const data = wGen();
	return <CalendarContainer>{JSON.stringify(data)}</CalendarContainer>;
};

export default Calendar;
