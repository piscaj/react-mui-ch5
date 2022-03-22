import { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faWebcam,
  faTv,
  faWalkieTalkie,
  faBoombox,
  faArrowsCross,
  faCassetteTape,
} from "@fortawesome/pro-duotone-svg-icons";
import "../../assets/scss/MenuL.scss";
import { useDigitalState, usePublishDigital } from "../imports/CrComLibHook";

const MenuLeft = forwardRef((props, ref) => {
  const [drawerOpen, drawerOpenState] = useState({ value: false });

  const Puller = styled(Box)(({ theme }) => ({
    width: 6,
    height: 30,
    backgroundColor: theme.palette.mode === "light" ? grey[900] : grey[200],
    borderRadius: 3,
    top: "45%",
    position: "absolute",
  }));

  //iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping frames. The performance will be good enough.
  //iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const setDrawerOpen = (newState) => {
    drawerOpenState({ value: newState });
  };

  useImperativeHandle(ref, () => ({
    toggleDrawer() {
      drawerOpenState({ value: drawerOpen.value === false ? true : false });
    },
  }));

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Puller />
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen.value}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <Box
          sx={{
            width: "270px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "10px",
              right: "0px",
              top: "45%",
            }}
          >
            <Puller />
          </Box>
          <List>
            <ListItem
              selected={useDigitalState("10")}
              button
              onMouseDown={usePublishDigital("10", 0)}
              onMouseUp={() => {
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faBoombox} size="2x" />
              </ListItemIcon>

              <ListItemText
                primary="Audio System"
                secondary="Power and level controls"
              />
            </ListItem>
          </List>
          <List>
            <ListItem
              selected={useDigitalState("11")}
              button
              onMouseDown={usePublishDigital("11", 0)}
              onMouseUp={() => {
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faArrowsCross} size="2x" />
              </ListItemIcon>

              <ListItemText
                primary="Presentation Switcher"
                secondary="Stage video inputs"
              />
            </ListItem>
          </List>
          <List>
            <ListItem
              selected={useDigitalState("12")}
              button
              onMouseDown={usePublishDigital("12", 0)}
              onMouseUp={() => {
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faCompactDisc} size="2x" />
              </ListItemIcon>

              <ListItemText primary="Blu-Ray" secondary="Transport controls" />
            </ListItem>
          </List>
          <List>
            <ListItem
              selected={useDigitalState("13")}
              button
              onMouseDown={usePublishDigital("13", 0)}
              onMouseUp={() => {
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faTv} size="2x" />
              </ListItemIcon>

              <ListItemText
                primary="Displays"
                secondary="Building wide display control"
              />
            </ListItem>
          </List>
          <List>
            <ListItem
              selected={useDigitalState("14")}
              button
              onMouseDown={usePublishDigital("14", 0)}
              onMouseUp={() => {
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faWebcam} size="2x" />
              </ListItemIcon>

              <ListItemText primary="Camera" secondary="Controls & presets" />
            </ListItem>
          </List>
          <List>
            <ListItem
              selected={useDigitalState("15")}
              button
              onMouseDown={usePublishDigital("15", 0)}
              onMouseUp={() => {
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faWalkieTalkie} size="2x" />
              </ListItemIcon>

              <ListItemText
                primary="Communication"
                secondary="Intercom & paging controls"
              />
            </ListItem>
          </List>
          <List>
            <ListItem
              selected={useDigitalState("16")}
              button
              onMouseDown={usePublishDigital("16", 0)}
              onMouseUp={() => {
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faCassetteTape} size="2x" />
              </ListItemIcon>

              <ListItemText
                primary="Recording"
                secondary="Video & audio recorders"
              />
            </ListItem>
          </List>

          <Divider />
        </Box>
      </SwipeableDrawer>
    </>
  );
});

export default MenuLeft;
