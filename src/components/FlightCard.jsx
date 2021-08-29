import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { GrMoreVertical, GrClose, GrLinkNext } from 'react-icons/gr'
import Link from './Link'

const flipA = keyframes`
  50%{
    transform:rotateY(180deg)
  }
  to{
    transform: rotateY(180deg);
  }
`;

const CardA = styled.div`
  background-color: #F7F7F7;
  min-height:15vh;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding:1rem 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  animation: ${flipA} 1s;
`;
//  CSS for styling three dot button in card
//

const CardB = styled.div`
  background-color: #F7F7F7;
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding:1rem 1.5rem;
  color: #000;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  animation: ${flipA} 1s;
  z-index:10;
`;



const FlipButton = styled.button`
  background-color: inherit;
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
  background-color: inherit;
  display: flex;
  border:none;
  z-index: 6;
  padding: 0.5rem;
  color: #000;
  font-size: 1rem;
  svg{
    margin-right: 1rem;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  h3{
    text-align: center;
  }
`;

const RightSide = styled.div`
svg{
    width: 1.5rem;
    height: 1.5rem ;
    color:black;
  }
`

const LeftSide = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`


const FlightCard = ({ flight, launchpad }) => {
  // hold state if its cardA or cardB side
  const [side, setSide] = useState('A');
  const flightDate = new Date(flight.date_utc);
  return (
    <>
      {side === 'A' ? (
        <CardA key={side}>
          <Top>
            <h3>{flight.name}</h3>
            <FlipButton onClick={() => setSide('B')} >
              <GrMoreVertical />
            </FlipButton>
          </Top>
          {launchpad && <p>{`${launchpad.locality}, ${launchpad.region}`}</p>}
          <p>{flightDate.toDateString()}</p>
        </CardA>

      ) : (
        <CardB key={side}>
          {/* add onClick event handlers */}

          <LeftSide>
            <div>
              <Link to={`/flightdetails/${flight.id}`}>
                <WrapperButton>
                  <GrLinkNext />
                  <p>CHECK DETAILS</p>
                </WrapperButton>
              </Link>
            </div>

            <div>
              <WrapperButton>
                <GrLinkNext />
                <p>ADD TO GOOGLE CALENDAR</p>
              </WrapperButton>
            </div>
          </LeftSide>

          <RightSide>
            <FlipButton onClick={() => setSide('A')}>
              <GrClose />
            </FlipButton>

          </RightSide>
        </CardB>
      )}

    </>
  );
}

export default FlightCard
