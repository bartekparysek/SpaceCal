import React from "react";
import styled from "styled-components";
import CalendarButton from "../CalendarButton";
import { GrLinkNext } from "react-icons/gr";
import DetailsLink from "./DetailsLink";

const BackCard = styled.div`
  flex-shrink: 0;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  background-color: #f7f7f7;
  min-height: 15vh;
  width: 25vw;
  min-width: calc(100% - 2rem);
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: clamp(0.75rem, 1%, 1rem) clamp(0.8rem, 6%, 2rem);
  color: #000;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;
  backface-visibility: hidden;
  overflow: hidden;
`;
export const WrapperButton = styled.button`
  background-color: inherit;
  display: flex;
  border: none;
  z-index: 6;
  padding: 0.5rem;
  color: #000;
  font-size: 1rem;
  svg {
    margin-right: 0.5em;
  }
  p {
    white-space: nowrap;
  }
  p:hover {
    color: #74b9ff;
  }
`;

const RightSide = styled.div`
  svg {
    font-size: 1.25rem;
    color: black;
  }
`;
const LeftSide = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const BackSide = ({ flight, launchpad, user, children }) => {
  return (
    <BackCard key={"cardB"}>
      <LeftSide>
        <DetailsLink flight={flight} />
        {user.isSignedIn && (
          <div>
            <WrapperButton>
              <GrLinkNext />
              <CalendarButton
                flight={flight}
                launchpad={launchpad}
                button={false}
              />
            </WrapperButton>
          </div>
        )}
      </LeftSide>
      <RightSide>{children}</RightSide>
    </BackCard>
  );
};

export default BackSide;
