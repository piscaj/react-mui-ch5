import AdvLevel from "./AdvLevel";
import { useSpringCarousel } from "react-spring-carousel";
import "../../assets/scss/SystemAudioLevels.scss";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";

function SystemAudLevels() {
  const buttons = [
    <Button
      onClick={() => {
        slideToItem("program");
      }}
    >
      Main Program
    </Button>,
    <Button
      onClick={() => {
        slideToItem("mic1");
      }}
    >
      Stage Mic 1
    </Button>,
    <Button
      onClick={() => {
        slideToItem("mic2");
      }}
    >
      Stage Mic 2
    </Button>,
    <Button
      onClick={() => {
        slideToItem("wireless1");
      }}
    >
      Wireless 1
    </Button>,
    <Button
      onClick={() => {
        slideToItem("wireless2");
      }}
    >
      Wireless 2
    </Button>,
  ];

  const { carouselFragment, slideToItem } = useSpringCarousel({
    items: [
      {
        id: "program",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "mic1",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "mic2",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "wireless1",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "wireless2",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
    ],
  });

  return (
    <Stack
      direction="row"
      sx={{ flexWrap: "noWrap" }}
      divider={<Divider orientation="vertical" flexItem />}
    >
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
