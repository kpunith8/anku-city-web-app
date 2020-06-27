import React from "react";
import { useLocalStorage } from "react-use";
import IconButton from "@material-ui/core/IconButton";

import { Brightness4, BrightnessHigh } from "@material-ui/icons";
import { Tooltip, Zoom } from "@material-ui/core";

const UIMode = ({ prefersDarkMode, setMode, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [__, setDefaultUIMode] = useLocalStorage("anku-city-ui-mode");

  const onModeChange = () => {
    if (prefersDarkMode) {
      document.body.style.transition = "background 0.4s linear";
      setDefaultUIMode("light");
      setMode("light");
    } else {
      setDefaultUIMode("dark");
      setMode("dark");
    }
  };

  return (
    <div className="ui-mode">
      {prefersDarkMode ? (
        <Tooltip title="Toggle dark theme" TransitionComponent={Zoom}>
          <IconButton color="inherit" onClick={onModeChange} {...props}>
            <BrightnessHigh />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Toggle light theme" TransitionComponent={Zoom}>
          <IconButton color="inherit" onClick={onModeChange} {...props}>
            <Brightness4 />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default UIMode;
