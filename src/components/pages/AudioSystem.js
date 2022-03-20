import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Header from "../widgets/Header";
import "../../assets/scss/AudioSystem.scss";
import SystemAudLevels from "../widgets/SystemAudLevels";
import MuiButton from "../widgets/MuiButton";

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
      <Stack direction="column" alignItems="center" sx={{}}>
        <Box sx={{ m: "15px" }}>
          <Header title={"Audio Power and Levels"} />
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ flexWrap: "wrap-reverse" }}
        >
          <Box sx={{ p: "40px", textAlign: "center" }}>
            <Header title={"Rehearsal Hall Levels"} size={"h6"} addStyle={{mb:"10px"}} />
            <SystemAudLevels />
          </Box>
          <Box sx={{ p: "40px", textAlign: "center" }}>
            <Header title={"Amplifiers"} size={"h6"} addStyle={{mb:"10px"}}/>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Box sx={{ p: "5px" }}>
                <MuiButton
                  text="POWER OFF"
                  muiColor="primary"
                  muiColorFeedback="secondary"
                  muiVariant="contained"
                  digitalJoin="1"
                  addStyle={{
                    maxWidth: "150px",
                    maxHeight: "75px",
                    minWidth: "150px",
                    minHeight: "75px",
                  }}
                />
              </Box>
              <Box sx={{ p: "5px" }}>
                <MuiButton
                  text="POWER ON"
                  muiColor="primary"
                  muiColorFeedback="secondary"
                  muiVariant="contained"
                  digitalJoin="2"
                  addStyle={{
                    maxWidth: "150px",
                    maxHeight: "75px",
                    minWidth: "150px",
                    minHeight: "75px",
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};
AudioSystem.propTypes = {};

export default AudioSystem;
