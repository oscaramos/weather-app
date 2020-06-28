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

// import cloudIcon from './icons/weather/cloud.svg'
// import humidityIcon from './icons/weather/humidity.svg'

import './App.css'

const weekday = new Array(7)
weekday[0] = 'sunday'
weekday[1] = 'monday'
weekday[2] = 'tuesday'
weekday[3] = 'wednesday'
weekday[4] = 'thursday'
weekday[5] = 'friday'
weekday[6] = 'saturday'

let date = new Date()

const getWeekdayString = (day) => weekday[day]

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const getCurrentTime = () => {
  // Update date
  date = new Date()

  // Get weekday, hour:minutes am/pm
  const weekdayCurrent = getWeekdayString(date.getDay()).toUpperCase()

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
            weekDay: capitalize(getWeekdayString(date.getDay() + idx)),
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
