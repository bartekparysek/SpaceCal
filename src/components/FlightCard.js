import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GrMoreVertical, GrClose, GrLinkNext } from 'react-icons/gr'
import Link from './Link'

const CardA = styled.div`
  background-color: #F7F7F7;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding:1rem 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
`;
//  CSS for styling three dot button in card
//

const CardB = styled.div`

`
const FlipButton = styled.button`
  background-color: inherit;
  justify-self: right;
  border:none;
  z-index: 6;
  padding: 0;
  svg{
    width: 2rem;
    height: 2rem ;
    color:black;
  }
`;
const WrapperButton = styled.button`

`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  h3{
    text-align: center;
  }
`;


const FlightCard = ({ flight, launchpad }) => {
  // hold state if its cardA or cardB side
  const [side, setSide] = useState('A');
  const flightDate = new Date(flight.date_utc);
  return (
    <>
      {side === 'A' ? (
        <CardA key={flight.id}>
          <Top>
            <h3>{flight.name}</h3>
            <FlipButton >
              <GrMoreVertical />
            </FlipButton>
          </Top>
          {launchpad && <p>{`${launchpad.locality}, ${launchpad.region}`}</p>}
          <p>{flightDate.toDateString()}</p>



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
