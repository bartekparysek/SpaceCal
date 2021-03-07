import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlightDetails from './FlightDetails';
import Link from './Link';
import GlobalStyle from '../globalStyles';
import FlightList from './FlightList';

class App extends React.Component {

   render() {
      return (
         <Router >
            <GlobalStyle />
            <div>
               <Link to="/" >
                  <h1>SpaceCal 🚀</h1>
               </Link>
               <Switch>
                  <Route path="/" exact component={FlightList} ></Route>
                  <Route path="/flightdetails/id:" component={FlightDetails}></Route>
               </Switch>

            </div>
         </Router>
      )
   }

}

export default App;