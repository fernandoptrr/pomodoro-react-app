import React, { Component } from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <div className="location-box">
          <div className="location">
            {this.props.weather.name}, {this.props.weather.sys.country}
          </div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(this.props.weather.main.temp)}
            <sup>&deg;c</sup>
          </div>
          <div className="weather">{this.props.weather.weather[0].main}</div>
        </div>
      </div>
    );
  }
}

export default Weather;
