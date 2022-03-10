import { useEffect, useState } from "react";
import WebXPanel, {
  isActive,
  WebXPanelEvents,
} from "@crestron/ch5-webxpanel/dist/cjs/index.js";
import * as CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib";
import { useDigitalState, usePublishDigital } from "./hooks";

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

  const screenDownState = useDigitalState("1");
  const screenUpState = useDigitalState("2");
  const handleDownStateClick = usePublishDigital("1", 0);
  const handleUpStateClick = usePublishDigital("2", 0);


  return (
    <div>
      Crestron CH-5
      <button disabled={screenDownState} onClick={handleDownStateClick}>
        Open
      </button>
      <button disabled={screenUpState} onClick={handleUpStateClick}>
        close
      </button>
    </div>
  );
}

export default Main;
