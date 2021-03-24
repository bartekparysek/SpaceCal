import React from 'react';
import { connect } from 'react-redux';
import { MdExpandMore } from 'react-icons/md';
import { StyledFlight } from './NextFlight';
import Link from './Link';
import CalendarButton from './CalendarButton';


class FiveFlights extends React.Component {
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
   };
   renderInfo() {
      if (!this.props.flights) {
         return null;
      }

      const fiveFlights = this.props.flights.filter((flight, index) =>
         index >= 1 && index <= 5 ? flight : null
      );


      return (
         fiveFlights.map(flight => {
            const flightDate = new Date(flight.date_utc);
            return (
               <StyledFlight key={flight.id}>
                  <h3>{flight.name}</h3>
                  <p>{flightDate.toDateString()}</p>
                  {this.renderLaunchPad(flight.launchpad)}
                  <Link to={`/flightdetails/${flight.id}`} >
                     Flight Details
                     <MdExpandMore />
                  </Link>
                  {this.renderCalendarButton(flight.id)}
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
   return { flights: state.flights[0], isSignedIn: state.auth.isSignedIn, launchpads: Object.values(state.launchpads) }
};

export default connect(mapStateToProps, {})(FiveFlights);