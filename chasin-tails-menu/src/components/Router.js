import React from 'react';
import { BrowserRouter, Switch, Route }from 'react-router-dom';
import Entrance from './Entrance';
import App from './App';
import NotFound from './NotFound';

// Even the Router is a component. React FTW!!!
// React router switch statement works like any other switch statement
// Goes down the Routes and finds a match
// If no match found, the very last Route is served (i.e. NotFound)
function Router () {
  return (
   <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Entrance} />
        <Route exact path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
