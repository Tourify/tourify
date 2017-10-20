import React from "react";
import StopMap from '../components/StopMap';
import {Link} from 'react-router-dom';



export default class TourStop extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tourInfo: [],
      id: props.match.params.id,
      defaultSource: "",
      stopSource: "",
      currentSource: "",
        }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    fetch(`https://evening-retreat-85270.herokuapp.com/organizations/1/tours/1/stops/${this.state.id}`).then(results =>{
      return results.json();
    }).then(data =>{
      this.setState({
        tourInfo: data,
        defaultSource: data.image_current,
        currentSource: data.image_current,
        stopSource: data.image_historic,
      });

    })
  }

handleClick(e){
  if (this.state.currentSource === this.state.defaultSource){
    this.setState({currentSource:this.state.stopSource});
  } else {
    this.setState({currentSource: this.state.defaultSource})
  }
}


  render(){
     const latitude = this.state.tourInfo.gps_lat

    return(
      <div>
        
        <div className = 'tourstop-main-photo'>
          {
            (this.state.stopSource === undefined || this.state.stopSource === null)
            ? ""
            : <button className = 'photo-change-btn' onClick={this.handleClick}>Toggle Photo</button>
          }
          <img src = {this.state.currentSource} alt = "current"/>
        </div>

        <div className = "tourstop-header-text">
          <h1>{this.state.tourInfo.stop_num}. {this.state.tourInfo.name}</h1>
        </div>
          <div className = "tourstop-header-links">
            <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-pin-100px.png" alt = "icon"/>
            <p className="tourstop-location">{this.state.tourInfo.location}</p>
            {
              (this.state.tourInfo.learn_more_URL === undefined || this.state.tourInfo.learn_more_URL === null)
              ? ""
              : <p>| <a href = {this.state.tourInfo.learn_more_URL}>Website</a></p>
            }
          </div>
          <div className = "tourstop-body">
          <div className = "tourstop-body-text">
            <p>{this.state.tourInfo.description}</p>
          </div>
            {
              (this.state.tourInfo.travel_tip === undefined || this.state.tourInfo.travel_tip === null)
              ? ""
              :
            <div className = "tourstop-travel-tip">
              <h2>TRAVEL TIP</h2>
              <p>{this.state.tourInfo.travel_tip}</p>
            </div>
            }
          <div className = "tourstop-map">
            <StopMap datafromParent ={latitude}/>
          </div>
          <div className = "tourstop-footer-links">
            {
              (parseInt(this.state.id) <= 1)
              ? <img src=""/>
              : <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-arrow.png" alt = "left arrow"/>
            }
            <Link to={`/tours/${this.state.tourInfo.tour_id}`}>TOUR HOME</Link>
            <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-arrow-right.png" alt = "right arrow"/>
          </div>
        </div>
        </div>
    )
  }
}
