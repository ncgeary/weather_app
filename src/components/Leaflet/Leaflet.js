import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//https://github.com/fullstackreact/google-maps-react


export class Gmap extends Component {
  render() {
    return (
      <Map className={classes.gmap} google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={props.city} />

        // <InfoWindow onClose={this.onInfoWindowClose}>
        //     <div>
        //       <h1>{this.state.selectedPlace.name}</h1>
        //     </div>
        // </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCeFzN5FTfm2hG_mDOWWG7mgcGOQjKKaX4')
})(Gmap)
