import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDigitalState } from "../imports/CrComLibHook";

const Linker = ({ link, digitalJoin }) => {
  const navigate = useNavigate();
  const digitalState = useDigitalState(digitalJoin);

  useEffect(() => {
    if (digitalState === true) navigate(link);
    return () => {};
  }, [digitalState, navigate, link]);

  return <></>;
};
Linker.propTypes = {
  link: PropTypes.string,
  digitalJoin: PropTypes.string,
};

export default Linker;
