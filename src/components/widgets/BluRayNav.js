import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MuiButton from "./MuiButton";
import {
  faArrowUpLong,
  faArrowDownLong,
  faArrowLeftLong,
  faArrowRightLong,
  faTurnDownLeft,
  faCircle,
  faCheck,
} from "@fortawesome/pro-duotone-svg-icons";

const BluRayNav = ({
  playDigitalJoin = "0",
  stopDigitalJoin = "0",
  pauseDigitalJoin = "0",
  rewindDigitalJoin = "0",
  forwardDigitalJoin = "0",
  previousDigitalJoin = "0",
  nextDigitalJoin = "0",
}) => {
  const butWidth = "115px";
  const butHieght = "115px";

  return (
    <Box>
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item spacing={1} wrap="nowrap">
          <Grid item xs="auto">
            <MuiButton
              text="Setup"
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={playDigitalJoin}
            />
          </Grid>
          <Grid item xs="auto">
            <MuiButton
              text="Up"
              faIconInactive={faArrowUpLong}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={stopDigitalJoin}
            />
          </Grid>
          <Grid item xs="auto">
            <MuiButton
              text="Menu"
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={pauseDigitalJoin}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={1} wrap="nowrap">
          <Grid item xs="auto">
            <MuiButton
              text="Left"
              faIconInactive={faArrowLeftLong}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={rewindDigitalJoin}
            />
          </Grid>
          <Grid item xs="auto">
            <MuiButton
              text="Ok"
              faIconInactive={faCheck}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin="0"
            />
          </Grid>
          <Grid item xs="auto">
            <MuiButton
              text="Right"
              faIconInactive={faArrowRightLong}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={forwardDigitalJoin}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={1} wrap="nowrap">
          <Grid item xs="auto">
            <MuiButton
              text="Return"
              faIconInactive={faTurnDownLeft}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={previousDigitalJoin}
            />
          </Grid>
          <Grid item xs="auto">
            <MuiButton
              text="Down"
              faIconInactive={faArrowDownLong}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin="0"
            />
          </Grid>
          <Grid item xs="auto">
            <MuiButton
              text="Yellow"
              faIconInactive={faCircle}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
                color:"yellow",
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={nextDigitalJoin}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={1} wrap="nowrap">
          <Grid item xs="auto">
            <MuiButton
              text="Blue"
              faIconInactive={faCircle}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
                color:"blue",
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={previousDigitalJoin}
            />
          </Grid>
          <Grid item xs="auto">
            <MuiButton
              text="Red"
              faIconInactive={faCircle}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
                color:"red",
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin="0"
            />
          </Grid>
          <Grid item xs="auto">
            <MuiButton
              text="Green"
              faIconInactive={faCircle}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
                color:"green",
              }}
              muiColor="primary"
              muiColorFeedback="error"
              digitalJoin={nextDigitalJoin}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BluRayNav;
