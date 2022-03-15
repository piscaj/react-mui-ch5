import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeDown } from "@fortawesome/pro-duotone-svg-icons";
import { useAnalogState, usePublishAnalog } from "../imports/CrComLibHook";

const SliderHorizontal = ({ analogJoin = "0", styleClass = "", hoverColor = "" }) => {


  const [barValue, setbarValue] = useState("25");
  const [moving, setMoving] = useState(false);
  var movingTimeout;
  const handleCommitted = (event, value) => {
    movingTimeout = setTimeout(() => {
      setMoving(false);
    }, 2000);
  };
  const analogState = useAnalogState(analogJoin);
  const publishAnalog = usePublishAnalog(analogJoin, barValue);

  const handleChange = (event, value) => {
    //Clear the last timeout for feedback
    clearTimeout(movingTimeout);
    //Reset... We are moving the slider, so stop feedback
    setMoving(true);
    //The slider moving "event" likes to trigger on the same value more than once,
    //so lets clean this up and make sure we are not sending
    // duplicate values down the websocket to the processor.
    if (barValue + 1 !== value) publishAnalog();
    setbarValue(value);
  };

  useEffect(() => {
    if (!moving) {
      setbarValue(analogState);
    }
    return () => {};
  }, [analogState, moving]);

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 1 }} alignItems="center">
      <FontAwesomeIcon icon={faVolumeDown} size="lg" />
      <Slider
        className={styleClass}
        valueLabelDisplay="auto"
        value={isNaN(parseInt(barValue, 10)) ? 10 : parseInt(barValue, 10)}
        onChange={handleChange}
        onChangeCommitted={handleCommitted}
      />
      <FontAwesomeIcon icon={faVolumeUp} size="lg" />
    </Stack>
  );
};

SliderHorizontal.propTypes = {
  analogJoin: PropTypes.string,
  styleClass: PropTypes.string,
};

export default SliderHorizontal;
