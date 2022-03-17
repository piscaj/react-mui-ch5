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
  const [aValue, setAValue] = useState("1");
  const analogState = useAnalogState("5");
  const publishAnalog = usePublishAnalog("5", aValue);

  const { carouselFragment, slideToItem } = useSpringCarousel({
    disableGestures: true,
    items,
  });

  useEffect(() => {
    let item = "" + analogState;
    slideToItem(item.toString());
    return () => {};
  }, [analogState, slideToItem]);

  useEffect(() => {
    publishAnalog();
    return () => {};
  }, [aValue, publishAnalog]);

  const handleClick = (value) => {
    setAValue(value);
  };

  const buttons = [
    <Button key="1" onClick={() => handleClick(1)}>
      Main Program
    </Button>,
    <Button key="2" onClick={() => handleClick(2)}>
      Stage Mic 1
    </Button>,
    <Button key="3" onClick={() => handleClick(3)}>
      Stage Mic 2
    </Button>,
    <Button key="4" onClick={() => handleClick(4)}>
      Wireless 1
    </Button>,
    <Button key="5" onClick={() => handleClick(5)}>
      Wireless 2
    </Button>,
  ];

  return (
    <Stack
      direction="row"
      sx={{ flexWrap: "noWrap" }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Divider orientation="vertical" flexItem />
      <Stack
        direction="row"
        sx={{ overflow: "hidden", width: "250px", p: "10px" }}
      >
        {carouselFragment}
      </Stack>
      <ButtonGroup orientation="vertical" variant="text">
        {buttons}
      </ButtonGroup>
    </Stack>
  );
}

export default SystemAudLevels;
