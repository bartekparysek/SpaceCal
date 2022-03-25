import React, { Suspense, lazy } from "react";

import Spinner from "../Spinner";
import styled from "styled-components";

const FlightCard = lazy(() => import("../FlipCard/FlightCard"));

const ThreeCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Card = styled.div`
  position: relative;
  min-height: 15vh;
  margin-bottom: 1rem;
`;

const Upcoming = ({ flights, launchpads, user }) => {
  const launchpad = (launchpadId) => {
    if (launchpads) {
      const launchpadData = launchpads.filter((pad) => pad.id === launchpadId);
      return launchpadData[0];
    }
  };
  return (
    <>
      {flights && (
        <Suspense fallback={<Spinner />}>
          <ThreeCards>
            <Card>
              <FlightCard
                user={user}
                flight={flights[1]}
                launchpad={launchpad(flights[1]?.launchpad)}
              />
            </Card>

            {flights.length > 2 && (
              <>
                <Card>
                  <FlightCard
                    user={user}
                    flight={flights[2]}
                    launchpad={launchpad(flights[2]?.launchpad)}
                  />
                </Card>

                <Card>
                  <FlightCard
                    user={user}
                    flight={flights[3]}
                    launchpad={launchpad(flights[3]?.launchpad)}
                  />
                </Card>
              </>
            )}
          </ThreeCards>
        </Suspense>
      )}
    </>
  );
};

export default Upcoming;
