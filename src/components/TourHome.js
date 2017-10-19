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
    console.log(this.state.tourStops)
    return(
      <div>
        <div className = 'tourstop-main-photo'>
        </div>
        <div className = "tourstop-header-text">
          <h1>{this.state.tourInfo.name}</h1>
          <p>{this.state.tourInfo.description}</p>
        </div>

          <div className = "tourstop-header-links">
            <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-pin-100px.png" alt = "icon"/>
            <p> {this.state.numStops} stops | {this.state.tourInfo.distance} miles | {this.state.tourInfo.time_in_mins} mins</p>
          </div>

          <div className= "tour-map"><Map/></div>

          <div className= "tour-list">
            <button className= "tour-start-button">START TOUR</button>
            {this.state.tourStops.map( (stop) => {
              return <div className= "tour-stop-preview" key={stop.stop_num}>
                <div className="tour-stop-image"><img src={stop.image_current} alt={stop.name}/></div>
                <div className="tour-stop-text">
                  <h1>{stop.stop_num}. {stop.name}</h1>
                  <div className="tour-stop-description">
                    <p className="tour-stop-para">{stop.description}</p>
                    <Link to={`/stop/${stop.stop_num}`}>
                      <p className="tour-stop-more">MORE></p>
                    </Link>
                  </div>
                </div>
              </div>
            })}
          </div>

        </div>
    )
  }
}
