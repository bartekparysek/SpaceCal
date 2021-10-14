import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

const StyledButton = styled.button`
   font-family: 'Roboto', sans-serif;
   background-color: #ffff;
   border-radius:5px;
   border: none;
   padding: clamp(0.25rem, 3%, 3rem) clamp(0.5rem, 3%, 3rem);
   font-size: clamp(0.75rem, 1rem, 1.5rem);
   display:inline-flex;
   align-items:center;
   white-space: nowrap;
   svg{
      font-size: 2rem;
      margin-right: 0.75rem;
   }
   &:hover{
      background-color:#ece7e7
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
            <StyledButton aria-label={'Sign out'} onClick={() => signOut()}><FcGoogle /> Sign out</StyledButton>
         ) : (
            <StyledButton aria-label={'Sign in with Google'} onClick={() => signIn()}><FcGoogle /> Sign in with Google</StyledButton>
         )}
      </div>);
}

export default GoogleAuth;