import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #ffff;
  border-radius: 4px;
  border: none;
  font-size: 1em;
  min-width: calc(22ch - 1rem);
  padding: 0.5rem clamp(1vw, 5%, 1vw);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  svg {
    font-size: 1.25em;
  }
  &:hover {
    background-color: #ece7e7;
  }
  div {
    min-width: calc(20ch - 1rem);
  }
`;

const GoogleAuth = ({ user, setUser }) => {
  const auth = useRef(null);
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENTID,
          apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/calendar.events",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setUser((prev) => ({
            ...prev,
            isSignedIn: auth.current.isSignedIn.get(),
          }));
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });

    const onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
        setUser((prev) => ({
          ...prev,
          email: auth.current.currentUser.get().getBasicProfile().getEmail(),
        }));
      } else {
        setUser((prev) => ({
          ...prev,
          isSignedIn: false,
          email: null,
        }));
      }
    };
  }, [setUser]);

  const signIn = () => {
    auth.current.signIn();
    setUser((prev) => ({
      ...prev,
      isSignedIn: true,
    }));
  };
  const signOut = () => {
    auth.current.signOut();
    setUser((prev) => ({
      ...prev,
      isSignedIn: false,
      email: null,
    }));
  };
  return (
    <StyledButton
      aria-label={"Google Login"}
      onClick={() => (user.isSignedIn ? signOut() : signIn())}
    >
      <FcGoogle />
      <div>{user.isSignedIn ? "Sign out" : "Sign in with Google"}</div>
    </StyledButton>
  );
};

export default GoogleAuth;
