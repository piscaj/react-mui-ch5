import React, { useState, useEffect } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import "../../assets/scss/SystemAudioLevels.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import { carouselItems } from "../imports/CarouselItems";
import { useAnalogState, usePublishAnalog } from "../imports/CrComLibHook";

function SystemAudLevels() {
  const items = carouselItems.items;
  const [num, setNum] = useState();
  const [numFb, setNumFb] = useState();
  const analogState = useAnalogState("5");
  const publishAnalog = usePublishAnalog("5", num);

  const { carouselFragment, slideToItem } = useSpringCarousel({
    disableGestures: true,
    items,
  });

  useEffect(() => {
    if (analogState === undefined) return;
    let item = "" + analogState;
    item = item.toString();
    if (item === "0") return;
    setNumFb(analogState);
    slideToItem(item);
    return () => {};
  }, [analogState, slideToItem]);

  useEffect(() => {
    if (num === undefined) return;
    publishAnalog();
    return () => {};
  }, [num, publishAnalog]);

  const handleClick = (value) => {
    setNum(value);
  };

  const buttons = [
    <Button
      key="1"
      color={numFb === 1 ? "secondary" : "primary"}
      onClick={() => handleClick(1)}
      variant="contained"
      disableElevation
    >
      Program
    </Button>,
    <Button
      key="2"
      color={numFb === 2 ? "secondary" : "primary"}
      onClick={() => handleClick(2)}
      variant="contained"
      disableElevation
    >
      Stage Mic 1
    </Button>,
    <Button
      key="3"
      color={numFb === 3 ? "secondary" : "primary"}
      onClick={() => handleClick(3)}
      variant="contained"
      disableElevation
    >
      Stage Mic 2
    </Button>,
    <Button
      key="4"
      color={numFb === 4 ? "secondary" : "primary"}
      onClick={() => handleClick(4)}
      variant="contained"
      disableElevation
    >
      Wireless 1
    </Button>,
    <Button
      key="5"
      color={numFb === 5 ? "secondary" : "primary"}
      onClick={() => handleClick(5)}
      variant="contained"
      disableElevation
    >
      Wireless 2
    </Button>,
  ];

  return (
    <Stack
      direction="row"
      sx={{ flexWrap: "noWrap" }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <ButtonGroup orientation="vertical" variant="text">
          {buttons}
        </ButtonGroup>
      </Stack>

      <Stack
        direction="row"
        sx={{ overflow: "hidden", width: "250px", p: "10px" }}
      >
        {carouselFragment}
      </Stack>
      <Divider orientation="vertical" flexItem />
    </Stack>
  );
}

export default SystemAudLevels;
