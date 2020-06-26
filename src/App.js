import React, { useState } from 'react';

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

import cloudyIcon from './icons/weather/cloudy.svg';
import sunnyIcon from './icons/weather/sunny.svg';

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
  weekWeather: {},
  weekday: {
    fontFamily: "Noto Sans",
    fontWeight: "300",
  },
  minmaxTemperature: {
    fontFamily: "Noto Sans",
    fontWeight: "300",
  },
  itemContainer: {
    height: "5em",
    border: "1px solid blue",
  }
}))

function App() {
  const [location, setLocation] = useState("PLOVDIV");
  const [currentTime, setCurrentTime] = useState("THURSDAY, 11:35am");
  const [temperature, setTemperature] = useState("6°");
  const [weatherDescription, setWeatherDescription] = useState("Mostly cloudy");
  const [humidity, setHumidity] = useState("63%");

  const classes = useStyles();

  const weekWeather = [
    {
      icon: cloudyIcon,
      weekDay: 'Tomorrow',
      minMaxTemperature: '2° / 6°'
    },
    {
      icon: sunnyIcon,
      weekDay: 'Saturday',
      minMaxTemperature: '5° / 8°'
    },
    {
      icon: sunnyIcon,
      weekDay: 'Sunday',
      minMaxTemperature: '7° / 12°'
    }
  ]

  return (
    <Container maxWidth='xs' style={{ border: "1px solid red" }}>
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
      <Paper className={classes.weekWeather} style={{ border: "1px solid green" }}>
        <Grid container direction='column'>
          {
            weekWeather.map(item =>
              <Grid item container className={classes.itemContainer} alignItems='center'>
                <Grid item xs={2}>
                  <img src={ item.icon } alt='weather icon' />
                </Grid>
                <Grid item xs={7} className={classes.weekday}>
                  { item.weekDay }
                </Grid>
                <Grid item xs={3} className={classes.minmaxTemperature}>
                  { item.minMaxTemperature }
                </Grid>
              </Grid>
            )
          }
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
