import React from "react";
import styled from "styled-components";
import { takeWeek } from "./buildCalendar";

const CalendarContainer = styled.div`
	background-color: #f7f7f7;
`;

const Calendar = () => {
	const data = takeWeek();
	return <CalendarContainer>{JSON.stringify(data)}</CalendarContainer>;
};

export default Calendar;
