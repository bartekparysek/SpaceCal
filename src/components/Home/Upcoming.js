import React from 'react'
import FlightCard from '../FlightCard'
import styled from 'styled-components'

const ThreeCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Card = styled.div`
  position: relative;
  min-height: 15vh;
  margin-bottom: 1rem;
`;

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
        <ThreeCards>
          <Card>
            <FlightCard
              user={user}
              flight={flights[1]}
              launchpad={launchpad(flights[1].launchpad)}
            />
          </Card>

          <Card>
            <FlightCard
              user={user}
              flight={flights[2]}
              launchpad={launchpad(flights[2].launchpad)}
            />
          </Card>

          <Card>
            <FlightCard
              user={user}
              flight={flights[3]}
              launchpad={launchpad(flights[3].launchpad)}
            />
          </Card>

        </ThreeCards>

      )}
    </>
  )
}

export default Upcoming
