import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Header from "../widgets/Header";
import MuiButton from "../widgets/MuiButton";
import "../../assets/scss/PresSwitcher.scss"

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
      <Stack  sx={{ mt: "40px" }} direction="column" alignItems="center" justifyContent="center">
        <Box sx={{ mb: "25px" }}>
          <Header title={"Stage Video Inputs"} />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          className="pres-video-input-container"
          //sx={{ flexWrap: "wrap" }}
        >
          <Box sx={{ p: "7px" }}>
            <MuiButton
            
              text="INPUT 1"
              muiColor="primary"
              muiColorFeedback="secondary"
              muiVariant="contained"
              digitalJoin="1"
              addStyle={{
                width: "150px",
                height: "125px",
  
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
                width: "150px",
                height: "125px",
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
                width: "150px",
                height: "125px",
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
                width: "150px",
                height: "125px",
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
                width: "150px",
                height: "125px",
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
                width: "150px",
                height: "125px",
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
                width: "150px",
                height: "125px",
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
                width: "150px",
                height: "125px",
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
