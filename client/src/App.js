import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Search} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
