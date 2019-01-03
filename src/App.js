import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
{/*import Leaflet from './components/Leaflet/Leaflet';
import LeafletLoad from './components/Leaflet/LeafletLoad';*/}

const API_KEY = "aeb140d98aa91fd182f6d654a271b77f";

class App extends Component {
  state = {
    temperature: undefined,
    temperatureHigh: undefined,
    temperatureLow: undefined,
    city: undefined,
    lat: undefined,
    lon: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);

    const data = await api_call.json();

    console.log(data);


    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        temperatureHigh: data.main.temp_max,
        temperatureLow: data.main.temp_min,
        city: data.name,
        lat: data.coord.lat,
        lon: data.coord.lon,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        temperatureHigh: undefined,
        temperatureLow: undefined,
        city: undefined,
        lat:undefined,
        lon:undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Please enter the values."
      });
    }
  }

  render() {
    return (
      <div className="App">

        <Titles/>

        <Form getWeather={this.getWeather}/>

        <Weather
          temperature={this.state.temperature}
          temperatureHigh={this.state.temperatureHigh}
          temperatureLow={this.state.temperatureLow}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}/>

          {/*<Leaflet
            lat={this.state.lat}
            lon={this.state.lon}/>
          <LeafletLoad/>*/}


      </div>
    );
  }
}

export default App;
