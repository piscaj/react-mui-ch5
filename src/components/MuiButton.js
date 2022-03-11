import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDigitalState, usePublishDigital } from "./imports/hooks";

const MuiButton = ({
  text,
  muiColor = "primary",
  muiColorFeedback = "secondary",
  muiVariant = "outlined",
  addStyle = {},
  faIcon,
  faClass,
  faSize,
  idName,
  digitalJoin = "0",
  serialJoin = "0",
  digitalPulseTime = 0,
  eventType = "click",
  ripple = false,
}) => {
  const [style, styleState] = useState({ value: "primary" });
  const [dynamicText, dynamicTextState] = useState({ value: "" });
  const digitalState = useDigitalState(digitalJoin);
  const handleClick = usePublishDigital(digitalJoin, digitalPulseTime);

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
          disableRipple={ripple}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {faIcon ? (
              <Box
                sx={{
                  p: "2.5px",
                }}
              >
                <FontAwesomeIcon
                  icon={faIcon}
                  size={faSize}
                  className={faClass}
                />
              </Box>
            ) : undefined}
            {text === "" && dynamicText.value === "" ? undefined : (
              <Box
                sx={{
                  p: "2.5px",
                }}
              >
                {dynamicText.value === "" ? text : dynamicText.value}
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
          onMouseDown={() => {}}
          onMouseUp={() => {}}
          onTouchStart={() => {}}
          onTouchEnd={() => {}}
          disableRipple={ripple}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {faIcon ? (
              <Box
                sx={{
                  p: "2.5px",
                }}
              >
                <FontAwesomeIcon
                  icon={faIcon}
                  size={faSize}
                  className={faClass}
                />
              </Box>
            ) : undefined}
            {text === "" && dynamicText.value === "" ? undefined : (
              <Box
                sx={{
                  p: "2.5px",
                }}
              >
                {dynamicText.value === "" ? text : dynamicText.value}
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
};

export default MuiButton;
