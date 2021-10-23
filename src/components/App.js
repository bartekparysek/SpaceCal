import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";

import Spinner from "./Spinner";
import Footer from "../components/Footer";
import Header from "./Header";
import useFetch from "./customHooks/UseFetch";
import DelayedRender from "./DelayedRender";
import Routing from "./Routing";
const GoogleAuth = lazy(() => import("./GoogleAuth"));

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  opacity: 1;
  background-repeat: no-repeat;
  margin: auto;
`;
const StyledSection = styled.div`
  @media screen and (min-width: 2560px) {
    width: 90%;
  }
  @media screen and (min-width: 250px) {
    width: 99%;
  }
  @media screen and (min-width: 900px) {
    width: 90%;
  }
  margin: 0 auto;
  flex: 1;
`;

const App = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    email: null,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { data: flights } = useFetch("/launches/upcoming");
  const { data: launchpads } = useFetch("/launchpads");

  return (
    <Router>
      <GlobalStyle />
      <StyledApp>
        <StyledSection>
          <Header>
            <Suspense fallback={<Spinner />}>
              <DelayedRender delay={2200}>
                <GoogleAuth user={user} setUser={setUser} />
              </DelayedRender>
            </Suspense>
          </Header>
          <Suspense fallback={<Spinner />}>
            <Routing
              user={user}
              flights={flights}
              launchpads={launchpads}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </Suspense>
        </StyledSection>
        <Footer />
      </StyledApp>
    </Router>
  );
};

export default App;
