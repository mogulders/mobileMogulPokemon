import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 10,
    label: "10"
  },
  {
    value: 20,
    label: "20"
  },
  {
    value: 30,
    label: "30"
  },
  {
    value: 40,
    label: "40"
  },
  {
    value: 50,
    label: "50"
  },
  {
    value: 60,
    label: "60"
  },
  {
    value: 70,
    label: "70"
  },
  {
    value: 80,
    label: "80"
  },
  {
    value: 90,
    label: "90"
  },
  {
    value: 100,
    label: "100"
  }
];

function valuetext(value) {
  return `${value}miles`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Radius in Miles
      </Typography>
      <Slider
        defaultValue={props.radius}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        value={marks.value}
        onChange={props.onSliderChange}
      />
    </div>
  );
}
