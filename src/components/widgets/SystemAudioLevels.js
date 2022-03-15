import AdvLevel from "./AdvLevel";
import "../../assets/scss/SystemAudioLevels.scss";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function SystemAudioLevels() {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: "400px",
        height: "370px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{
            p: "5px",
            mt:"3px"
          }}
        >
          <AdvLevel />
        </Box>
        <Box
          sx={{
            p: "5px",
            mt:"3px"
          }}
        >
          <AdvLevel />
        </Box>
        <Box
          sx={{
            p: "5px",
            mt:"3px"
          }}
        >
          <AdvLevel />
        </Box>
        <Box
          sx={{
            p: "5px",
            mt:"3px"
          }}
        >
          <AdvLevel />
        </Box>
      </Box>
    </Paper>
  );
}

export default SystemAudioLevels;
