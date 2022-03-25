import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/pro-duotone-svg-icons";
import { Box } from "@mui/material";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "../../assets/scss/PowerButton.scss";
import { useDigitalState, usePublishDigital } from "../imports/CrComLibHook";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PowerButton = ({
  digitalJoinShow = "0",
  digitalJoin = "0",
  digitalJoinOk = "0",
  digitalJoinCancel = "0",
  themeMode = "light",
}) => {
  const [showPower, showPowerState] = useState(false);
  const [open, setOpen] = React.useState(false);
  const digitalStateShow = useDigitalState(digitalJoinShow);
  const handlePowerButtonClick = usePublishDigital(digitalJoin, 0);
  const handleOkClick = usePublishDigital(digitalJoinOk, 0);
  const handleCancelClick = usePublishDigital(digitalJoinCancel, 0);

  //Digital state feedback
  useEffect(() => {
    showPowerState(digitalStateShow);
    return () => {};
  }, [digitalStateShow]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Slide direction="up" in={showPower} mountOnEnter unmountOnExit>
        <Box>
          <Box sx={{ fontSize: "12px", display: "inline-block" }}>
            Power Off
          </Box>
          <IconButton
            sx={{
              mb: "2px",
            }}
            onClick={() => {
              handleClickOpen();
              handlePowerButtonClick();
            }}
          >
            {themeMode === "dark" ? (
              <FontAwesomeIcon
                icon={faPowerOff}
                size="lg"
                className="fa-beat-fade powerButDuoColorDark"
              />
            ) : (
              <FontAwesomeIcon
                icon={faPowerOff}
                size="lg"
                className="fa-beat-fade powerButDuoColorLight"
              />
            )}
          </IconButton>
        </Box>
      </Slide>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        onBackdropClick={() => {handleCancelClick()}}
      >
        <DialogTitle>Shutdown?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Power off audiovisual equipment.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              handleClose();
              handleCancelClick();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              handleClose();
              handleOkClick();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

PowerButton.propTypes = {
  digitalJoin: PropTypes.string,
  digitalJoinShow: PropTypes.string,
};

export default PowerButton;
