import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdChevronLeft } from 'react-icons/md';
import { fetchUpcomingLaunches } from '../actions';
import Link from './Link';

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
   padding: 0 2.5rem;
   display:inline-flex;
   align-items:center;
   margin: 0.75rem 0;
   white-space: nowrap;
   svg{
      height: 2em;
      width: 2em;
   }

`;

export const StyledWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   padding: 0 0.5rem 0 0;

`;

class FlightDetails extends React.Component {
   componentDidMount() {
      this.props.fetchUpcomingLaunches();


   }

   renderDetails() {
      const flights = this.props.flights;
      if (!flights) {
         return <div>Loading...</div>;
      }
      const { id } = this.props.match.params;
      const details = flights.filter(launch => launch.id === id);

      return (
         <div>
            <h3>{details[0].name}</h3>
            <p>{details[0].details}</p>
            <p>{details[0].date_utc}</p>

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
   return { flights: state.flights[0] }
}

export default connect(mapStateToProps, { fetchUpcomingLaunches })(FlightDetails);