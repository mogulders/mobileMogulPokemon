import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CityCard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "./button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="cityCard">
      <CityCard className={classes.root} variant="outlined" city={props.city}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.city.cityName}
          </Typography>

          <Button
            size="medium"
            name={"Go To City Page"}
            value={"goToCityPage"}
            city={props.city}
            onClick={props.handleGoToCityPage}
          >
            Go To City Page
          </Button>
        </CardContent>
      </CityCard>
    </div>
  );
}
