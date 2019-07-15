import React from 'react';
import { Map, TileLayer, Polyline} from 'react-leaflet'
import _ from 'lodash';

class ResMap extends React.Component{

  state = {
    lat: -27.4500709,
    lng: -58.9856075,
    zoom: 16,
  };

  tracePolyline = (linea) => {
    if (!_.isEmpty(linea)){
      return(
        <div>
          <Polyline color="lime" opacity="0.5" weight="6" positions={linea.ida} />
          <Polyline color="red" opacity="0.5" weight="4" positions={linea.vuelta} />
        </div>
      )
    };
  };

  render(){
    const position = [this.state.lat, this.state.lng];
    return(
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.tracePolyline(this.props.linea)}
      </Map>
    )
  }
}

export default ResMap;