import React, { Component } from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-container">
        <div className="location-box">
          <div className="location">
            {this.props.weather.name}, {this.props.weather.sys.country}
          </div>
        </div>
        <div className="weather-box">
          <div className="condition">{this.props.weather.weather[0].main}</div>
          <div className="temp">
            {Math.round(this.props.weather.main.temp)}
            <sup>&deg;</sup>C
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
