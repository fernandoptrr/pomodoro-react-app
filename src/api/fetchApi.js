import axios from "axios";
import { useEffect, useState } from "react";

const FetchApi = () => {
  const [weather, setWeather] = useState({});

  const api = {
    key: "67064eec7c3f13de58efb3e1cbaa1387",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const fetchWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        getWeatherData(latitude, longitude);
      });
    }
  };

  const getWeatherData = async (latitude, longitude) => {
    const { data } = await axios.get(
      `${api.base}?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
    );
    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWeather({});
  }, []);

  console.log(weather);

  return { weather };
};

export default FetchApi;
