import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        onClick={props.onClick}
        variant="contained"
        color="primary"
        name={props.name}
        value={props.value}
        city={props.city}
      >
        {props.name}
      </Button>
    </div>
  );
}
