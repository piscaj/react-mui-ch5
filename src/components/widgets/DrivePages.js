import Linker from "./Linker";
import { Route, Routes } from "react-router-dom";
import ButtonShowcase from "../pages/ButtonShowcase";
import Logo from "../pages/Logo";

//This component just moves the clutter of React Router and the
//Linker component out of the Main component to clean things up.
//We drive all the pages here

//React Router routes go here
export const DriveRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Logo />} />
      <Route path="/showcase" element={<ButtonShowcase />} />
    </Routes>
  );
};

DriveRoutes.propTypes = {};

//Make use of the Linker component for page tracking here.
export const DriveLinks = () => {
  return (
    <>
      <Linker link="/showcase" digitalJoin="14" />
    </>
  );
};

DriveLinks.propTypes = {};
