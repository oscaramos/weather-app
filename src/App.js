/* eslint-disable react/jsx-filename-extension */

import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Menu from './components/Menu'

import {
  getIconSvgFromIconNumber, requestCurrentCondition,
  requestDayMinMaxTemperatures,
  requestHourTemperatures,
} from './api/api'

import {
  getCurrentDay, getCurrentTime,
  getWeekdayString
} from './timeController'

import './App.css'

function App() {
  const [location] = useState('arequipa')
  const [currentTime] = useState(getCurrentTime())
  const [temperature, setTemperature] = useState('')
  const [weatherDescription, setWeatherDescription] = useState('')
  const [humidity, setHumidity] = useState('')

  const [weekWeather, setWeekWeather] = useState([])
  const [data, setData] = useState([
    {
      id: 'weather',
      data: [
        {
          x: '12:00',
          y: 6,
        },
      ],
    },
  ])

  useEffect(() => {
    requestDayMinMaxTemperatures('arequipa')
      .then((dayTemperatures) => {
        setWeekWeather(
          dayTemperatures.map((day, idx) => ({
            minTemperature: day.minimum,
            maxTemperature: day.maximum,
            icon: getIconSvgFromIconNumber(day.icon),
            weekDay: getWeekdayString(getCurrentDay() + idx),
          })),
        )
      })

    requestHourTemperatures('arequipa')
      .then((hourPredictions) => {
        setData([
          {
            id: 'weather',
            data: hourPredictions.slice(0, 6)
              .map((hourPrediction, index) => ({
                x: `${12 + index}:00`,
                y: hourPrediction.temperature,
              })),
          },
        ])
      })

    requestCurrentCondition('arequipa')
      .then((condition) => {
        setTemperature(condition.temperature)
        setWeatherDescription(condition.weatherDescription)
        setHumidity(condition.humidity)
      })
  }, [])

  return (
    <Container maxWidth="xs">
      <Header
        data={data}
        location={location}
        currentTime={currentTime}
        temperature={temperature}
        weatherDescription={weatherDescription}
        humidity={humidity}
      />

      <Menu weekWeather={weekWeather} />
    </Container>
  )
}

export default App
