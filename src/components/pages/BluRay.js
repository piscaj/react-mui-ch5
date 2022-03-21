import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Header from "../widgets/Header";
import MuiButton from "../widgets/MuiButton";

const BluRay = (props) => {
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
          <Header title={"Blu-ray Controls"} />
        </Box>
      </Stack>
    </Paper>
  );
};
BluRay.propTypes = {};

export default BluRay;
