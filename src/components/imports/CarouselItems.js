import AdvLevel from "../widgets/AdvLevel";
import Box from "@mui/material/Box";

export const carouselItems = {
  items: [
    {
      id: "1",
      renderItem: (
        <Box className="center-content">
          <AdvLevel
            name="Program"
            plusDigitalJoin="51"
            minusDigitalJoin="52"
            muteDigitalJoin="53"
            levelTextSerialJoin="10"
            levelAnalogJoin="10"
          />
        </Box>
      ),
    },
    {
      id: "2",
      renderItem: (
        <Box className="center-content">
          <AdvLevel
            name="Microphone 1"
            plusDigitalJoin="54"
            minusDigitalJoin="55"
            muteDigitalJoin="56"
            levelTextSerialJoin="11"
            levelAnalogJoin="11"
          />
        </Box>
      ),
    },
    {
      id: "3",
      renderItem: (
        <Box className="center-content">
          <AdvLevel
            name="Microphone 2"
            plusDigitalJoin="57"
            minusDigitalJoin="58"
            muteDigitalJoin="59"
            levelTextSerialJoin="12"
            levelAnalogJoin="12"
          />
        </Box>
      ),
    },
    {
      id: "4",
      renderItem: (
        <Box className="center-content">
          <AdvLevel
            name="Wireless 1"
            plusDigitalJoin="60"
            minusDigitalJoin="61"
            muteDigitalJoin="62"
            levelTextSerialJoin="13"
            levelAnalogJoin="13"
          />
        </Box>
      ),
    },
    {
      id: "5",
      renderItem: (
        <Box className="center-content">
          <AdvLevel
            name="Wireless 2"
            plusDigitalJoin="63"
            minusDigitalJoin="64"
            muteDigitalJoin="65"
            levelTextSerialJoin="14"
            levelAnalogJoin="14"
          />
        </Box>
      ),
    },
  ],
};
