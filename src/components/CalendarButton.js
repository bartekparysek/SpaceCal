import React from 'react';
import styled from 'styled-components';
import { MdEvent } from 'react-icons/md';

const StyledButton = styled.button`
   display:flex;
   align-items: center;
   background-color: #27292F;
   border-radius: 0 10px 10px 0;
   color: #fff;
   border: none;
   padding: 0 0.5em;
   margin:0;

   svg{
      height: 3rem;
      width: 3rem;
      padding: 0 1rem;
   }
`;

class CalendarButton extends React.Component {

   render() {
      return (
         <React.Fragment >
            <StyledButton>
               <MdEvent />
               Add to Calendar
            </StyledButton>
         </React.Fragment>
      );
   }
}

export default CalendarButton;