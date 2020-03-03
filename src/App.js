import React                                from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home                                 from './pages/Home.js';
import About                                from './pages/About.js';
import Contacts                             from './pages/Contacts.js';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/contacts'>
            <Contacts/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
