import React from 'react';
// import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';


const Leaflet = (props) => (

  <Map
    center={[props.lat,props.lon]}
    zoom={13}
    style={{width:'100%',height: '500px'}}>

    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />

    {/*<Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>*/}

  </Map>
);


export default Leaflet;
