import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Header from "../widgets/Header";
import MuiButton from "../widgets/MuiButton";

const PresSwitcher = (props) => {
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
      <Stack direction="column" alignItems="center" justifyContent="center" sx={{ p: "75px" }}>
        <Box sx={{ m: "15px" }}>
          <Header title={"Stage Video Inputs"} />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ flexWrap: "wrap" }}
        >
          <Box sx={{ p: "7px" }}>
            <MuiButton
              text="INPUT 1"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="1"
              addStyle={{
                maxWidth: "175px",
                maxHeight: "175px",
                minWidth: "175px",
                minHeight: "175px",
              }}
            />
          </Box>
          <Box sx={{ p: "7px" }}>
            <MuiButton
              text="INPUT 2"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="2"
              addStyle={{
                maxWidth: "175px",
                maxHeight: "175px",
                minWidth: "175px",
                minHeight: "175px",
              }}
            />
          </Box>
          <Box sx={{ p: "7px" }}>
            <MuiButton
              text="INPUT 3"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="2"
              addStyle={{
                maxWidth: "175px",
                maxHeight: "175px",
                minWidth: "175px",
                minHeight: "175px",
              }}
            />
          </Box>
          <Box sx={{ p: "7px" }}>
            <MuiButton
              text="INPUT 4"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="4"
              addStyle={{
                maxWidth: "175px",
                maxHeight: "175px",
                minWidth: "175px",
                minHeight: "175px",
              }}
            />
          </Box>
          <Box sx={{ p: "7px" }}>
            <MuiButton
              text="INPUT 5"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="5"
              addStyle={{
                maxWidth: "175px",
                maxHeight: "175px",
                minWidth: "175px",
                minHeight: "175px",
              }}
            />
          </Box>
          <Box sx={{ p: "7px" }}>
            <MuiButton
              text="INPUT 6"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="6"
              addStyle={{
                maxWidth: "175px",
                maxHeight: "175px",
                minWidth: "175px",
                minHeight: "175px",
              }}
            />
          </Box>
          <Box sx={{ p: "7px" }}>
            <MuiButton
              text="INPUT 7"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="7"
              addStyle={{
                maxWidth: "175px",
                maxHeight: "175px",
                minWidth: "175px",
                minHeight: "175px",
              }}
            />
          </Box>
          <Box sx={{ p: "7px" }}>
            <MuiButton
              text="INPUT 8"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="8"
              addStyle={{
                maxWidth: "175px",
                maxHeight: "175px",
                minWidth: "175px",
                minHeight: "175px",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};
PresSwitcher.propTypes = {};

export default PresSwitcher;
