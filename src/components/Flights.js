import React from 'react';
import { connect } from 'react-redux';
import { StyledFlight } from './NextFlight';

class FiveFlights extends React.Component {
   renderInfo() {
      if (!this.props.flights) {
         return null;
      }

      const fiveFlights = this.props.flights.filter((flight, index) =>
         index >= 1 && index <= 5 ? flight : null
      );

      return (
         fiveFlights.map(flight => {
            return (
               <StyledFlight key={flight.id}>
                  <h3>{flight.name}</h3>
                  <p>{flight.date_utc}</p>
               </StyledFlight >
            );
         }
         ));
   };

   render() {
      return (
         <div>{this.renderInfo()}</div>
      );
   };
}


const mapStateToProps = state => {
   return { flights: state.flights[0] }
};

export default connect(mapStateToProps)(FiveFlights);