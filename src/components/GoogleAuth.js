import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa'
import { signIn, signOut } from '../actions';


const StyledButton = styled.button`

   background-color:#27292F;
   border-radius:10px;
   color: #fff;
   border: none;
   padding: 0.68rem 2.65rem;
   display:inline-flex;
   align-items:center;
   margin: 0.75rem 0;
   white-space: nowrap;
   @media (max-width: 375px){
      padding: 0.75rem;
   }
   svg{
      height: 1.5em;
      width:1.5em;
      margin-left: 0.5rem;
   }

`;




class GoogleAuth extends React.Component {
   componentDidMount() {
      window.gapi.load('client:auth2', () => {
         window.gapi.client.init({
            client_id: "1088925987137-p6rup8skhqjag9n248i32sd3374b00dh.apps.googleusercontent.com",
            apiKey: "AIzaSyCTfFI9vh--GipvIlD99ZX4bWXz-mGno4s",
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            scope: "https://www.googleapis.com/auth/calendar.events"
         }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
         });
      });
   }
   onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
         this.props.signIn(this.auth.currentUser.get().getBasicProfile().getEmail());
      } else {
         this.props.signOut();
      }
   };

   signToGoogle = () => {
      this.auth.signIn();
   };
   signOut = () => {
      this.auth.signOut();
   };

   renderAuthenticationButton() {
      if (this.props.isSignedIn === null) {
         return null;
      } else if (this.props.isSignedIn) {
         return (
            <StyledButton onClick={this.signOut}>Sign out <FaGoogle /></StyledButton>
         );
      } else {
         return (
            <StyledButton onClick={this.signToGoogle}>Sign in with<FaGoogle /></StyledButton>
         );
      }
   }

   render() {
      return (<div>{this.renderAuthenticationButton()}</div>);
   };
}

const mapStateToProps = (state) => {
   return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);