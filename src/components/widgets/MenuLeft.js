import { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faWebcam,
  faDesktop,
  faTheaterMasks,
  faExchangeAlt,
  faProjector,
  faTv,
} from "@fortawesome/pro-duotone-svg-icons";
import "../../assets/scss/MenuL.scss";
import { useDigitalState, usePublishDigital } from "../imports/CrComLibHook";

const MenuLeft = forwardRef((props, ref) => {
  const [drawerOpen, drawerOpenState] = useState({ value: false });

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
      <Box>
        <SwipeableDrawer
          anchor="left"
          open={drawerOpen.value}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
        >
          <Box sx={{ width: "270px" }}>
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
                  <FontAwesomeIcon icon={faDesktop} size="2x" />
                </ListItemIcon>

                <ListItemText
                  primary="Room PC"
                  secondary="for ZOOM conference"
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
                  <FontAwesomeIcon icon={faLaptop} size="2x" />
                </ListItemIcon>

                <ListItemText primary="Laptop" secondary="& portable devices" />
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
                  <FontAwesomeIcon icon={faWebcam} size="2x" />
                </ListItemIcon>

                <ListItemText primary="Camera Controls" secondary="& presets" />
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
                  <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
                </ListItemIcon>

                <ListItemText
                  primary="Video Switching"
                  secondary="Advanced source routing"
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
                  <FontAwesomeIcon icon={faTheaterMasks} size="2x" />
                </ListItemIcon>

                <ListItemText primary="Showcase" secondary="MUI Components" />
              </ListItem>
            </List>
            <Divider />
          </Box>
        </SwipeableDrawer>
      </Box>
    </>
  );
});

export default MenuLeft;
