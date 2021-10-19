import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import CalendarButton from '../CalendarButton'
import { GrLinkNext } from 'react-icons/gr'

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
  padding:clamp(0.75rem, 1%, 1rem)  clamp(0.8rem, 6%, 2rem) ;
  color: #000;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  backface-visibility: hidden;
  overflow: hidden;
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

const BackSide = ({ flight, launchpad, user, children }) => {
  return (
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
        {children}
      </RightSide>
    </CardB>
  )
}

export default BackSide