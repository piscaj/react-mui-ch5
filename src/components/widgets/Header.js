import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const Header = ({ title, size = "h5", addStyle }) => {
  return (
    <Box sx={addStyle}>
      <Typography variant={size} component="div">
        {title}
      </Typography>
    </Box>
  );
};

Header.defaultProps = {
  title: "Title",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
