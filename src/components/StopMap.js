import React from 'react';

const google = window.google;


export default class StopMap extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }



  componentDidUpdate() {
    let map = new google.maps.Map(this.refs.map, {
      center: {lat: this.props.latFromParent, lng: this.props.longFromParent},
      zoom: 17
    });

    let markerOne = new google.maps.Marker({
      position: {lat: this.props.latFromParent, lng: this.props.longFromParent},
      label: "1"
    });

    markerOne.setMap(map);
  }


  componentWillReceiveProps(){

  }


  render() {
    console.log(this.props.datafromParent)

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
