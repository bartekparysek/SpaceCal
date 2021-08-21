import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GrMoreVertical, GrClose, GrLinkNext } from 'react-icons/gr'
import Link from './Link'

const CardA = styled.div`
background-color:#F7F7F7;

`;
//  CSS for styling three dot button in card
//

const CardB = styled.div`

`
const FlipButton = styled.button`
  top: 0;
  right: 0;
  padding: 33px 30px;
  z-index: 6;
`;
const WrapperButton = styled.button`

`;


const FlightCard = ({ flight, launchpad }) => {
  // hold state if its cardA or cardB side
  const [side, setSide] = useState('A');
  const flightDate = new Date(flight.date_utc);
  return (
    <>
      {side === 'A' ? (
        <CardA key={flight.id}>
          <h3>{flight.name}</h3>
          <p>{`${launchpad.locality}, ${launchpad.region}`}</p>
          <p>{flightDate.toDateString()}</p>

          <FlipButton >
            <GrMoreVertical />
          </FlipButton>
        </CardA>

      ) : (
        <CardB>
          {/* add onClick event handlers */}
          <Link to={`/flightdetails/${flight.id}`} >
            <GrLinkNext />
            <p>CHECK DETAILS</p>
          </Link>

          <WrapperButton>
            <GrLinkNext />
            <p>ADD TO GOOGLE CALENDAR</p>
          </WrapperButton>





          {/*
            2 positions:
            - Add to Calendar Button
            - Check Details Link
           */}
          <FlipButton>
            <GrClose />
          </FlipButton>
        </CardB>
      )}

    </>
  );
}

export default FlightCard
