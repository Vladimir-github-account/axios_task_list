import React                                from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home                                 from './pages/Home.js';
import About                                from './pages/About.js';
import Contacts                             from './pages/Contacts.js';
import DropMenu                             from './components/DropMenu';
import TaskList2 from './components/TaskList2';
import TaskList  from './components/TaskList';
function App() {
  return (
      <TaskList/>
  );
}

export default App;
