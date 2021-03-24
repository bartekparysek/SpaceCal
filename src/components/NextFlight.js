import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';
import { fetchUpcomingLaunches, fetchLaunchPads } from '../actions';
import Link from './Link';
import CalendarButton from './CalendarButton';

export const StyledFlight = styled.div`
   display:flex;
   justify-content: space-between;
   background-color: #7F8FA6;
   text-align:center;
   //padding: 1rem;
   margin: 0.5rem;
   border-radius:10px;
   svg{
      height: 2em;
      width: 2em;
      padding: 0rem 2rem;
   }

`;
const MiniWprapper = styled.div`
   display:flex;
   align-items:center;
   justify-content: space-around;
   p{
      padding:0  1rem ;

   }
`;


export const StyledWrapper = styled.div`
   //display: flex;
   padding: 0.5rem;

`;

class NextFlight extends React.Component {
   componentDidMount() {
      this.props.fetchLaunchPads();
      this.props.fetchUpcomingLaunches();

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

   renderFlight() {
      const flights = this.props.flights;
      if (!flights) {
         return null;
      }
      let flight = flights[0];
      const flightDate = new Date(flight.date_utc);
      return (
         <React.Fragment>
            <StyledWrapper>
               <MiniWprapper>
                  <h3>{flight.name}</h3>
                  <p>{flightDate.toDateString()}</p>
               </MiniWprapper>
               <div>
                  {this.renderLaunchPad(flight.launchpad)}
                  <Link to={`/flightdetails/${flight.id}`} >
                     Flight Details
                  <MdExpandMore />
                  </Link>
               </div>
            </StyledWrapper>
            {this.renderCalendarButton(flight.id)}
         </React.Fragment>


      );
   }

   render() {
      return (
         <div>
            <StyledFlight>
               {this.renderFlight()}
            </StyledFlight>

         </div>
      );
   }
}
const mapStateToProps = state => {
   return { flights: state.flights[0], isSignedIn: state.auth.isSignedIn, launchpads: Object.values(state.launchpads) }
}

export default connect(mapStateToProps, { fetchUpcomingLaunches, fetchLaunchPads })(NextFlight);