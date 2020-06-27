import React, { useState } from 'react';

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

import cloudyIcon from './icons/weather/cloudy.svg';
import sunnyIcon from './icons/weather/sunny.svg';
import foggyIcon from './icons/weather/foggy.svg';

import WeekWeatherMenu from "./components/WeekWeatherMenu";

import './App.css';
import WeatherChart from "./components/WeatherChart";

const data = [
  {
    "id": "weather",
    "data": [
      {
        "x": "12:00",
        "y": 6
      },
      {
        "x": "13:00",
        "y": 3
      },
      {
        "x": "14:00",
        "y": 2
      },
      {
        "x": "15:00",
        "y": 7
      },
      {
        "x": "16:00",
        "y": 5
      },
      {
        "x": "17:00",
        "y": 6
      }
    ]
  }
]


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
  weatherChart: {
    width: '100%',
    height: '4em',
    border: '1px solid red'
  },
  hourWeather: {
    width: '100%',
    height: '4em',
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
      minTemperature: '2',
      maxTemperature: '6',
    },
    {
      icon: sunnyIcon,
      weekDay: 'Saturday',
      minTemperature: '5',
      maxTemperature: '8'
    },
    {
      icon: sunnyIcon,
      weekDay: 'Sunday',
      minTemperature: '7',
      maxTemperature: '12',
    },
    {
      icon: foggyIcon,
      weekDay: 'Monday',
      minTemperature: '4',
      maxTemperature: '9',
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
        <Grid item className={classes.weatherChart}>
          <WeatherChart data={data}/>
        </Grid>
        <Grid item container direction='row' className={classes.hourWeather}>
          <Grid item container>

          </Grid>
        </Grid>
      </Grid>
      <WeekWeatherMenu weekWeather={weekWeather} />
    </Container>
  );
}

export default App;
