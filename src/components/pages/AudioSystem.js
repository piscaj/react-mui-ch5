import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Header from "../widgets/Header";
import Fade from "@mui/material/Fade";
import "../../assets/scss/AudioSystem.scss";
import SystemAudioLevels from "../widgets/SystemAudioLevels";

const AudioSystem = (props) => {
  return (
    <Fade in={true}>
      <Paper
        sx={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          m: "10px",
          overflow: "scroll",
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
          <Box sx={{ m: "15px" }}>
            <Header title={"Audio Power and Levels"} />
          </Box>
          <Box>
          <SystemAudioLevels/>
          </Box>
        </Box>
      </Paper>
    </Fade>
  );
};
AudioSystem.propTypes = {};

export default AudioSystem;
