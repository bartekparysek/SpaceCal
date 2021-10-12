import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';

const StyledButton = styled.button`

   background-color: rgba(255,255,255,0.5);
   border-radius:8px;
   color: #fff;
   border: none;
   padding: clamp(0.25rem, 1rem, 0.5rem) clamp(0.5rem, 2rem, 3rem);
   font-size: clamp(0.75rem, 1rem, 1.5rem);
   display:inline-flex;
   align-items:center;
   white-space: nowrap;
   &:hover{
      background-color: rgba(255,255,255,0.7);
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

const GoogleAuth = ({ user, setUser }) => {

   const auth = useRef(null);
   useEffect(() => {
      window.gapi.load('client:auth2', () => {
         window.gapi.client.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENTID,
            apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            scope: "https://www.googleapis.com/auth/calendar.events"
         }).then(() => {
            auth.current = window.gapi.auth2.getAuthInstance();
            setUser((prev) => ({
               ...prev,
               isSignedIn: auth.current.isSignedIn.get(),
            }));
            auth.current.isSignedIn.listen(onAuthChange)
         });
      });

      const onAuthChange = (isSignedIn) => {
         if (isSignedIn) {
            setUser((prev) => ({
               ...prev,
               email: auth.current.currentUser.get().getBasicProfile().getEmail(),
            }))
         } else {
            setUser((prev) => ({
               ...prev,
               isSignedIn: false,
               email: null,
            }))
         };
      }

   }, [setUser])

   const signIn = () => {
      auth.current.signIn()
      setUser((prev) => ({
         ...prev,
         isSignedIn: true,
      }))
   }
   const signOut = () => {
      auth.current.signOut();
      setUser((prev) => ({
         ...prev,
         isSignedIn: false,
         email: null,
      }))

   }
   return (
      <div>{
         user.isSignedIn ? (
            <StyledButton aria-label={'Sign out'} onClick={() => signOut()}>Sign out <FaGoogle /></StyledButton>
         ) : (
            <StyledButton aria-label={'Sign in with Google'} onClick={() => signIn()}>Sign in with<FaGoogle /></StyledButton>
         )}
      </div>);
}

export default GoogleAuth;