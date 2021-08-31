import React from 'react';
import styled from 'styled-components';
import { MdEvent } from 'react-icons/md';
import { StyledButton } from './Details/DetailsView'

// const StyledButton = styled.button`
//    display:flex;
//    align-items: center;
//    background-color: #27292F;
//    border-radius: 8px;
//    color: #fff;
//    border: none;
//    padding: ${props => props.flightDetails ? "0.5rem" : "0 0.5rem"};
//    margin:0;
//    svg{
//       height: 2rem;
//       width: 2rem;
//       //padding: 0 1rem;
//    }
//    @media (max-width: 450px){
//       flex-direction:column;
//       justify-content: center;
//       white-space: normal;
//       svg {
//          height: 2rem;
//          width: 2rem;
//       }
//    }
// `;

const CalendarButton = ({ flight, launchpad }) => {

   const addEvent = () => {

      const flightDate = new Date(flight.date_utc);
      const event = {
         'summary': flight.name,
         'location': launchpad.locality,
         'description': flight.description,
         'start': {
            'dateTime': flightDate.toISOString()
         },
         'end': {
            'dateTime': flightDate.toISOString(),
            'timeZone': 'Europe/Zurich'
         },
         'reminders': {
            'useDefault': false,
            'overrides': [
               { 'method': 'email', 'minutes': 24 * 60 },
               { 'method': 'popup', 'minutes': 10 }
            ]
         },

      }
      const request = window.gapi.client.calendar.events.insert({
         'calendarId': 'primary',
         'resource': event
      });
      request.execute((event) => {
         window.open(event.htmlLink);
      });
   };

   return (
      <StyledButton flightDetails={flight.details} onClick={() => addEvent()} >
         <MdEvent />
         Add to Calendar
      </StyledButton>
   );
}



export default CalendarButton;