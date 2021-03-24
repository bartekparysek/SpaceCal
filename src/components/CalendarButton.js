import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdEvent } from 'react-icons/md';

const StyledButton = styled.button`
   display:flex;
   align-items: center;
   background-color: #27292F;
   border-radius: 0 10px 10px 0;
   color: #fff;
   border: none;
   padding: 0 0.5em;
   margin:0;

   svg{
      height: 3rem;
      width: 3rem;
      padding: 0 1rem;
   }
`;

class CalendarButton extends React.Component {
   addEvent = () => {
      const flightId = this.props.flightId;
      const flight = this.props.flights.filter(flight => flight.id === flightId);
      const flightDate = new Date(flight[0].date_utc);
      const event = {
         'summary': flight[0].name,
         'location': 'space',
         'description': flight[0].description,
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
      request.execute(() => {
         window.open(event.htmlLink);
      });
   };

   render() {
      return (
         <React.Fragment >
            <StyledButton onClick={this.addEvent} >
               <MdEvent />
               Add to Calendar
            </StyledButton>
         </React.Fragment>
      );
   }
}

const mapStateToProps = state => {
   return {
      isSignedIn: state.auth.isSignedIn,
      email: state.auth.userEmail,
      flights: state.flights[0]
   }
}

export default connect(mapStateToProps,)(CalendarButton);