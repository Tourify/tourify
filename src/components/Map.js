import React from 'react';

//this line is incredibly important and was missing from tutorial
const google = window.google;

const STOP_ONE_POSITION = {
  lat: 35.9959669,
  lng: -78.9018154
}

const STOP_EIGHT_POSITION = {
  lat: 35.9972665,
  lng: -78.9035641
}

export default class Map extends React.Component {
  constructor() {
    super();
    this.panToStopOne = this.panToStopOne.bind(this);
    this.panToStopEight = this.panToStopEight.bind(this);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: STOP_ONE_POSITION,
      zoom: 15
    });

  }

  panToStopOne() {
    this.map.panTo(STOP_ONE_POSITION);
  }

  panToStopEight(){
    this.map.panTo(STOP_EIGHT_POSITION);
  }


  render() {
    const mapStyle = {
      width: "100%",
      height: 300,
      borderRadius: 6,
      margin: "0 auto",
    };

    return (
      <div>


        <div ref="map" style={mapStyle}>I should be a map!</div>
        <button onClick={this.panToStopOne}>Go to Stop One!</button>
        <button onClick={this.panToStopEight}>Go to Stop Eight!</button>
      </div>
    );
  }
}
