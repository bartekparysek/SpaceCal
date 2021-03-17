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
      const flight = this.props.flights.filter(flight => flight.id === flightId)
      const event = {
         'summary': flight.name,
         'description': flight.description,
         'start': {
            'dateTime':
         },
      }
      const request = window.gapi.client.calendar.events.insert({
         'calendarId': this.props.email,
         'resource': event
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