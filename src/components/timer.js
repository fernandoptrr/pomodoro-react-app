import Button from "../components/Button";
import { SettingsContext } from "../context/SettingsContext";
import React, { useContext } from "react";
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
      <div className="button-flex-container">
        <li>
          <Button
            title="Work"
            activeClass={executing.active === "work" ? "active" : undefined}
            _callback={() => setCurrentTimer("work")}
          />
        </li>
        <li>
          <Button
            title="Short Break"
            activeClass={executing.active === "short" ? "active" : undefined}
            _callback={() => setCurrentTimer("short")}
          />
        </li>
        <li>
          <Button
            title="Long Break"
            activeClass={executing.active === "long" ? "active" : undefined}
            _callback={() => setCurrentTimer("long")}
          />
        </li>
      </div>

      <div className="timer-container">
        <CountdownAnimation
          key={pomodoro}
          timer={pomodoro}
          animate={startAnimate}
        >
          {children}
        </CountdownAnimation>
      </div>
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
  );
}

export default Timer;
