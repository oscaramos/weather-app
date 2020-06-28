import React, { useEffect, useState } from 'react';
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import Menu from "./components/Menu";

import {
  requestDayMinMaxTemperatures,
  requestHourTemperatures
} from "./api/api";

import cloudyIcon from './icons/weather/cloudy.svg';
import sunnyIcon from './icons/weather/sunny.svg';
import foggyIcon from './icons/weather/foggy.svg';

import './App.css';


function App() {
  const [location, ] = useState("PLOVDIV");
  const [currentTime, ] = useState("THURSDAY, 11:35am");
  const [temperature, ] = useState("6°");
  const [weatherDescription, ] = useState("Mostly cloudy");
  const [humidity, ] = useState("63%");

  const [weekWeather, setWeekWeather] = useState([
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
  ]);
  const [data, setData] = useState([
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
]);

  useEffect(() => {
    requestDayMinMaxTemperatures('arequipa')
      .then(dayTemperatures => {
        setWeekWeather(dayTemperatures.map(temperature => ({
            minTemperature: temperature.minimum,
            maxTemperature: temperature.maximum,
            icon: sunnyIcon, // TODO
            weekDay: 'Monday' // TODO
          }))
        )
      })

    requestHourTemperatures('arequipa')
      .then(hourPredictions => {
        setData([{
          id: 'weather',
          data: hourPredictions.slice(0, 3).map((hourPrediction, index) => ({
            x: (12+index)+":00",
            y: hourPrediction.temperature
          }))
        }])
      })
  }, [])

  return (
    <Container maxWidth='xs'>
      <Header data={data}
              location={location}
              currentTime={currentTime}
              temperature={temperature}
              weatherDescription={weatherDescription}
              humidity={humidity} />

      <Menu weekWeather={weekWeather} />
    </Container>
  );
}

export default App;
