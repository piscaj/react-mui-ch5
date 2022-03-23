import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Zoom from '@mui/material/Zoom';

import GHMCLogoLg from "../../assets/images/GHMCLogo1280.png";
import "../../assets/scss/Logo.scss";

const Logo = (props) => {
  return (
    <Zoom in={true}>
      <Stack
        direction="column"
        alignItems="center"
        sx={{}}
      >
        <Box className="logoLg">
          <img src={GHMCLogoLg} alt="" />
        </Box>
      </Stack>
      </Zoom>
  );
};
Logo.propTypes = {};

export default Logo;
