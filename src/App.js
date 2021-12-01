import React, { useEffect, useContext } from "react";
import Weather from "./components/weather";
import FetchApi from "./api/fetchApi";
import { SettingsContext } from "./context/SettingsContext";
import SetPomodoro from "./components/SetPomodoro";
import Timer from "./components/timer";

function App() {
  const { weather } = FetchApi();

  const { pomodoro, executing, startAnimate, updateExecute } =
    useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.weather[0].main === "Thunderstorm" ||
            weather.weather[0].main === "Rain" ||
            weather.weather[0].main === "Drizzle"
            ? "app rain"
            : weather.weather[0].main === "Snow"
            ? "app snow"
            : weather.weather[0].main === "Clouds"
            ? "app cloud"
            : "app"
          : "app"
      }
    >
      <main>
        <div>{weather.main && <Weather weather={weather} />}</div>
        <div className="pomodoro-container centered">
          <h1>Pomodoro Habits</h1>
          <h2>Change your habits, be productive and focused</h2>
          {pomodoro !== 0 ? <Timer /> : <SetPomodoro />}
        </div>
      </main>
    </div>
  );
}

export default App;
