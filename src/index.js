import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import WebXPanel, {
  isActive,
  getVersion,
  getBuildDate,
} from "@crestron/ch5-webxpanel/dist/cjs/index.js";
import * as CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib";

const processorIP = process.env.REACT_APP_CRESTRON_PROCESSOR_IP;
const processorID = process.env.REACT_APP_CRESTRON_PROCESSOR_ID;
const processorPort = process.env.REACT_APP_CRESTRON_PROCESSOR_PORT;

//Listen to the processor
window.CrComLib = CrComLib;
window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;

//Connect to the processor
if (isActive) {
  //console.log("WebXPanel isActive: ", isActive);
  console.log("WebXPanel version: ", getVersion());
  console.log("WebXPanel build date: ", getBuildDate());

  WebXPanel.initialize({
    host: processorIP,
    ipId: processorID,
    port: processorPort,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//reportWebVitals(console.log)

reportWebVitals();
