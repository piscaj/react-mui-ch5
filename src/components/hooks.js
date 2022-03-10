import * as CrComLib from "@crestron/ch5-crcomlib";
import { useCallback, useEffect, useState } from "react";

// Number (Analog) send and receive
function useSignalStateNumber(signalName) {
  const [feedbackNumber, setFeedbackNumber] = useState();
  useEffect(() => {
    const subscriptionID = CrComLib.subscribeState(
      "number",
      signalName,
      setFeedbackNumber
    );
    return () => {
      CrComLib.unsubscribeState("number", signalName, subscriptionID);
    };
  }, [signalName]);

  return feedbackNumber;
}

// Bool (Digital) send and receive
function useSignalStateBool(signalName) {
  const [feedbackBool, setFeedbackBool] = useState();
  useEffect(() => {
    const subscriptionID = CrComLib.subscribeState(
      "boolean",
      signalName,
      setFeedbackBool
    );
    return () => {
      CrComLib.unsubscribeState("boolean", signalName, subscriptionID);
    };
  }, [signalName]);

  return feedbackBool;
}

// String send and receive
function useSignalStateString(signalName) {
  const [feedbackString, setFeedbackString] = useState();
  useEffect(() => {
    const subscriptionID = CrComLib.subscribeState(
      "string",
      signalName,
      setFeedbackString
    );
    return () => {
      CrComLib.unsubscribeState("string", signalName, subscriptionID);
    };
  }, [signalName]);

  return feedbackString;
}

export function useAnalogState(signalName) {
  return useSignalStateNumber(signalName, 0);
}

export function useDigitalState(signalName) {
  return useSignalStateBool(signalName, false);
}

export function useStringState(signalName) {
  return useSignalStateString(signalName, "");
}

export function usePublishAnalog(signalName, value) {
  return useCallback(() => {
    CrComLib.publishEvent("number", signalName, value);
  }, [signalName, value]);
}

export function usePublishDigital(signalName, delay) {
  if (delay === 0) {
    delay = 200;
  }
  return useCallback(() => {
    CrComLib.publishEvent("boolean", signalName, true);
    setTimeout(function () {
      CrComLib.publishEvent("boolean", signalName, false);
    }, delay);
  }, [delay, signalName]);
}

export function usePublishDigitalLatch(signalName, value) {
  return useCallback(() => {
    CrComLib.publishEvent("boolean", signalName, value);
  }, [signalName, value]);
}

export function usePublishString(signalName, value) {
  return useCallback(() => {
    CrComLib.publishEvent("string", signalName, value);
  }, [signalName, value]);
}
