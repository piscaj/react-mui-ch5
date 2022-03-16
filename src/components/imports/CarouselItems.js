import AdvLevel from "../widgets/AdvLevel"
import Box from "@mui/material/Box";

export const carouselItems = {
    items: [
      {
        id: "program",
        renderItem: (
          <Box className="center-content">
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "mic1",
        renderItem: (
          <Box className="center-content">
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "mic2",
        renderItem: (
          <Box className="center-contentt">
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "wireless1",
        renderItem: (
          <Box className="center-content">
            <AdvLevel />
          </Box>
        ),
      },
      {
        id: "wireless2",
        renderItem: (
          <Box className="center-content">
            <AdvLevel />
          </Box>
        ),
      },
    ],
  };
