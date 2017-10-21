import React, { Component } from 'react'
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Baselayout from '../components/Baselayout';
import TourStop from '../components/TourStop';
import TourHome from '../components/TourHome';
import Home from '../components/Home';
import About from '../components/About';

class App extends Component{
  render(){
    return(
      <div className = "App">
        <BrowserRouter>
          <Baselayout>
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/tours/:id" component={TourHome}/>
            <Route path = "/stop/:id" component={TourStop}/>
            <Route paath = "/about" component ={About}/>
          </Switch>
        </Baselayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
