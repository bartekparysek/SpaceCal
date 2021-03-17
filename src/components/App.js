import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlightDetails from './FlightDetails';
import Link from './Link';
import GlobalStyle from '../globalStyles';
import FlightList from './FlightList';
import GoogleAuth from './GoogleAuth';
import Header from './Header';

class App extends React.Component {

   render() {
      return (
         <Router >
            <GlobalStyle />
            <div>
               <Header />
               <Switch>
                  <Route path="/" exact component={FlightList} ></Route>
                  <Route path="/flightdetails/:id" component={FlightDetails}></Route>
               </Switch>

            </div>
         </Router>
      )
   }

}

export default App;