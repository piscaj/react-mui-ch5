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

const AdvLevel = ({
  name = "Level",
  plusDigitalJoin = "0",
  minusDigitalJoin = "0",
  muteDigitalJoin = "0",
  levelTextSerialJoin = "0",
  levelAnalogJoin = "1",
}) => {
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
          <Typography variant="subtitle1">{name}</Typography>
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
                  digitalJoin={plusDigitalJoin}
                  butRadius={8}
                  faIconInactive={faPlus}
                  faSize={"3x"}
                  addStyle={{
                    width: "75px",
                    height: "75px",
                  }}
                  hoverColor={"transparent"}
                  eventType={"press"}
                />
              </Box>
              <Box sx={{ p: "3px" }}>
                <MuiIconButton
                  digitalJoin={minusDigitalJoin}
                  butRadius={8}
                  faIconInactive={faMinus}
                  faSize={"3x"}
                  addStyle={{
                    width: "75px",
                    height: "75px",
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
                  analogJoin={levelAnalogJoin}
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
                serialJoin={levelTextSerialJoin}
                muiVariant="text"
                addStyle={{
                  width: "100px",
                  height: "40px",

                  fontSize: "24px",
                }}
                hoverColor={"transparent"}
                disableRipple={true}
              />
            </Box>
            <Box sx={{ p: "5px", mb: "6px" }}>
              <MuiButton
                digitalJoin={muteDigitalJoin}
                text="Mute"
                muiVariant="text"
                muiColorFeedback="error"
                faIconInactive={faVolume}
                faIconActive={faVolumeSlash}
                faSize={"3x"}
                addStyle={{
                  width: "135px",
                  height: "60px",
                }}
                hoverColor={"transparent"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default AdvLevel;
