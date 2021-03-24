import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdChevronLeft } from 'react-icons/md';
import { fetchUpcomingLaunches, fetchLaunchPads } from '../actions';
import Link from './Link';
import CalendarButton from './CalendarButton';

const StyledDetails = styled.div`
   background-color: #7F8FA6;
   text-align:center;
   padding: 1rem;
   margin: 0.5rem;
   border-radius:10px;
`;

export const StyledButton = styled.button`
   background-color:#27292F;
   border-radius:10px;
   color: #fff;
   border: none;
   padding: 0 1rem;
   display:inline-flex;
   align-items:center;
   margin: 0.75rem 0;
   white-space: nowrap;
   @media (max-width: 375px){
      padding: 0.6rem;
   }
   svg{
      height: 2em;
      width: 2em;
   }

`;

export const StyledWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding: 0 0.5rem 0 0;

`;

class FlightDetails extends React.Component {
   componentDidMount() {
      this.props.fetchLaunchPads();
      this.props.fetchUpcomingLaunches();
   }

   renderLaunchPad(flightLaunchPad) {
      const launchpads = this.props.launchpads;
      if (!launchpads) {
         return null;
      } else {
         const launchpad = launchpads.filter(pad => pad.id === flightLaunchPad);
         return (
            <p>{`${launchpad[0].locality}, ${launchpad[0].region}`}</p>

         );

      }

   }

   renderCalendarButton(flightId) {
      if (this.props.isSignedIn === true) {
         return (
            <CalendarButton flightId={flightId} />
         );
      } else {
         return null;
      }
   };

   renderDetails() {
      const flights = this.props.flights;
      if (!flights) {
         return <div>Loading...</div>;
      }
      const { id } = this.props.match.params;
      const details = flights.filter(launch => launch.id === id);
      const flightDate = new Date(details[0].date_utc);

      return (
         <div>
            <h3>{details[0].name}</h3>
            <p>{details[0].details}</p>
            <p>{flightDate.toDateString()}</p>
            {this.renderCalendarButton(details[0].id)}
            {this.renderLaunchPad(details[0].launchpad)}
         </div>
      );



   }

   render() {
      return (
         <React.Fragment>
            <StyledWrapper>
               <h2>Flight Details</h2>
               <StyledButton>
                  <MdChevronLeft />
                  <Link to="/">
                     Flight List
                  </Link>
               </StyledButton>
            </StyledWrapper>
            <StyledDetails>
               {this.renderDetails()}
            </StyledDetails>
         </React.Fragment>
      );
   };
}

const mapStateToProps = (state) => {
   return { flights: state.flights[0], isSignedIn: state.auth.isSignedIn, launchpads: Object.values(state.launchpads) }
}

export default connect(mapStateToProps, { fetchUpcomingLaunches, fetchLaunchPads })(FlightDetails);