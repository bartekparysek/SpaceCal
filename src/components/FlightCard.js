import React, { useState } from 'react'
import styled from 'styled-components'
import { GrMoreVertical, GrClose, GrLinkNext } from 'react-icons/gr'
import { useSpring, animated } from 'react-spring';
import Link from './Link'
import CalendarButton from './CalendarButton'

const CardA = styled.div`
  transform: translateX(-50%);
  left:50%;
  position: absolute;
  background-color: #F7F7F7;
  min-height:15vh;
  width: 25vw;
  min-width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 8px;
  padding: clamp(0.75rem, 1%, 1rem);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  backface-visibility: hidden;
  overflow: hidden;
  flex-basis:80%;
  flex-shrink: 0;
`;

const CardB = styled.div`
  flex-shrink: 0;
  transform: translateX(-50%);
  left:50%;
  position: absolute;
  background-color: #F7F7F7;
  min-height: 15vh;
  width: 25vw;
  min-width: calc(100% - 2rem);
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding:1rem 1.5rem;
  color: #000;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  backface-visibility: hidden;
  overflow: hidden;
`;

const FlipButton = styled.button`
  background-color: inherit;
  border:none;
  z-index: 6;
  padding: 0;
  svg{
    font-size:1.70rem;
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
  p{
    white-space: nowrap;
  }
  p:hover{
    color: #74b9ff;

  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  h2{
    margin:0;
    font-size: clamp(1.5rem, 1vw + 0.5rem, 0.75vw + 0.5rem);
    white-space: nowrap;
  }
`;

const RightSide = styled.div`
svg{
  font-size:1.25rem;
    color:black;
  }
`

const LeftSide = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const FlightCard = ({ flight, launchpad, user }) => {
  const flightDate = new Date(flight.date_utc);
  const [flipped, set] = useState(false);
  const { transform, opacity, display } = useSpring({
    display: flipped ? '' : 'none',
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <>
      <animated.div style={{ opacity: opacity.to(o => 1 - o), transform, }}>
        <CardA key={'cardA'}>
          <Top>
            <h2>{flight.name}</h2>
            <FlipButton aria-label={'Flip'} onClick={() => set(state => !state)} >
              <GrMoreVertical />
            </FlipButton>
          </Top>
          {launchpad && <p>{`${launchpad.locality}, ${launchpad.region}`}</p>}
          <p>{flightDate.toDateString()}</p>
        </CardA>
      </animated.div>

      <animated.div style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`), display }}>
        <CardB key={'cardB'}>
          <LeftSide>
            <div>
              <Link to={`/flightdetails/${flight.id}`}>
                <WrapperButton aria-label={'Check Details'}>
                  <GrLinkNext />
                  <p>CHECK DETAILS</p>
                </WrapperButton>
              </Link>
            </div>
            {user.isSignedIn && <div>
              <WrapperButton>
                <GrLinkNext />
                <CalendarButton flight={flight} launchpad={launchpad} button={false} />
              </WrapperButton>
            </div>}
          </LeftSide>

          <RightSide>
            <FlipButton aria-label={'Flip back'} onClick={() => set(state => !state)}>
              <GrClose />
            </FlipButton>
          </RightSide>
        </CardB>
      </animated.div>
    </>
  );
}

export default FlightCard