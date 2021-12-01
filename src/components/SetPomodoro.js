import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";
import Slider from "@mui/material/Slider";
import { green, purple, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#ffab61',
    },
  },
});

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: "work",
    value: 0,
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    // console.log(name);
    switch (name) {
      case "work":
        // console.log(true);
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="form-container">
    <ThemeProvider theme={theme}>
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div className="label-slider">
            <p>Work Duration (min)</p>
            <label>{newTimer.work}</label>
          </div>
          <Slider
            max={120}
            valueLabelDisplay="auto"
            aria-label="work thumb label"
            defaultValue={20}
            name="work"
            onChange={handleChange}
            value={newTimer.work}
            sx={{
              color: 'secondary.main'
            }}
          />
          <div className="label-slider">
            <p>Short Duration (min)</p>
            <label>{newTimer.short}</label>
          </div>
          <Slider
            max={15}
            valueLabelDisplay="auto"
            aria-label="short thumb label"
            defaultValue={20}
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
            sx={{
              color: 'secondary.main'
            }}
          />
          <div className="label-slider">
            <p>Long Duration (min)</p>
            <label>{newTimer.long}</label>
          </div>
          <Slider
            max={45}
            valueLabelDisplay="auto"
            aria-label="long thumb label"
            defaultValue={20}
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
            sx={{
              color: 'secondary.main'
            }}
          />
          <button type="submit">Set Timer</button>
        </div>
      </form>
       </ThemeProvider>
    </div>
  );
};

export default SetPomodoro;
