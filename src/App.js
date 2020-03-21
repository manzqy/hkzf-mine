import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Home from './pages/home'
import MapFound from './pages/mapFound'
import CitySelect from './pages/citySelect'
function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" component={Home}/>
        <Route path="/citySelect" component={CitySelect} exact/>
        <Route path="/mapFound" component={MapFound} exact/>
      </Switch>
    </Router>
  );
}

export default App;
