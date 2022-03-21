import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
//import { styled } from "@mui/material/styles";
import Header from "../widgets/Header";
import "../../assets/scss/AudioSystem.scss";
import SystemAudLevels from "../widgets/SystemAudLevels";
import MuiButton from "../widgets/MuiButton";

const AudioSystem = (props) => {
  //  const Item = styled(Paper)(({ theme }) => ({
  //  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //    padding: theme.spacing(3),
  //  }));

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
      <Stack direction="column" alignItems="center" sx={{ p: "35px" }}>
        <Box sx={{ mb: "5px" }}>
          <Header title={"Audio Power and Levels"} />
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ flexWrap: "wrap-reverse" }}
        >
          <Box sx={{ p: "30px", textAlign: "center" }}>
            <Header
              title={"Volume Levels"}
              size={"h6"}
              addStyle={{ mb: "10px" }}
            />
            <SystemAudLevels />
          </Box>
          <Stack direction="column">
            <Box sx={{ p: "30px", textAlign: "center" }}>
              <Header
                title={"Amplifiers"}
                size={"h6"}
                addStyle={{ mb: "10px" }}
              />
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box>
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
                <Box>
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
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ flexWrap: "wrap" }}
            >
              <Box sx={{ p: "30px", textAlign: "center" }}>
                <Header
                  title={"Audio Presets"}
                  size={"h6"}
                  addStyle={{ mb: "10px" }}
                />
                <Stack direction="column" spacing={2}>
                  <Box>
                    <MuiButton
                      text="PRESET 1"
                      muiColor="primary"
                      muiColorFeedback="secondary"
                      muiVariant="contained"
                      digitalJoin="1"
                      addStyle={{
                        maxWidth: "200px",
                        maxHeight: "45px",
                        minWidth: "200px",
                        minHeight: "45px",
                      }}
                    />
                  </Box>
                  <Box>
                    <MuiButton
                      text="PRESET 2"
                      muiColor="primary"
                      muiColorFeedback="secondary"
                      muiVariant="contained"
                      digitalJoin="2"
                      addStyle={{
                        maxWidth: "200px",
                        maxHeight: "45px",
                        minWidth: "200px",
                        minHeight: "45px",
                      }}
                    />
                  </Box>
                  <Box>
                    <MuiButton
                      text="PRESET 3"
                      muiColor="primary"
                      muiColorFeedback="secondary"
                      muiVariant="contained"
                      digitalJoin="3"
                      addStyle={{
                        maxWidth: "200px",
                        maxHeight: "45px",
                        minWidth: "200px",
                        minHeight: "45px",
                      }}
                    />
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ p: "30px", textAlign: "center" }}>
                <Header
                  title={"Microphone Lifts"}
                  size={"h6"}
                  addStyle={{ mb: "10px" }}
                />
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box>
                    <MuiButton
                      text="UP"
                      muiColor="primary"
                      muiColorFeedback="secondary"
                      muiVariant="contained"
                      digitalJoin="5"
                      addStyle={{
                        maxWidth: "150px",
                        maxHeight: "50px",
                        minWidth: "150px",
                        minHeight: "50px",
                      }}
                    />
                  </Box>
                  <Box>
                    <MuiButton
                      text="DOWN"
                      muiColor="primary"
                      muiColorFeedback="secondary"
                      muiVariant="contained"
                      digitalJoin="6"
                      addStyle={{
                        maxWidth: "150px",
                        maxHeight: "50px",
                        minWidth: "150px",
                        minHeight: "50px",
                      }}
                    />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
AudioSystem.propTypes = {};

export default AudioSystem;
