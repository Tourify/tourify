import React from "react";
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orgInfo:[],
      tourList:[]
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    fetch('https://evening-retreat-85270.herokuapp.com/organizations/1/').then(results =>{
      return results.json();
    }).then(data=>{
      this.setState({orgInfo: data.organization});
      this.setState({tourList: data.organization.tours})
    })
  }

  render(){
    console.log(this.state.orgInfo)
    console.log(this.state.tourList)
    return(
      <div>
        <div className = "tour-main-photo" background-image={this.state.orgInfo.org_photo}>
          <div className = "tour-main-text">
            <div><h1>{this.state.orgInfo.display_name}</h1></div>
            <div><h2>{this.state.orgInfo.description}</h2></div>
          </div>
          <p>Content provided by <a href="https://www.durham-nc.com/" target="_blank">Durham Convention & Visitors Bureau</a></p>
        </div>

        <div className = "select-a-tour">
          <h3>SELECT A TOUR</h3>
        </div>

        <div className = "tours-wrapper">
        {this.state.tourList.map( (tour) => {
          return <div className = "tour-item" key={tour.tour_id}>
            <Link to={`/tours/${tour.tour_id}`}>
            <div className = "tour-item-photo">
              <img src={tour.main_tour_photo} alt={tour.tour_name}/>
            </div>
            <div className = "tour-item-text">
              <p>{tour.tour_name}</p>
            </div>
            </Link>
          </div>
        })}

        <div className = "tour-item-coming">
          <div className = "tour-item-photo">
            <img src="https://jaredpattersonblog.files.wordpress.com/2017/10/civil_rights_mural_durham.jpg" alt="Civil Rights mural"/>
          </div>
          <div className = "tour-item-text">
            <p>COMING SOON: <br/>African-American Heritage</p>
          </div>
        </div>

        <div className = "tour-item-coming">
          <div className = "tour-item-photo">
            <img src="https://svcdn.simpleviewinc.com/v3/cache/www_durham-nc_com/B38250B45B38266972B2D54F09F558AB.jpg" alt="Durham Beer Scene"/>
          </div>
          <div className = "tour-item-text">
          <p>COMING SOON: <br/>Bull City Breweries</p>
        </div>
        </div>

        <div className = "tour-item-coming">
          <div className = "tour-item-photo">
            <img src="https://static1.squarespace.com/static/57cd8e7759cc6804d18a84e1/t/57cd9ac93e00bed93bb4224a/1473092298075/durham+mural+2.jpg?format=2500w" alt="Durham Beer Scene"/>
          </div>
          <div className = "tour-item-text">
            <p>COMING SOON: <br/>Public Art Walk</p>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <img src="https://durhamdill.files.wordpress.com/2017/10/tourify-pin-100px.png" alt="Tourify Pin Icon"/>
        <p>Tourify &copy; 2017 | <Link to="/about">About</Link></p>
      </div>
    </div>
    )
  }
}
