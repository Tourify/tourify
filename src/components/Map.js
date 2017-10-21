import React from 'react';

//this line is incredibly important and was missing from tutorial
const google = window.google;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate() {
    let map = new google.maps.Map(this.refs.map, {
      center: {lat:this.props.latsFromParent[0], lng:this.props.longsFromParent[0]},
      zoom: 16
    });

    for (let i = 0; i < this.props.latsFromParent.length; i ++){
      let marker = new google.maps.Marker({
        position: {lat: this.props.latsFromParent[i], lng: this.props.longsFromParent[i]},
        label: String(i + 1)
      });
      marker.setMap(map);
    }
  }

  componentWillReceiveProps(){}

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
