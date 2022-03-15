import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useDigitalState,
  usePublishDigital,
  usePublishDigitalLatch,
} from "../imports/CrComLibHook";

const MuiIconButton = ({
  muiColor = "primary",
  muiColorFeedback = "secondary",
  addStyle = {},
  faIconInactive,
  faIconActive,
  faClass,
  faSize,
  idName,
  digitalJoin = "0",
  digitalPulseTime = 0,
  eventType = "click",
  disableRipple = false,
  butRadius = 5,
  hoverColor = "",
}) => {
  const [style, styleState] = useState({ value: "primary" });
  const digitalState = useDigitalState(digitalJoin);
  const handleClick = usePublishDigital(digitalJoin, digitalPulseTime);
  const handleTouchDown = usePublishDigitalLatch(digitalJoin, true);
  const handleTouchUp = usePublishDigitalLatch(digitalJoin, false);

  //Digital state feedback
  useEffect(() => {
    digitalState === true
      ? styleState({ value: muiColorFeedback })
      : styleState({ value: muiColor });

    return () => {};
  }, [digitalState, muiColor, muiColorFeedback]);

  const useStyles = makeStyles({
    button: {
      textTransform: "none",
      lineHeight: "15px",
      borderRadius: butRadius,
      "&:hover": {
        backgroundColor: hoverColor,
      },
      //add additional styling here if needed
    },
  });
  const classes = useStyles();

  return (
    <div>
      {eventType === "click" ? (
        <IconButton
          id={idName}
          color={style.value}
          style={addStyle}
          className={classes.button}
          onClick={handleClick}
          disableRipple={disableRipple}
        >
          {!digitalState && faIconInactive ? (
            <Box
              sx={{
                p: "2.5px",
              }}
            >
              <FontAwesomeIcon
                icon={faIconInactive}
                size={faSize}
                className={faClass}
              />
            </Box>
          ) : undefined}
          {digitalState && faIconActive ? (
            <Box
              sx={{
                p: "2.5px",
              }}
            >
              <FontAwesomeIcon
                icon={faIconActive}
                size={faSize}
                className={faClass}
              />
            </Box>
          ) : undefined}
        </IconButton>
      ) : undefined}
      {eventType === "press" ? (
        <IconButton
          id={idName}
          color={style.value}
          style={addStyle}
          className={classes.button}
          onMouseDown={handleTouchDown}
          onMouseUp={handleTouchUp}
          onTouchStart={handleTouchDown}
          onTouchEnd={handleTouchUp}
          disableRipple={disableRipple}
        >
          {faIconInactive ? (
            <Box
              sx={{
                p: "2.5px",
              }}
            >
              <FontAwesomeIcon
                icon={faIconInactive}
                size={faSize}
                className={faClass}
              />
            </Box>
          ) : undefined}
        </IconButton>
      ) : undefined}
    </div>
  );
};

MuiIconButton.propTypes = {
  muiColor: PropTypes.string,
  muiColorFeedback: PropTypes.string,

  addStyle: PropTypes.object,
  faIcon: PropTypes.object,
  digitalJoin: PropTypes.string,

  digitalPulseTime: PropTypes.number,
  eventType: PropTypes.string,
  ripple: PropTypes.bool,
  butRadius: PropTypes.number,
  hoverColor: PropTypes.string,
};

export default MuiIconButton;
