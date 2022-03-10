import React from "react";
import { useDigitalState, usePublishDigital } from "./hooks";

function Main() {
  const screenDownState = useDigitalState("1");
  const screenUpState = useDigitalState("2");

  const handleDownStateClick = usePublishDigital("1", 0);
  const handleUpStateClick = usePublishDigital("2", 0);

  return (
    <div>
      Crestron CH-5
      <button
        disabled={screenDownState}
        onClick={handleDownStateClick}
      >Open</button>
      <button
        disabled={screenUpState}
        onClick={handleUpStateClick}
      >close</button>
    </div>
  );
}

export default Main;
