import React from 'react';

//this line is incredibly important and was missing from tutorial
const google = window.google;

const STOP_ONE_POSITION = {
  lat: 35.9959669,
  lng: -78.9018154
}

const STOP_TWO_POSITION = {
  lat: 35.9960212,
  lng: -78.9028859
}

const STOP_THREE_POSITION = {
  lat: 35.996318,
  lng: -78.90239500000001
}

export default class Map extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let map = new google.maps.Map(this.refs.map, {
      center: STOP_ONE_POSITION,
      zoom: 16
    });

    let markerOne = new google.maps.Marker({
      position: STOP_ONE_POSITION,
      label: "1"
    });

    let markerTwo = new google.maps.Marker({
      position: STOP_TWO_POSITION,
      label: "2"
    });

    let markerThree = new google.maps.Marker({
      position: STOP_THREE_POSITION,
      label: "3"
    })

    markerOne.setMap(map);
    markerTwo.setMap(map);
    markerThree.setMap(map);
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
