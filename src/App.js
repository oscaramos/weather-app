/* eslint-disable react/jsx-filename-extension */

import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header'
import Menu from './components/Menu'

import {
  getIconSvgFromIconNumber,
  requestDayMinMaxTemperatures,
  requestHourTemperatures,
} from './api/api'

import cloudIcon from './icons/weather/cloud.svg'
import cloudyIcon from './icons/weather/cloudy.svg'
import foggyIcon from './icons/weather/foggy.svg'
import humidityIcon from './icons/weather/humidity.svg'
import sunnyIcon from './icons/weather/sunny.svg'

import './App.css'

const weekday = new Array(7)
weekday[0] = 'SUNDAY'
weekday[1] = 'MONDAY'
weekday[2] = 'TUESDAY'
weekday[3] = 'WEDNESDAY'
weekday[4] = 'THURSDAY'
weekday[5] = 'FRIDAY'
weekday[6] = 'SATURDAY'

let date = new Date()

const getWeekdayString = (day) => weekday[day]

const getCurrentTime = () => {
  // Update date
  date = new Date()

  // Get weekday, hour:minutes am/pm
  const weekdayCurrent = getWeekdayString(date.getDay())
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours %= 12
  hours = hours || 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes
  const hourMinutes = `${hours}:${minutes}${ampm}`

  return `${weekdayCurrent}, ${hourMinutes}`
}

function App() {
  const [location] = useState('PLOVDIV')
  const [currentTime] = useState(getCurrentTime())
  const [temperature] = useState('6°')
  const [weatherDescription] = useState('Mostly cloudy')
  const [humidity] = useState('63%')

  const [weekWeather, setWeekWeather] = useState([])
  const [data, setData] = useState([
    {
      id: 'weather',
      data: [
        {
          x: '12:00',
          y: 6,
        },
        {
          x: '13:00',
          y: 3,
        },
        {
          x: '14:00',
          y: 2,
        },
        {
          x: '15:00',
          y: 7,
        },
        {
          x: '16:00',
          y: 5,
        },
        {
          x: '17:00',
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
            weekDay: getWeekdayString(date.getDay() + idx),
          })),
        )
      })

    requestHourTemperatures('arequipa')
      .then((hourPredictions) => {
        setData([
          {
            id: 'weather',
            data: hourPredictions.slice(0, 3)
              .map((hourPrediction, index) => ({
                x: `${12 + index}:00`,
                y: hourPrediction.temperature,
              })),
          },
        ])
      })
  }, [])

  return (
    <Container maxWidth='xs'>
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
