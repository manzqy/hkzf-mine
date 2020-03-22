import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getLocationByMapAtion} from './store/action/index'
import Home from './pages/home'
import MapFound from './pages/mapFound'
import CitySelect from './pages/citySelect'
import Search from './pages/search'
class App extends Component {
  state = {  }
  componentDidMount() {
    this.props.getMapLocation()
  }
  render() { 
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home" component={Home}/>
          <Route path="/citySelect" component={CitySelect} exact/>
          <Route path="/search" component={Search} exact/>
          <Route path="/mapFound" component={MapFound} exact/>
        </Switch>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMapLocation() {
      dispatch(getLocationByMapAtion())
    }
  }
}
export default connect(null, mapDispatchToProps)(App);
