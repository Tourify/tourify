import React from 'react';

const google = window.google;

export default class StopMap extends React.Component {

  componentDidMount() {
    let map = new google.maps.Map(this.refs.map, {
      center: {lat: 35.9959669, long: -78.9018154},
      zoom: 17
    });

    let markerOne = new google.maps.Marker({
      position: {lat: 35.9959669, long: -78.9018154},
      label: "1"
    });

    let markerTwo = new google.maps.Marker({
      position: {lat: 35.9960212,  long: -78.9028859},
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
