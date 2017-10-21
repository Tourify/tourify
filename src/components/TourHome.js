import React from "react";
import Map from "../components/Map.js";
import {Link} from 'react-router-dom';
export default class TourHome extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tourInfo: [],
      numStops: "",
      tourStops: [],
      id: props.match.params.id
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    fetch(`https://evening-retreat-85270.herokuapp.com/organizations/1/tours/${this.state.id}`).then(results =>{
      return results.json();
    }).then(data =>{
      this.setState({tourInfo: data});
      this.setState({numStops: data.stops.length});
      this.setState({tourStops: data.stops})
    })
  }

  render(){
    //  const latitude = this.state.tourInfo.stops[0].gps_lat
    if (this.state.tourInfo.stops === undefined){
      return ""
    }
    const lats = this.state.tourInfo.stops.map(function(stop){
      return (stop.gps_lat)
    })
    const longs = this.state.tourInfo.stops.map(function(stop){
      return (stop.gps_long)
    })
    return(
      <div>
        <div className = 'header-photo'>
          <img src = {this.state.tourInfo.main_tour_photo} alt = "current"/>
        </div>
        <div className = "header-text">
          <h1>{this.state.tourInfo.name}</h1>
          <p>{this.state.tourInfo.description}</p>
        </div>

          <div className = "header-links">
            <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-pin-100px.png" alt = "icon"/>
            <p> {this.state.numStops} stops | {this.state.tourInfo.distance} miles | {this.state.tourInfo.time_in_mins} mins</p>
          </div>

          <div className= "tour-map"><Map latsFromParent = {lats} longsFromParent = {longs}/></div>

          <div className= "tour-list">

            <button className= "tour-start-button">
              <Link to={`/stop/1/`}>START TOUR</Link>
            </button>

            {this.state.tourStops.map( (stop) => {
              return <Link to={`/stop/${stop.stop_num}`} key={stop.stop_num} className="tour-stop-link-box">
                <div className= "tour-stop-preview">
                <div className="tour-stop-image"><img src={stop.image_current} alt={stop.name}/></div>
                <div className="tour-stop-text">
                  <h1>{stop.stop_num}. {stop.name}</h1>
                  <p className="tour-stop-para">{stop.description}</p>
                </div>
              </div>
              </Link>
            })}
          </div>

        </div>
    )
  }
}
