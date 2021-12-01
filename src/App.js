import React, { useState, useEffect, useContext } from "react";
import Weather from "./components/weather";
import FetchApi from "./api/fetchApi";
import { SettingsContext } from "./context/SettingsContext";
import Button from "./components/Button";
import SetPomodoro from "./components/SetPomodoro";
import CountdownAnimation from "./components/CountdownAnimation";

function App() {
  const { weather } = FetchApi();

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

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
          <h1>Pomodoro</h1>
          <h2>Change your habits, be productive and focused</h2>
          {pomodoro !== 0 ? (
            <>
              <div className="button-flex-container">
                <li>
                  <Button
                    title="Focus"
                    activeClass={
                      executing.active === "work" ? "active" : undefined
                    }
                    _callback={() => setCurrentTimer("work")}
                  />
                </li>
                <li>
                  <Button
                    title="Short Break"
                    activeClass={
                      executing.active === "short" ? "active" : undefined
                    }
                    _callback={() => setCurrentTimer("short")}
                  />
                </li>
                <li>
                  <Button
                    title="Long Break"
                    activeClass={
                      executing.active === "long" ? "active" : undefined
                    }
                    _callback={() => setCurrentTimer("long")}
                  />
                </li>
              </div>

              {/* <div className="timer-container"> */}
              <div className="timer-container">
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimate}
                >
                  {children}
                </CountdownAnimation>
              </div>
              {/* </div> */}
              <div className="button-flex-container sec">
                <Button
                  title="Start"
                  activeClass={!startAnimate ? "active" : undefined}
                  _callback={startTimer}
                />
                <Button
                  title="Pause"
                  activeClass={startAnimate ? "active" : undefined}
                  _callback={pauseTimer}
                />
                <Button title="Settings" _callback={SettingsBtn} />
              </div>
            </>
          ) : (
            <SetPomodoro />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
