import Box from "@mui/material/Box";
import SliderVertical from "../widgets/SliderVertical";
import "../../assets/scss/AdvLevel.scss";

function AdvLevel() {
  return (
    <Box
    sx={{
        height: "300px",
      }}
    >

      <SliderVertical analogJoin="1" styleClass="hideThumb" />
    </Box>
  );
}

export default AdvLevel;
