import React from "react";
import {Link} from 'react-router-dom';

export default class About extends React.Component {

  render(){

    return(
      <div>
        <div className = 'header-photo'>
          <img className='about-main-photo' src = "https://durhamdill.files.wordpress.com/2017/10/team-tourify-web.jpg" alt = "Team Tourify"/>
        </div>

        <div className = 'content-area-container'>
          <div className="header-text">
            <h1>ABOUT TOURIFY</h1>
          </div>
          <p className="about-para">Tourify is an interactive tour experience that brings the culture and history of a city to life through interesting facts and photography. The idea came from the desire to transform a print guide into a digital format for the <a href="https://www.durham-nc.com/" target="_blank">Durham Convention & Visitors Bureau</a>.</p>

          <h2 className="about-subhead">For Travelers & Explorers</h2>
          <p>Tour content is currently available for Durham, NC where we launched our project.</p>
          <p className="about-para">Visit <Link to="/">tourify.city</Link> to find available tours.</p>

          <h2 className="about-subhead">For Content Creators</h2>
          <p className="about-para">Existing Content Creators can access and edit their tour content at the <a href="https://evening-retreat-85270.herokuapp.com/sessions/new" target="_blank">admin site</a>.</p>
          <p className="about-para"> If you are an organization that would like to add your own content contact us at <a href="mailto:nowhere@mozilla.org">hello@tourify.city</a>.</p>

          <h2 className="about-subhead">Our Team</h2>
          <p>Katy, Hannah, Jared, Ginnie and Chris (pictured above, left to right) are cohort 11 graduates from The Iron Yard web development program. Our diverse group includes two former scientists, a teacher, a music industry rep, and a marketer.</p>

        </div>
        <div className="about-footer">
          <img src="https://durhamdill.files.wordpress.com/2017/10/tourify-pin-100px.png" alt="Tourify Pin Icon"/>
          <p>Tourify &copy; 2017 | <Link to="/">Home</Link></p>
        </div>
      </div>
    )
  }
}
