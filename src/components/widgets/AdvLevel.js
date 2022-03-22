import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import SliderVertical from "../widgets/SliderVertical";
import MuiButton from "../widgets/MuiButton";
import MuiIconButton from "../widgets/MuiIconButton";
import {
  faPlus,
  faMinus,
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
    <Card
      variant="outlined"
      sx={{
        textAlign: "center",
        position: "relative",
        width: "165px",
      }}
    >
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
            p: "5px",
            mt: "2px",
          }}
        >
          <Typography variant="h6">Stage</Typography>
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
              <Box sx={{ p: "3px", ml: "3px" }}>
                <MuiIconButton
                  digitalJoin="20"
                  butRadius={8}
                  faIconInactive={faPlus}
                  faSize={"3x"}
                  addStyle={{
                    maxWidth: "75px",
                    maxHeight: "75px",
                    minWidth: "75px",
                    minHeight: "75px",
                  }}
                  hoverColor={"transparent"}
                  eventType={"press"}
                />
              </Box>
              <Box sx={{ p: "3px" }}>
                <MuiIconButton
                  digitalJoin="21"
                  butRadius={8}
                  faIconInactive={faMinus}
                  faSize={"3x"}
                  addStyle={{
                    maxWidth: "75px",
                    maxHeight: "75px",
                    minWidth: "75px",
                    minHeight: "75px",
                  }}
                  hoverColor={"transparent"}
                  eventType={"press"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "65px",
                height: "185px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "185px",
                  right: "-10px",
                }}
              >
                <SliderVertical
                  analogJoin="1"
                  marks={marks}
                  styleClass="hideThumb sizeTrack sizeRail"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ p: "5px" }}>
              <MuiButton
                serialJoin="2"
                text="0db"
                muiVariant="text"
                addStyle={{
                  maxWidth: "100px",
                  maxHeight: "40px",
                  minWidth: "100px",
                  minHeight: "40px",
                  fontSize: "24px",
                }}
                hoverColor={"transparent"}
                disableRipple={true}
              />
            </Box>
            <Box sx={{ p: "5px", mb: "6px" }}>
              <MuiButton
                digitalJoin="22"
                text="Mute"
                muiVariant="text"
                muiColorFeedback="error"
                faIconInactive={faVolume}
                faIconActive={faVolumeSlash}
                faSize={"3x"}
                addStyle={{
                  maxWidth: "135px",
                  maxHeight: "60px",
                  minWidth: "135px",
                  minHeight: "60px",
                }}
                hoverColor={"transparent"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default AdvLevel;
