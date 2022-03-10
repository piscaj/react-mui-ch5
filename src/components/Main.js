import React, { useEffect, useState } from "react";
import WebXPanel, {
  isActive,
  WebXPanelEvents,
} from "@crestron/ch5-webxpanel/dist/cjs/index.js";
import * as CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib";

import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material//styles";
import { deepOrange, grey, indigo } from "@mui/material/colors";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import MuiButton from "./MuiButton";

function Main() {
  const [connected, setConnected] = useState(false);

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
    WebXPanel.addEventListener(WebXPanelEvents.CONNECT_CIP, ({ detail }) => {
      console.warn(`Websocket connected: `, detail.url);
      setConnected(true);
    });
    WebXPanel.addEventListener(WebXPanelEvents.DISCONNECT_CIP, ({ detail }) => {
      console.warn(`Websocket disconnected: `, detail);
      setConnected(false);
    });
    return () => {};
  }, []);

  useEffect(() => {
    return () => {};
  }, [connected]);

  const [mode, setMode] = useState("light");

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
            ...indigo,
            ...(mode === "light" && {
              main: indigo[900],
            }),
          },
          secondary: {
            ...deepOrange,
            ...(mode === "light" && {
              main: deepOrange[900],
            }),
          },
          ...(mode === "dark" && {
            primary: {
              main: indigo[100],
            },
            secondary: {
              main: deepOrange[300],
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: "#fff",
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        sx={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          m: "10px",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box sx={{ m: "15px" }}>
            <Header title={"Showcase"} />
          </Box>
          <Box sx={{ fontSize: "12px", mb: "5px" }}>MUI Button</Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              mb: "20px",
            }}
          >
            <Box sx={{ p: "5px" }}>
              <MuiButton
                text="Contained"
                muiColor="primary"
                muiColorFeedback="secondary"
                muiVariant="contained"
                digitalJoin="1"
              />
            </Box>
            <Box sx={{ p: "5px" }}>
              <MuiButton
                text="Outlined"
                muiColor="success"
                muiColorFeedback="error"
                muiVariant="outlined"
                digitalJoin="2"
              />
            </Box>
            <Box sx={{ p: "5px" }}>
              <MuiButton
                text="Some Text"
                muiVariant="text"
                addStyle={{
                  maxWidth: "130px",
                  maxHeight: "25px",
                  minWidth: "130px",
                  minHeight: "25px",
                }}
                muiColor="primary"
                muiColorFeedback="error"
                digitalJoin=""
              />
            </Box>
            <Box sx={{ p: "5px" }}>
              <MuiButton
                text="Press"
                muiVariant="contained"
                muiColor="success"
                muiColorFeedback="error"
                eventType={"press"}
                digitalJoin=""
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default Main;
