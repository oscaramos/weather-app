import React from 'react';

import Grid from "@material-ui/core/Grid";
import WeatherChart from "./WeatherChart";
import ChartLabels from "./ChartLabels";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  weatherInfoContainer: {
    background: 'linear-gradient(190deg, rgba(10,129,187,1) 0%, rgba(0,197,139,1) 100%)'
  },
  location: {
    fontFamily: "NotoSans",
    fontWeight: "600",
    fontSize: '1.3em',
    color: 'white',
  },
  currentTime: {
    fontFamily: "NotoSans",
    fontWeight: "400",
    fontSize: '1em',
    color: 'white',
  },
  temperature: {
    fontFamily: "NotoSans",
    fontWeight: "100",
    fontSize: '7em',
    color: 'white',
  },
  weatherDescription: {
    fontFamily: "Noto Sans",
    fontWeight: "400",
    fontSize: '1.3em',
    color: 'white',
  },
  humidity: {
    fontFamily: "Noto Sans",
    fontWeight: "400",
    fontSize: '1em',
    color: 'white',
  },
  weatherChart: {
    width: '100%',
    height: '8em'
  },
  chartLabels: {
    width: '100%',
    height: '4em',
  }
}))

function Header({ currentTime, data, humidity, location, temperature, weatherDescription }) {
  const classes = useStyles();
  return (
    <Grid container direction='column' alignItems='center' className={classes.weatherInfoContainer}>
      <Grid item className={classes.location}>
        {location}
      </Grid>
      <Grid item className={classes.currentTime}>
        {currentTime}
      </Grid>
      <Grid item className={classes.temperature}>
        {temperature}
      </Grid>
      <Grid item className={classes.weatherDescription}>
        {weatherDescription}
      </Grid>
      <Grid item className={classes.humidity}>
        {humidity}
      </Grid>
      <Grid item className={classes.weatherChart}>
        <WeatherChart data={data} />
      </Grid>
      <Grid item className={classes.chartLabels}>
        <ChartLabels data={data} />
      </Grid>
    </Grid>
  );
}

export default Header;
