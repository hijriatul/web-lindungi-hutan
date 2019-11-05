import React from 'react';
import Home from './container/Home/home';
import Kampanye from './container/Kampanye/kampanye';
import Profile from './container/Profile/profile';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Kampanye">
          <Kampanye />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
