import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdChevronLeft } from 'react-icons/md';
import { fetchUpcomingLaunches, fetchLaunchPads } from '../actions';
import Link from './Link';
import CalendarButton from './CalendarButton';

const StyledDetails = styled.div`
   background-color: #7F8FA6;
   padding: 1rem;
   margin: 0 0.5rem;
   border-radius:10px;
`;

export const StyledButton = styled.button`
   background-color:#27292F;
   border-radius:10px;
   color: #fff;
   border: none;
   padding: 0.33rem 1.94rem;
   display:inline-flex;
   align-items:center;
   white-space: nowrap;
   @media (max-width: 375px){
      padding: 0.33rem 0.5rem;
   }
   svg{
      height: 2em;
      width: 2em;
   }

`;

export const Section = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding-right:0.5rem;
   a{
      padding:0.5rem 0;
   }

`;
const RenderedDetails = styled.div`
   display: flex;
   flex-direction: column;

`;

const FlightHeader = styled.div`
   display: flex;
   padding: 1rem 0;

   p ~ p{
      margin-left: 1rem;
   }
`;


const FlightDescription = styled.div`
   width: 75vw;
   padding: 0.5rem 0 ;

   @media (max-width: 520px){
      flex-direction: column;
   }
   @media (max-width: 2560px){
      width: 65vw;
   }
   p{
      line-height: 1.5;
      margin-left: auto;
      margin-right: auto;

   }
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
            <CalendarButton flightDetails flightId={flightId} />
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
         <RenderedDetails>
            <h3>{details[0].name}</h3>
            <FlightHeader >
               {this.renderLaunchPad(details[0].launchpad)}
               <p>{flightDate.toDateString()}</p>
            </FlightHeader>
            <FlightDescription >
               <p>{details[0].details === null ? 'Description will launch soon...' : details[0].details}</p>
            </FlightDescription>
            <div>
               {this.renderCalendarButton(details[0].id)}
            </div>
         </RenderedDetails>
      );



   }

   render() {
      return (
         <React.Fragment>
            <Section>
               <h2>Flight Details</h2>
               <Link to="/">
                  <StyledButton >
                     <MdChevronLeft />
                     Flight List
                  </StyledButton>
               </Link>
            </Section>
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