import React from 'react';
import { MdEvent } from 'react-icons/md';
import { StyledButton } from './Details/Buttons'



const CalendarButton = ({ flight, launchpad, button }) => {

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
      <>
         {button &&
            <StyledButton aria-label={'Add to Calendar'} onClick={() => addEvent()} >
               <MdEvent />
               Add to Calendar
            </StyledButton>
         }
         {!button && <p onClick={() => addEvent()}>ADD TO CALENDAR</p>}
      </>
   );
}



export default CalendarButton;