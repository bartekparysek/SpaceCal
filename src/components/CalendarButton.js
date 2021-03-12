import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdEvent } from 'react-icons/md';
import { trySignIn, trySignOut } from '../actions/'

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

   addToCalendar = () => {
      this.props.trySignIn();
   };

   render() {
      return (
         <React.Fragment >
            <StyledButton onClick={this.addToCalendar} >
               <MdEvent />
               Add to Calendar
            </StyledButton>
         </React.Fragment>
      );
   }
}

const mapStateToProps = state => {
   return { isSignedIn: state.isSignedIn }
}

export default connect(mapStateToProps, { trySignIn })(CalendarButton);