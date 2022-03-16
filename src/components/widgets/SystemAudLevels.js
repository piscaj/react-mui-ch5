import AdvLevel from "./AdvLevel";
import { useSpringCarousel } from "react-spring-carousel";
import "../../assets/scss/SystemAudioLevels.scss";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function SystemAudLevels() {
  const buttons = [
    <Button
      onClick={() => {
        slideToItem("item-1");
      }}
    >
      Main Program
    </Button>,
        <Button
        onClick={() => {
          slideToItem("item-2");
        }}
      >
        Stage Mic 1
      </Button>,
       <Button
       onClick={() => {
         slideToItem("item-3");
       }}
     >
       Stage Mic 2
     </Button>,
         <Button
         onClick={() => {
           slideToItem("item-4");
         }}
       >
         Wireless 1
       </Button>,
  ];

  const { carouselFragment, slideToItem } = useSpringCarousel({
    items: [
      {
        id: "item-1",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "item-2",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "item-3",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "item-4",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "item-5",
        renderItem: (
          <Box
            sx={{
              display: "block",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          >
            <AdvLevel />
          </Box>
        ),
      },
    ],
  });

  return (
    <>
      <Stack direction="row">
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
    </>
  );
}

export default SystemAudLevels;
