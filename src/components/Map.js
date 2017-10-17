import React from 'react';

//this line is incredibly important and was missing from tutorial
const google = window.google;

const STOP_ONE_POSITION = {
  lat: 35.9959669,
  lng: -78.9018154
}

export default class Map extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: STOP_ONE_POSITION,
      zoom: 15
    });
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
      </div>
    );
  }
}
