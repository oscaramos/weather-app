import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '10px',
    marginTop: '-1em'
  },
  itemContainer: {
    height: '5em',
  },
  weekday: {
    fontFamily: 'Arial',
    fontWeight: '300',
    color: '#546E7A',
    textTransform: 'capitalize',
  },
  minmaxTemperature: {
    fontFamily: 'Arial',
    fontWeight: '300',
  },
}))

const Menu = ({ weekWeather }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid container direction="column">
        {
          weekWeather.map((item) => (
            <Grid
              key={item.weekDay + item.minTemperature + item.maxTemperature}
              item
              container
              className={classes.itemContainer}
              alignItems="center"
            >
              <Grid item xs={3} style={{ textAlign: 'center' }}>
                <item.icon fill="#357491" alt="weather icon" style={{ width: '2em', height: '2em' }} />
              </Grid>
              <Grid item xs={6} className={classes.weekday}>
                {item.weekDay}
              </Grid>
              <Grid item xs={3} className={classes.minmaxTemperature} style={{ textAlign: 'right' }}>
                <span style={{ color: '#54C8FF' }}>
                  {item.minTemperature}
                  °C
                </span>
                <span style={{ color: '#BCCED6', marginLeft: '0.6em' }}>
                  /
                </span>
                <span style={{ color: '#FF8665', marginLeft: '0.6em', marginRight: '1em' }}>
                  {item.maxTemperature}
                  °C
                </span>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </Paper>
  )
}

export default Menu
