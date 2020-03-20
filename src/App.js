import React from 'react';
import { Button } from "antd-mobile";
import {HashRouter} from 'react-router-dom'
import Tabbar from './components/Tabbar'
function App(props) {
  return (
    <HashRouter>
      <div className="App">
        <Tabbar {...props}></Tabbar>
      </div>
    </HashRouter>
  );
}

export default App;
