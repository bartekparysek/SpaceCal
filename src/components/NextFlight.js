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
   margin: 0.5rem;
   border-radius:10px;
   a{
      font-size: 12px;
      padding: 0;
   }

`;

export const StyledWrapper = styled.div`
   //display: flex;
   padding:  0.5rem 0.5rem 0 0.5rem ;
`;

export const FlightHeader = styled.div`
   display:flex;
   align-items:center;
   justify-content: space-around;

   p{
      padding-left:0.5rem ;
      font-size: 12px;

   }
   @media (max-width: 375px){
      justify-content:flex-start;
      flex-direction: column;
      align-items: flex-start;

      p{
         padding:0;
      }

   }
`;
export const FlightBody = styled.div`
   font-size: 14px;
   white-space: pre-wrap;
   display: inline-block;
   @media (max-width: 375px){
      padding-top:0.2rem;
   }
`;

export const Expand = styled.div`
   display:flex;
   justify-content:center;
   svg{
      height: 1.75em;
      width: 1.75em;
      padding-top: 0.1rem ;
   }
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
               <FlightHeader>
                  <h3>{flight.name}</h3>
                  <p>{flightDate.toDateString()}</p>
               </FlightHeader>
               <FlightBody>
                  {this.renderLaunchPad(flight.launchpad)}
                  <Expand>
                     <Link to={`/flightdetails/${flight.id}`} >
                        <MdExpandMore />
                     </Link>
                  </Expand>

               </FlightBody>
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