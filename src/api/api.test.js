/* eslint-disable no-undef,implicit-arrow-linebreak */
import cloudyIcon from '../icons/weather/cloudy.svg'
import foggyIcon from '../icons/weather/foggy.svg'
import partlyCloudyIcon from '../icons/weather/partly-cloudy.svg'
import rainyIcon from '../icons/weather/rainy.svg'
import snowdyIcon from '../icons/weather/snowdy.svg'
import sunnyIcon from '../icons/weather/sunny.svg'

import {
  requestDayMinMaxTemperatures,
  requestHourTemperatures,
  getIconComponentFromIconNumber,
  requestCurrentCondition } from './api'

it('Should show minimum and maximum temperature for the next 5 days', () =>
  requestDayMinMaxTemperatures('arequipa')
    .then((dayTemperatures) => {
      for (let i = 0; i < 5; i += 1) {
        expect(dayTemperatures[i].minimum).toBeDefined()
        expect(dayTemperatures[i].maximum).toBeDefined()
        expect(dayTemperatures[i].icon).toBeDefined()
      }
    }))

it('Should show temperatures for the next 12 hours', () =>
  requestHourTemperatures('arequipa')
    .then((hourPredictions) => {
      for (let i = 0; i < 12; i += 1) {
        expect(hourPredictions[i].temperature).toBeDefined()
        expect(hourPredictions[i].icon).toBeDefined()
      }
    }))

it('Should show the current condition of the weather', () =>
  requestCurrentCondition('arequipa')
    .then((condition) => {
      expect(condition.temperature).toBeDefined()
      expect(condition.weatherDescription).toBeDefined()
      expect(condition.humidity).toBeDefined()
    })
)

it('Should return icon svg given a number from the api', () => {
  expect(getIconComponentFromIconNumber(1)).toBe(sunnyIcon)
  expect(getIconComponentFromIconNumber(6)).toBe(partlyCloudyIcon)
  expect(getIconComponentFromIconNumber(7)).toBe(cloudyIcon)
  expect(getIconComponentFromIconNumber(11)).toBe(foggyIcon)
  expect(getIconComponentFromIconNumber(18)).toBe(rainyIcon)
  expect(getIconComponentFromIconNumber(22)).toBe(snowdyIcon)
})
