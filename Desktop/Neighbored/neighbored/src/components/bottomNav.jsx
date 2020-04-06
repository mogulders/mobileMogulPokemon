import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Modal from "./modal";
import Slider from "./radiusSlider";
import SCREENS from "../App";

const useStyles = makeStyles({
  root: {
    width: 450
  }
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <span className="navIcon" onClick={props.handleBottomNavHome}>
        <i class="fas fa-home"></i>
      </span>
      <span className="navIcon" onClick={props.handleBottomNav}>
        <i
          class={
            props.activePage === SCREENS.FAVORITED
              ? "fas fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span className="navIcon" onClick={props.handleBottomNavCity}>
        <i class="fas fa-city"></i>
      </span>
      <span className="navIcon">
        <Modal
          radius={props.radius}
          onSliderChange={props.onSliderChange}
        ></Modal>
      </span>
      {/* <BottomNavigationAction label="Settings" />
      <BottomNavigationAction label="Favorited" />
      <BottomNavigationAction label="Nearby Cities" /> */}
    </BottomNavigation>
  );
}
