import React from 'react';
import { connect } from 'react-redux';
import { MdExpandMore } from 'react-icons/md';
import { StyledFlight, StyledWrapper, FlightLocalization, Expand, FlightHeader, FlightInfo } from './NextFlight';
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
      const { launchpads } = this.props;
      const launchpad = launchpads.filter(pad => pad.id === flightLaunchPad);
      if (!launchpad[0] || launchpad[0] === undefined) {
         return null
      } else {
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