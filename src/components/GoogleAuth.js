import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa'
import { signIn, signOut } from '../actions';


const StyledButton = styled.button`

   background-color: rgba(255,255,255,0.5);
   border-radius:8px;
   color: #fff;
   border: none;
   padding: 0.5rem 2.5rem;
   font-size: 16px;
   display:inline-flex;
   align-items:center;
   white-space: nowrap;
   &:hover{
      background-color: rgba(255,255,255,0.7);
   }
   @media screen and (max-width: 420px){
      padding: 0.68rem 0.4rem;
   }
   svg{
      height: 2rem;
      width:2rem;
      margin-left: 0.4rem;
      @media screen and (max-width:375px){
         height: 1.3rem;
         width: 1.3rem;
         margin-left: 0.2rem;
      }
   }

`;




class GoogleAuth extends React.Component {
   componentDidMount() {
      window.gapi.load('client:auth2', () => {
         window.gapi.client.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENTID,
            apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
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