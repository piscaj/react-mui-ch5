import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Header from "../widgets/Header";
import Transports from "../widgets/Transports";
import BluRayNav from "../widgets/BluRayNav";

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
      <Stack
        sx={{ mt: "40px", overflow: "scroll" }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ mb: "10px" }}>
          <Header title={"Blu-ray Controls"} />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          className="pres-video-input-container"
        >
          <Card
            variant="outlined"
            sx={{
              textAlign: "center",
              position: "relative",
              width: "373px",
              m: "5px",
            }}
          >
            <Box sx={{ p: "5px" }}>
              <Transports />
            </Box>
          </Card>
          <Card
            variant="outlined"
            sx={{
              textAlign: "center",
              position: "relative",
              width: "373px",
              m: "5px",
            }}
          >
            <Box sx={{ p: "5px" }}>
              <BluRayNav />
            </Box>
          </Card>
        </Stack>
      </Stack>
    </Paper>
  );
};
BluRay.propTypes = {};

export default BluRay;
