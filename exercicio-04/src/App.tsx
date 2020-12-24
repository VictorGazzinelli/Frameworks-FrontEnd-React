import React from 'react';
import { RouteDetails, routes } from './utils/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      {
        routes.map((routeDetails: RouteDetails) => {
          return( <Route exact path={routeDetails.path} render={routeDetails.render} />)
        })
      }
      </Switch>
    </Router>
  );
}

export default App;