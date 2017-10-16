import React, { Component } from 'react'
import '../styles/App.css';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Baselayout from '../components/Baselayout';
import TourStop from '../components/TourStop';
import TourHome from '../components/TourHome';
import Home from '../components/Home';

class App extends Component{
  render(){
    return(
      <div className = "App">
        <BrowserRouter>
          <Baselayout>
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/tour" component={TourHome}/>
          </Switch>
        </Baselayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
