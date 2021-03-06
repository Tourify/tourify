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

  goBack(e){
    const idBack = (parseInt(this.state.id, 10)-1);
    fetch(`https://evening-retreat-85270.herokuapp.com/organizations/1/tours/1/stops/${idBack}`).then(results =>{
      return results.json();
    }).then(data =>{
      this.setState({
        tourInfo: data,
        id: idBack,
        defaultSource: data.image_current,
        currentSource: data.image_current,
        stopSource: data.image_historic,
      });
    })
  }

  goForward(e){
    const idForward = (parseInt(this.state.id, 10)+1);
    fetch(`https://evening-retreat-85270.herokuapp.com/organizations/1/tours/1/stops/${idForward}`).then(results =>{
      return results.json();
    }).then(data =>{
      this.setState({
        tourInfo: data,
        id: idForward,
        defaultSource: data.image_current,
        currentSource: data.image_current,
        stopSource: data.image_historic,
      });
    })
  }

  render(){
    const latitude = this.state.tourInfo.gps_lat
    const longitude = this.state.tourInfo.gps_long

    const idBack = (parseInt(this.state.id, 10)-1)
    const idForward = (parseInt(this.state.id, 10)+1)
    console.log(this.state.tourInfo.length);

    return(
      <div>

        <div className = 'header-photo'>
          {
            (this.state.stopSource === undefined || this.state.stopSource === null)
            ? ""
            : <button className = 'photo-change-btn' onClick={this.handleClick}>Toggle Photo</button>
          }
          <img src = {this.state.currentSource} alt = "current"/>
        </div>

        <div className = "header-text">
          <h1>{this.state.tourInfo.stop_num}. {this.state.tourInfo.name}</h1>
        </div>
        <div className = "header-links">
          <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-pin-100px.png" alt = "icon"/>
          <p className="tourstop-location">{this.state.tourInfo.location}</p>
          {
            (this.state.tourInfo.learn_more_URL === undefined || this.state.tourInfo.learn_more_URL === null)
            ? ""
            : <p>| <a href = {this.state.tourInfo.learn_more_URL} target="_blank">Website</a></p>
          }
        </div>
        <div className = "content-area-container">
          <div className = "content-area-container-text">
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
            <StopMap latFromParent ={latitude} longFromParent ={longitude}/>
          </div>
          <div className = "tourstop-footer-links">
            <Link to={`/stop/${idBack}`} >
            {
              (parseInt(this.state.id, 10) <= 1)
              ? <div className = "invisible"></div>
              : <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-arrow.png" alt = "left arrow" onClick={e => this.goBack(e)}/>
            }
          </Link>
          <Link to={`/tours/${this.state.tourInfo.tour_id}`}>TOUR HOME</Link>
          <Link to={`/stop/${idForward}`}>
          <img src = "https://durhamdill.files.wordpress.com/2017/10/tourify-arrow-right.png" alt = "right arrow" onClick={e => this.goForward(e)}/>
        </Link>
      </div>
    </div>
  </div>
)
}
}
