import React from 'react';
import Grid from "@material-ui/core/Grid";
import cloudyIcon from "../icons/weather/cloudy.svg";

const HourWeather = ({ data }) => {
  return (
    <Grid container direction='row' justify='space-around'>
      {
        data[0].data.map(data =>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <img src={cloudyIcon} alt='weather icon' />
              </Grid>
              <Grid item>
                {data.x}
              </Grid>
            </Grid>
          </Grid>
        )
      }
    </Grid>
  );
};

export default HourWeather;
