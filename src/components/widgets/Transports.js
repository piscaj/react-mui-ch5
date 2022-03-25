import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MuiButton from "../widgets/MuiButton";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faStop,
  faBackwardFast,
  faForwardFast,
} from "@fortawesome/pro-duotone-svg-icons";

const Transports = ({
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
              text="Stop"
              faIconInactive={faStop}
              faSize={"5x"}
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
              text="Play"
              faIconInactive={faPlay}
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
              text="Pause"
              faIconInactive={faPause}
              faSize={"5x"}
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
              text="Reverse"
              faIconInactive={faBackward}
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
              text="Subtitle"
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
              text="Forward"
              faIconInactive={faForward}
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
              text="Previous"
              faIconInactive={faBackwardFast}
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
              text="Display"
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
              text="Next"
              faIconInactive={faForwardFast}
              faSize={"5x"}
              muiVariant="text"
              addStyle={{
                width: butWidth,
                height: butHieght,
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

export default Transports;
