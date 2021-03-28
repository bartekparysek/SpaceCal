import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { MdExpandMore } from 'react-icons/md';
import { fetchUpcomingLaunches, fetchLaunchPads } from '../actions';
import Link from './Link';
import CalendarButton from './CalendarButton';

export const StyledFlight = styled.div`
   display:flex;
   justify-content: space-between;
   background-color: #7F8FA6;
   margin: 0.5rem;
   border-radius:10px;
   a{
      font-size: 12px;
      padding: 0;
   }
   @media (min-width: 768px){
      margin: 1rem;
      font-size: 22px;
   }

`;

export const StyledWrapper = styled.div`
   padding: 0.5rem;
   width: 75vw;
   margin: 0 auto;

   @media (max-width: 375px){
      //display: block;
      width: 98%;
   }
   @media (min-width:768px){
      padding: 1rem;
   }


   ${({ isSignedIn }) => isSignedIn && css`
      padding: 0.5rem 0 0 0.5rem;
      display:block;

      @media (max-width: 540px) {
         margin: 0;
         width: inherit;
      }

   `}
`;

export const FlightInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between ;
   margin: 0 auto;

   @media (max-width: 280px) {
      display:block;
   }

   ${({ isSignedIn }) => isSignedIn && css`

      @media (max-width: 540px){
         display:block;
         margin: 0;
      }
      @media (min-width: 1440px){
         justify-content: space-around;
      }
   `}
`;

export const FlightHeader = styled.div`
   display:flex;
   align-items:center;
   justify-content: space-around;

   p{
      padding:0 1rem ;
      font-size: 15px;

   }
   @media  (max-width: 500px){
      justify-content:flex-start;
      flex-direction: column;
      align-items: flex-start;

      p{
         padding:0;
         font-size: 12px;
      }

   }
`;
export const FlightLocalization = styled.div`
   font-size: 16px;
   white-space: pre-wrap;
   display: inline-block;
   padding-left: 0.2rem;
   @media (max-width: 425px){
      padding-top:0.2rem;
      padding-left: 0;
      font-size: 13px;
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
            <StyledWrapper isSignedIn={this.props.isSignedIn}>
               <FlightInfo isSignedIn={this.props.isSignedIn}>
                  <FlightHeader>
                     <h3>{flight.name}</h3>
                     <p>{flightDate.toDateString()}</p>
                  </FlightHeader>
                  <FlightLocalization>
                     {this.renderLaunchPad(flight.launchpad)}
                  </FlightLocalization>
               </FlightInfo>
               <Expand>
                  <Link to={`/flightdetails/${flight.id}`} >
                     <MdExpandMore />
                  </Link>
               </Expand>
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