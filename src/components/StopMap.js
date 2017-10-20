import React from 'react';

const google = window.google;


export default class StopMap extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);


  }

  componentDidMount() {
    console.log(this.props.datafromParent)
    let map = new google.maps.Map(this.refs.map, {
      center: {lat: 35.9959669, lng: -78.9018154},
      zoom: 17
    });

    let markerOne = new google.maps.Marker({
      position: {lat: 35.9959669, lng: -78.9018154},
      label: "1"
    });

    markerOne.setMap(map);
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
