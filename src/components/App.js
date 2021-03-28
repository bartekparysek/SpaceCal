import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import FlightDetails from './FlightDetails';
import GlobalStyle from '../globalStyles';
import FlightList from './FlightList';

import Header from './Header';

const StyledApp = styled.div`
   margin: auto;
   @media screen and (min-width: 350px){
      width: 96%;
   }
   @media screen and (min-width:800px ){
      width: 90%;
   }
   @media screen and (min-width: 2560px){
      width: 85%;
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