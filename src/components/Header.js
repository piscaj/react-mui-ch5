import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
    </div>
  );
};

Header.defaultProps = {
  title: "Title",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
