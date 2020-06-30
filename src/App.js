/* eslint-disable react/jsx-filename-extension */

import React, { useEffect, useState } from 'react'
import { useAsync } from '@react-hook/async'

import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import Header from './components/Header'
import Menu from './components/Menu'

import {
  getIconSvgFromIconNumber, requestCurrentCondition,
  requestDayMinMaxTemperatures,
  requestHourTemperatures,
} from './api/api'

import {
  getCurrentDay, getCurrentTime,
  getWeekdayString,
} from './timeController'


import './App.css'

function App() {
  const promiseCurrentCondition = requestCurrentCondition()
    .then((condition) => ({
      temperature: condition.temperature,
      weatherDescription: condition.weatherDescription,
      humidity: condition.humidity,
    }))

  const promiseDayPredictions = requestDayMinMaxTemperatures('arequipa')
    .then((dayTemperatures) => dayTemperatures.map((day, idx) => ({
      minTemperature: day.minimum,
      maxTemperature: day.maximum,
      icon: getIconSvgFromIconNumber(day.icon),
      weekDay: getWeekdayString(getCurrentDay() + idx),
    })))

  const promiseData = requestHourTemperatures('arequipa')
    .then((hourPredictions) => [
      {
        id: 'weather',
        data: hourPredictions.slice(0, 6)
          .map((hourPrediction, index) => ({
            x: `${12 + index}:00`,
            y: hourPrediction.temperature,
          })),
      },
    ])

  const [{ status: headerStatus, value: headerData }, callHead] = useAsync(
    () => Promise.all([promiseCurrentCondition, promiseData])
      .then((values) => {
        const currentCondition = values[0]
        const data = values[1]
        return {
          ...currentCondition,
          data,
        }
      }),
  )

  const [{ status: menuStatus, value: menuData }, callMenu] = useAsync(() => promiseDayPredictions)

  const [location] = useState('arequipa')
  const [currentTime] = useState(getCurrentTime())

  useEffect(() => {
    callHead()
    callMenu()
  }, [])

  return (
    <Container maxWidth="xs">
      {
        (() => {
          switch (headerStatus) {
            case 'success':
              return (
                <Header
                  data={headerData.data}
                  location={location}
                  currentTime={currentTime}
                  temperature={headerData.temperature}
                  weatherDescription={headerData.weatherDescription}
                  humidity={headerData.humidity}
                />
              )
            case 'loading':
              return <CircularProgress />
            default:
              return <div />
          }
        })()
      }
      {
        (() => {
          switch (menuStatus) {
            case 'success':
              return <Menu weekWeather={menuData} />
            case 'loading':
              return <CircularProgress />
            default:
              return <div />
          }
        })()
      }
    </Container>
  )
}

export default App
