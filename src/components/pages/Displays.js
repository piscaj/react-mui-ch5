import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Header from "../widgets/Header";

const Displays = (props) => {
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
          <Header title={"Display Controls"} />
        </Box>
        <Box sx={{ fontSize: "12px", mb: "5px" }}>Controls here...</Box>
      </Box>
    </Paper>
  );
};
Displays.propTypes = {};

export default Displays;
