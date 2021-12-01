import Button from "../components/Button";
import { SettingsContext } from "../context/SettingsContext";
import React, {useContext } from "react";
import CountdownAnimation from "../components/CountdownAnimation";

function Timer() {
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  return (
    <>
      <div className="container-flex-row">
        <li>
          <Button
            title="Work"
            activeClass={
              executing.active === "work" ? "active-label" : undefined
            }
            _callback={() => setCurrentTimer("work")}
          />
        </li>
        <li>
          <Button
            title="Short Break"
            activeClass={
              executing.active === "short" ? "active-label" : undefined
            }
            _callback={() => setCurrentTimer("short")}
          />
        </li>
        <li>
          <Button
            title="Long Break"
            activeClass={
              executing.active === "long" ? "active-label" : undefined
            }
            _callback={() => setCurrentTimer("long")}
          />
        </li>
      </div>

      <div className="timer-container">
        <div className="time-wrapper">
          <CountdownAnimation
            key={pomodoro}
            timer={pomodoro}
            animate={startAnimate}
          >
            {children}
          </CountdownAnimation>
        </div>
      </div>
      <div className="button-wrapper">
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
  );
}

export default Timer;
