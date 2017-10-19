import React from "react";
import {Link} from 'react-router-dom';

export default class Baselayout extends React.Component {

  render(){

    return(
      <div>
        <nav>
          <Link to={"/"}>
            <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-logo-logo-bkgrd.png" alt = "tourify logo"/>
          </Link>
        </nav>
          {this.props.children}
        <footer></footer>
      </div>
    )
  }
}
