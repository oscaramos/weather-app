import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'

import IconButton from '@material-ui/core/IconButton'
import WeatherChart from './WeatherChart'
import ChartBottomAxis from './ChartBottomAxis'

import humidityIcon from '../icons/weather/humidity.svg'
import locationIcon from '../icons/weather/location.svg'

const useStyles = makeStyles(() => ({
  bar: {
    height: '4em',
  },
  weatherInfoContainer: {
    background: 'linear-gradient(190deg, rgba(10,129,187,1) 0%, rgba(0,197,139,1) 100%)',
  },
  location: {
    fontFamily: 'NotoSans',
    fontWeight: '600',
    fontSize: '1.3em',
    color: 'white',
    textTransform: 'uppercase',
  },
  locationIcon: {
    height: '0.85em',
    width: '0.85em',
  },
  currentTime: {
    fontFamily: 'NotoSans',
    fontWeight: '400',
    fontSize: '1em',
    color: 'white',
  },
  temperature: {
    fontFamily: 'NotoSans',
    fontWeight: '100',
    fontSize: '7em',
    color: 'white',
  },
  weatherDescription: {
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: '1.3em',
    color: 'white',
  },
  humidity: {
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: '1em',
    color: 'white',
  },
  humidityIcon: {
    height: '1.5em',
    width: '1.5em',
  },
  weatherChart: {
    width: '100%',
    height: '8em',
  },
  chartLabels: {
    width: '100%',
    height: '4em',
  },
}))

const getTemperaturesMean = (data) => {
  const sum = data[0].data.reduce((prev, curr) => prev + curr.y, 0)
  const n = data[0].data.length
  return Math.round(sum / n)
}

function Header({ currentTime, data, humidity, location, temperature, weatherDescription }) {
  const classes = useStyles()

  // Create data with sides on the left and right containing mean
  const dataWithSides = JSON.parse(JSON.stringify(data)) // Deep copy data
  dataWithSides[0].data.unshift({
    x: '-1:00',
    y: getTemperaturesMean(data),
  }) // On left
  dataWithSides[0].data.push({
    x: '-2:00',
    y: getTemperaturesMean(data),
  }) // On right

  return (
    <div className={classes.weatherInfoContainer}>
      {/* -----Top bar-----*/}
      <Grid container justify="space-between" className={classes.bar} alignItems="center">
        <Grid item>
          <IconButton aria-label="menu" style={{ marginLeft: '0.3em' }}>
            <MenuIcon fontSize="large" style={{ color: 'white' }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="add" style={{ marginRight: '0.2em' }}>
            <AddIcon fontSize="large" style={{ color: 'white' }} />
          </IconButton>
        </Grid>
      </Grid>

      {/* -----Weather information------ */}
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.location}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <img src={locationIcon} alt="location icon" className={classes.locationIcon} />
            </Grid>
            <Grid item>
              {location}
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.currentTime}>
          {currentTime}
        </Grid>
        <Grid item className={classes.temperature}>
          {temperature}
          °
        </Grid>
        <Grid item className={classes.weatherDescription}>
          {weatherDescription}
        </Grid>
        <Grid item className={classes.humidity}>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <img src={humidityIcon} alt="humidity icon" className={classes.humidityIcon} />
            </Grid>
            <Grid item>
              {humidity}
              %
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.weatherChart}>
          <WeatherChart data={dataWithSides} />
        </Grid>
        <Grid item className={classes.chartLabels}>
          <ChartBottomAxis data={data} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
