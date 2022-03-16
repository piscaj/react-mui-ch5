import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Header from "../widgets/Header";
import "../../assets/scss/AudioSystem.scss";
import SystemAudLevels from "../widgets/SystemAudLevels";

const AudioSystem = (props) => {
  return (
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
        <SystemAudLevels />
      </Box>
    </Paper>
  );
};
AudioSystem.propTypes = {};

export default AudioSystem;
