import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useDigitalState,
  usePublishDigital,
  usePublishDigitalLatch,
  useStringState,
} from "../imports/CrComLibHook";

const MuiButton = ({
  text,
  muiColor = "primary",
  muiColorFeedback = "secondary",
  muiVariant = "outlined",
  addStyle = {},
  faIconInactive,
  faIconActive,
  faClass,
  faSize,
  idName,
  digitalJoin = "0",
  serialJoin = "0",
  digitalPulseTime = 0,
  eventType = "click",
  disableRipple = false,
  butRadius = 5,
  hoverColor = "",
}) => {
  const [style, styleState] = useState({ value: "primary" });
  const [dynamicText, dynamicTextState] = useState("");
  const digitalState = useDigitalState(digitalJoin);
  const serialState = useStringState(serialJoin);
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

  //Serial state feedback
  useEffect(() => {
    dynamicTextState(serialState);
    return () => {};
  }, [serialState]);

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
        <Button
          id={idName}
          variant={muiVariant}
          color={style.value}
          style={addStyle}
          className={classes.button}
          onClick={handleClick}
          disableRipple={disableRipple}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
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

            {text === "" && dynamicText === "" ? undefined : (
              <Box
                sx={{
                  p: "2.5px",
                }}
              >
                {dynamicText === "" ? text : dynamicText}
              </Box>
            )}
          </Box>
        </Button>
      ) : undefined}
      {eventType === "press" ? (
        <Button
          id={idName}
          variant={muiVariant}
          color={style.value}
          style={addStyle}
          className={classes.button}
          onMouseDown={handleTouchDown}
          onMouseUp={handleTouchUp}
          onTouchStart={handleTouchDown}
          onTouchEnd={handleTouchUp}
          disableRipple={disableRipple}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
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
            {text === "" && dynamicText === "" ? undefined : (
              <Box
                sx={
                  {
                    // p: "2.5px",
                  }
                }
              >
                {dynamicText === "" ? text : dynamicText}
              </Box>
            )}
          </Box>
        </Button>
      ) : undefined}
    </div>
  );
};

MuiButton.propTypes = {
  text: PropTypes.string,
  muiColor: PropTypes.string,
  muiColorFeedback: PropTypes.string,
  muiVariant: PropTypes.string,
  addStyle: PropTypes.object,
  faIcon: PropTypes.object,
  digitalJoin: PropTypes.string,
  serialJoin: PropTypes.string,
  digitalPulseTime: PropTypes.number,
  eventType: PropTypes.string,
  ripple: PropTypes.bool,
  butRadius: PropTypes.number,
  hoverColor: PropTypes.string,
};

export default MuiButton;
