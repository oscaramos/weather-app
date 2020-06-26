import React, { useState } from 'react';

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

import cloudyIcon from './icons/weather/cloudy.svg';

import './App.css';


const useStyles = makeStyles(theme => ({
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
  weekWeather:  {

  },
  weekday: {
    fontFamily: "Noto Sans",
    fontWeight: "300",
  },
  minmaxTemperature: {
    fontFamily: "Noto Sans",
    fontWeight: "300",
  }
}))

function App() {
  const [location, setLocation] = useState("PLOVDIV");
  const [currentTime, setCurrentTime] = useState("THURSDAY, 11:35am");
  const [temperature, setTemperature] = useState("6°");
  const [weatherDescription, setWeatherDescription] = useState("Mostly cloudy");
  const [humidity, setHumidity] = useState("63%");

  const classes = useStyles();

  return (
    <Container maxWidth="xs" style={{border: "1px solid red"}}>
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
      </Grid>
      <Paper className={classes.weekWeather}>
        <Grid container direction='column'>
          <Grid item>
            <Grid container>
              <Grid item xs={2}>
                <img src={cloudyIcon} alt='weather icon' />
              </Grid>
              <Grid item xs={7} className={classes.weekday}>
                Tomorrow
              </Grid>
              <Grid item xs={3} className={classes.minmaxTemperature}>
                2° / 6°
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
