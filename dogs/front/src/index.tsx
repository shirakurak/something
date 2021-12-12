import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './Login';
import Dogs from './Dogs';
import Navigation from './Navigation';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={() => {
            return (
                <Redirect to="/login" />
              )
          }}
        />
        <Route exact path="/login" component={Login} /> 
        <Route path="/">
          <Route path="/dogs" component={Dogs}/>
          <Navigation/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
