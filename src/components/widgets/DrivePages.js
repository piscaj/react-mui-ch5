import Linker from "./Linker";
import { Route, Routes } from "react-router-dom";
import Logo from "../pages/Logo";
import ButtonShowcase from "../pages/ButtonShowcase";
import AudioSystem from "../pages/AudioSystem";
import PresSwitcher from "../pages/PresSwitcher";
import BluRay from "../pages/BluRay";
import Displays from "../pages/Displays";
import Camera from "../pages/Camera";
import Intercom from "../pages/Intercom";
import Recording from "../pages/Recording";

//This component just moves the clutter of React Router and the
//Linker component out of the Main component to clean things up.
//We drive all the pages here

//React Router routes go here
export const DriveRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Logo />} />
      <Route path="/showcase" element={<ButtonShowcase />} />
      <Route path="/audiosys" element={<AudioSystem />} />
      <Route path="/presswitcher" element={<PresSwitcher />} />
      <Route path="/bluray" element={<BluRay />} />
      <Route path="/displays" element={<Displays />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/intercom" element={<Intercom />} />
      <Route path="/recording" element={<Recording />} />
    </Routes>
  );
};

DriveRoutes.propTypes = {};

//The Linker is a hook to trigger page routing.
export const DriveLinks = () => {
  return (
    <>
      <Linker link="/showcase" digitalJoin="17" />
      <Linker link="/audiosys" digitalJoin="10" />
      <Linker link="/presswitcher" digitalJoin="11" />
      <Linker link="/bluray" digitalJoin="12" />
      <Linker link="/displays" digitalJoin="13" />
      <Linker link="/camera" digitalJoin="14" />
      <Linker link="/intercom" digitalJoin="15" />
      <Linker link="/recording" digitalJoin="16" />
    </>
  );
};

DriveLinks.propTypes = {};
