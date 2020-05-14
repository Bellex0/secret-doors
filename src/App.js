import React from 'react';
import './App.css';
import { Route,  Switch, withRouter, Link } from 'react-router-dom';
import Room from './components/Room';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
    




     <Switch>
       <Route exact path={'/'} component={Main}/>
     <Route exact path={'/room'} component={Room} />
     </Switch>
    </div>
  );
}

export default withRouter(App);
