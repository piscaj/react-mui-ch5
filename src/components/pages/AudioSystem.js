import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Header from "../widgets/Header";
import "../../assets/scss/AudioSystem.scss";
import SystemAudLevels from "../widgets/SystemAudLevels";

const AudioSystem = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(3),
  }));

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
      <Stack direction="column" alignItems="center" justifyContent="center" sx={{}}>
        <Box sx={{ m: "15px" }}>
          <Header title={"Audio Power and Levels"} />
        </Box>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{}}>
          <Box>
            <SystemAudLevels />
          </Box>
          <Box>SOME OTHER STUFF</Box>
        </Stack>
      </Stack>
    </Paper>
  );
};
AudioSystem.propTypes = {};

export default AudioSystem;
