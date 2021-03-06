import React, { useEffect, useState, useRef } from "react";
import WebXPanel, {
  isActive,
  WebXPanelEvents,
} from "@crestron/ch5-webxpanel/dist/cjs/index.js";
import * as CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib";
import useLocalStorage from "../components/imports/local-storage";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material//styles";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Slide from "@mui/material/Slide";
import "../assets/scss/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCheeseburger,
  faSun,
  faMoon,
  faArrowLeft,
} from "@fortawesome/pro-duotone-svg-icons";
import GHMCLogoSm from "../assets/images/GHMCLogo400.png";
import Box from "@mui/material/Box";
import MenuLeft from "./widgets/MenuLeft";
import PowerButton from "./widgets/PowerButton";
import { DriveLinks, DriveRoutes } from "./widgets/DrivePages";
import "../assets/scss/AdvLevel.scss";
import { useDigitalState } from "./imports/CrComLibHook";

function Main() {
  const [connected, setConnected] = useState(false);

  const digitalStateShowingLogo = useDigitalState("9");
  const digitalStateShowArrow = useDigitalState("9");
  const digitalStateShowBadge = useDigitalState("5");
  //const handleClickLogo = usePublishDigital("0", "0");

  //Make the connection to Crestron Processor
  useEffect(() => {
    const processorIP = process.env.REACT_APP_CRESTRON_PROCESSOR_IP;
    const processorID = process.env.REACT_APP_CRESTRON_PROCESSOR_ID;
    const processorPort = process.env.REACT_APP_CRESTRON_PROCESSOR_PORT;

    //Listen to the processor global
    window.CrComLib = CrComLib;
    window.bridgeReceiveIntegerFromNative =
      CrComLib.bridgeReceiveIntegerFromNative;
    window.bridgeReceiveBooleanFromNative =
      CrComLib.bridgeReceiveBooleanFromNative;
    window.bridgeReceiveStringFromNative =
      CrComLib.bridgeReceiveStringFromNative;
    window.bridgeReceiveObjectFromNative =
      CrComLib.bridgeReceiveObjectFromNative;
    //Make sure the WebXpanel object is ready and
    //initialize the connection to the processor
    if (isActive) {
      WebXPanel.initialize({
        host: processorIP,
        ipId: processorID,
        port: processorPort,
      });
    }
    //This callback will trigger when the WebXPanel CIP is connected.
    WebXPanel.addEventListener(WebXPanelEvents.CONNECT_CIP, ({ detail }) => {
      console.warn(`Websocket connected: `, detail.url);
      setConnected(true);
    });
    //This callback will trigger when the WebXPanel CIP is disconnected.
    WebXPanel.addEventListener(WebXPanelEvents.DISCONNECT_CIP, ({ detail }) => {
      console.warn(`Websocket disconnected: `, detail);
      setConnected(false);
    });
    return () => {};
  }, []);

  //TO DO Run alerts to user based on connection if needed
  useEffect(() => {
    return () => {};
  }, [connected]);

  const [loader, setLoader] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    active: false,
    severity: "info",
    title: "None",
    message: "None",
  });
  const [mode, setMode] = useLocalStorage("mode", "dark");
  const menuLeft = useRef();

  const clearAlert = () => {
    alertMessage.active === true
      ? setAlertMessage({ active: false })
      : setAlertMessage({ active: true });
  };

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [setMode]
  );

  var theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#585852" : "#f7a319",
          },
          secondary: {
            main: mode === "light" ? "#c3da65" : "#c3da65",
          },
          error: {
            main: mode === "light" ? "#f44336" : "#f44336",
          },
          warning: {
            main: mode === "light" ? "#0096ff" : "#0096ff",
          },
          background: {
            default: mode === "light" ? "#d8d8d8" : "#6f6c6c",
            paper: mode === "light" ? "#fff" : "#434343",
          },
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="container">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
          onClick={() => {
            setLoader(false);
          }}
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
            <Box sx={{ p: "5px" }}>
              <CircularProgress color="inherit" />
            </Box>
            <Box sx={{ p: "5px" }}>Updating</Box>
          </Box>
        </Backdrop>
        <MenuLeft ref={menuLeft} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          className="header"
        >
          <Slide
            direction="down"
            in={alertMessage.active}
            mountOnEnter
            unmountOnExit
          >
            <Box
              className="alert"
              onClick={() => {
                clearAlert();
              }}
            >
              <Alert severity={alertMessage.severity}>
                <AlertTitle> {alertMessage.title}</AlertTitle>
                {alertMessage.message}
              </Alert>
            </Box>
          </Slide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "45px",
              }}
            >
              <IconButton
                className="burger-menu hideHoverIconButton"
                onClick={() => menuLeft.current.toggleDrawer()}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  size="2x"
                  className="icon-bars"
                />
                <FontAwesomeIcon
                  icon={faCheeseburger}
                  size="2x"
                  className="icon-burger"
                />
              </IconButton>
            </Box>
            <Box
              className="logoSm"
              sx={{
                ml: "35px",
                mt: "5px",
              }}
            >
              {digitalStateShowingLogo === false ? (
                theme.palette.mode === "dark" ? (
                  <Slide direction="down" in={digitalStateShowBadge}>
                    <img src={GHMCLogoSm} alt="" />
                  </Slide>
                ) : (
                  <Slide direction="down" in={digitalStateShowBadge}>
                    <img src={GHMCLogoSm} alt="" />
                  </Slide>
                )
              ) : (
                <Slide direction="down" in={digitalStateShowArrow}>
                  <Box sx={{ ml: "20px", position: "relative" }}>
                    <Box>
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        size="2x"
                        className="fa-bounce"
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: "40px",
                          bottom: "7px",
                          display: "inline-block",
                        }}
                      >
                        Start
                      </Box>
                    </Box>
                  </Box>
                </Slide>
              )}
            </Box>

            <Box sx={{ ml: "auto", fontSize: "12px" }}>
              {theme.palette.mode} mode
              <IconButton
                className="hideHoverIconButton"
                sx={{ mb: "5px", mt: "5px" }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <FontAwesomeIcon icon={faMoon} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faSun} size="lg" />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box className="body">
          <DriveRoutes />

          <DriveLinks />
        </Box>
        <Box className="footer">
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                p: "3px",
                ml: "auto",
              }}
            >
              <PowerButton
                digitalJoinShow="5"
                digitalJoin="6"
                digitalJoinOk="7"
                digitalJoinCancel="8"
                themeMode={mode}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
