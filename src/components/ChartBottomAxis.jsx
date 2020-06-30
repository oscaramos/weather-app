import React from 'react'
import Grid from '@material-ui/core/Grid'

const ChartBottomAxis = ({ data }) => (
  <Grid container direction="row" justify="space-around">
    {
        data[0].data.map((value) => (
          <Grid item key={value.x}>
            <Grid container direction="column">
              <Grid item>
                <value.icon alt="weather icon" fill="white" />
              </Grid>
              <Grid
                item
                style={
                {
                  color: 'white',
                  fontFamily: 'NotoSans',
                  fontSize: '0.75em',
                  textAlign: 'center',
                  marginTop: '-0.25em'
                }}>
                {value.x}
              </Grid>
            </Grid>
          </Grid>
        ))
      }
  </Grid>
)

export default ChartBottomAxis
