import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';
import { fetchUpcomingLaunches, goToFlightDetails } from '../actions';
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

export const StyledWrapper = styled.div`
   display: flex;
   padding: 0.5rem;

`;

class NextFlight extends React.Component {
   componentDidMount() {
      this.props.fetchUpcomingLaunches();
   }

   renderFlight() {
      const flights = this.props.flights;
      if (!flights) {
         return null;
      }
      let flight = flights[0];
      return (
         <React.Fragment>
            <StyledWrapper>
               <h3>{flight.name}</h3>
               <div>{flight.date_utc}</div>
               <Link onClick={this.props.goToFlightDetails(flight.id)} to={`/flightdetails/${flight.id}`} >
                  Flight Details
                  <MdExpandMore />
               </Link>
            </StyledWrapper>
            <CalendarButton />
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
   return { flights: state.flights[0] }
}

export default connect(mapStateToProps, { fetchUpcomingLaunches, goToFlightDetails })(NextFlight);