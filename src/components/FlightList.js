import React from 'react';
import NextFlight from './NextFlight';
import FiveFlights from './Flights';

const FlightList = () => {
   return (
      <div>
         <h2>Next launch</h2>
         <NextFlight />
         <h2>Upcoming launches</h2>
         <FiveFlights />
      </div>

   );
}

export default FlightList;