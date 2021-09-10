import React from 'react'
import FlightCard from '../FlightCard'

const Upcoming = ({ flights, launchpads, user }) => {

  const launchpad = (launchpadId) => {
    if (launchpads) {
      const launchpadData = launchpads.filter(
        (pad) => pad.id === launchpadId
      );
      return launchpadData[0];
    }
  };
  return (
    <>
      {flights && (
        <>
          <FlightCard
            user={user}
            flight={flights[1]}
            launchpad={launchpad(flights[1].launchpad)}
          />

          <FlightCard
            user={user}
            flight={flights[1]}
            launchpad={launchpad(flights[1].launchpad)}
          />
          <FlightCard
            user={user}
            flight={flights[2]}
            launchpad={launchpad(flights[2].launchpad)}
          />
        </>

      )}
    </>
  )
}

export default Upcoming
