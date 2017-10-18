import React from 'react';

const google = window.google;

const STOP_ONE_POSITION = {
  lat: 35.9959669,
  lng: -78.9018154
}

const STOP_TWO_POSITION = {
  lat: 35.9960212,
  lng: -78.9028859
}

export default class Map extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let map = new google.maps.Map(this.refs.map, {
      center: STOP_ONE_POSITION,
      zoom: 17
    });

    let markerOne = new google.maps.Marker({
      position: STOP_ONE_POSITION,
      label: "1"
    });

    let markerTwo = new google.maps.Marker({
      position: STOP_TWO_POSITION,
      label: "2"
    });


    markerOne.setMap(map);
    markerTwo.setMap(map);
  }

  render() {
    const mapStyle = {
      width: "100%",
      height: 200,
      margin: "0 auto",
      marginTop: 20
        };

    return (
      <div>
        <div ref="map" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}
