import { useSpringCarousel } from "react-spring-carousel";
import "../../assets/scss/SystemAudioLevels.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import { carouselItems } from "../imports/CarouselItems";
import { buttons } from "../imports/CarouselButtons";

function SystemAudLevels() {
  const items = carouselItems.items;

  

  const { carouselFragment, slideToItem } = useSpringCarousel({
    items,
  });

  return (
    <Stack
      direction="row"
      sx={{ flexWrap: "noWrap" }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Divider orientation="vertical" flexItem />
      <Stack
        direction="row"
        sx={{ overflow: "hidden", width: "250px", p: "10px" }}
      >
        {carouselFragment}
      </Stack>
      <ButtonGroup orientation="vertical" variant="text">
        {buttons}
      </ButtonGroup>
    </Stack>
  );
}

export default SystemAudLevels;
