import React from 'react'
import Grid from '@material-ui/core/Grid'
import { getIconSvgFromIconNumber } from '../api/api'

const ChartBottomAxis = ({ data }) => (
  <Grid container direction="row" justify="space-around">
    {
        data[0].data.map((value) => (
          <Grid item key={value.x}>
            <Grid container direction="column">
              <Grid item>
                <img src={value.icon} alt="weather icon" />
              </Grid>
              <Grid item>
                {value.x}
              </Grid>
            </Grid>
          </Grid>
        ))
      }
  </Grid>
)

export default ChartBottomAxis
