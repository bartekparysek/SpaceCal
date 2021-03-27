import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import FlightDetails from './FlightDetails';
import GlobalStyle from '../globalStyles';
import FlightList from './FlightList';

import Header from './Header';

const StyledApp = styled.div`
   width: 70vw;
   margin: auto;
   @media (max-width: 425px){
      width: 70%;
   }
   @media (max-width:768px ){
      width: 90%;
   }
`;
const StyledSection = styled.div`
   margin: 0 auto;
`;


class App extends React.Component {

   render() {
      return (
         <Router >
            <GlobalStyle />
            <StyledApp>
               <StyledSection>
                  <Header />
                  <Switch>
                     <Route path="/" exact component={FlightList} ></Route>
                     <Route path="/flightdetails/:id" component={FlightDetails}></Route>
                  </Switch>
               </StyledSection>

            </StyledApp>
         </Router>
      )
   }

}

export default App;