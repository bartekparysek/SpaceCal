import React, { useState } from 'react'
import styled from 'styled-components'
import { GrMoreVertical, GrClose } from 'react-icons/gr'
import { useSpring, animated } from 'react-spring';
import FrontSide from './FrontSide';
import BackSide from './BackSide';

const FlipButton = styled.button`
  background-color: inherit;
  border:none;
  z-index: 6;
  padding: 0;
  cursor: pointer;
  svg{
    font-size:1.70rem;
    color:black;
  }
`;

const FlightCard = ({ flight, launchpad, user }) => {
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
        <FrontSide flight={flight} launchpad={launchpad}>
          <FlipButton aria-label={'Flip'} onClick={() => set(state => !state)} >
            <GrMoreVertical />
          </FlipButton>
        </FrontSide>
      </animated.div>

      <animated.div style={{ opacity, transform: transform.to(t => `${t} rotateY(180deg)`), display }}>
        <BackSide flight={flight} launchpad={launchpad} user={user}>
          <FlipButton aria-label={'Flip back'} onClick={() => set(state => !state)}>
            <GrClose />
          </FlipButton>
        </BackSide>
      </animated.div>
    </>
  );
}

export default FlightCard