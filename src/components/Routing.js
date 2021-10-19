import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const DetailsView = lazy(() => import('./Details/DetailsView'));
const HomeView = lazy(() => import('./Home/HomeView'));
const Calendar = lazy(() => import('./Calendar/Calendar'));

const Routing = ({ user, flights, launchpads, selectedDate, setSelectedDate }) => {
  return (
    <Switch>
      <Route path="/" exact render={() => (
        <HomeView user={user} flights={flights} launchpads={launchpads} >
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} flights={flights} />
        </HomeView>
      )}></Route>
      <Route
        path="/flightdetails/:id"
        render={() => (
          <DetailsView user={user} flights={flights} launchpads={launchpads} >
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} flights={flights} />
          </DetailsView>
        )}
      ></Route>
    </Switch>
  )
}

export default Routing