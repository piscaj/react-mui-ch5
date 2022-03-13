import Box from "@mui/material/Box";
import SliderVertical from "../widgets/SliderVertical";
import MuiButton from "../widgets/MuiButton";
import {
  faCircleArrowUp,
  faCircleArrowDown,
  faVolume,
  faVolumeSlash,
} from "@fortawesome/pro-duotone-svg-icons";
import "../../assets/scss/AdvLevel.scss";

function AdvLevel() {
  const marks = [
    {
      value: 5,
      label: "-40",
    },
    {
      value: 75,
      label: "0",
    },
    {
      value: 95,
      label: "+10",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: "10px",
        }}
      >
        Level Control
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ p: "3px" }}>
              <MuiButton
                digitalJoin="20"
                butRadius={37}
                muiVariant="text"
                faIconInactive={faCircleArrowUp}
                faIconActive={faCircleArrowUp}
                faSize={"4x"}
                addStyle={{
                  maxWidth: "75px",
                  maxHeight: "75px",
                  minWidth: "75px",
                  minHeight: "75px",
                }}
                hoverColor={"inherit"}
                eventType={"press"}
              />
            </Box>
            <Box sx={{ p: "3px" }}>
              <MuiButton
                digitalJoin="21"
                butRadius={37}
                muiVariant="text"
                faIconInactive={faCircleArrowDown}
                faIconActive={faCircleArrowDown}
                faSize={"4x"}
                addStyle={{
                  maxWidth: "75px",
                  maxHeight: "75px",
                  minWidth: "75px",
                  minHeight: "75px",
                }}
                hoverColor={"inherit"}
                eventType={"press"}
              />
            </Box>
          </Box>
          <Box
            sx={{
              height: "185px",
            }}
          >
            <SliderVertical
              analogJoin="1"
              marks={marks}
              styleClass="hideThumb sizeTrack sizeRail"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ p: "3px" }}>
            <MuiButton
              text="0 db"
              muiVariant="text"
              addStyle={{
                maxWidth: "100px",
                maxHeight: "35px",
                minWidth: "100px",
                minHeight: "35px",
              }}
              hoverColor={"inherit"}
            />
          </Box>
          <Box sx={{ p: "3px" }}>
            <MuiButton
              digitalJoin="22"
              text="Mute"
              faIconInactive={faVolume}
              faIconActive={faVolumeSlash}
              faSize={"2x"}
              addStyle={{
                maxWidth: "100px",
                maxHeight: "55px",
                minWidth: "100px",
                minHeight: "55px",
              }}
              hoverColor={"inherit"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdvLevel;
