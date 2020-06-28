/* eslint-disable no-undef */
import { requestDayMinMaxTemperatures, requestHourTemperatures } from './api'

it('Should show minimum and maximum temperature for the next 5 days', () => requestDayMinMaxTemperatures('arequipa')
  .then((dayTemperatures) => {
    for (let i = 0; i < 5; i += 1) {
      expect(dayTemperatures[i].minimum).toBeDefined()
      expect(dayTemperatures[i].maximum).toBeDefined()
      expect(dayTemperatures[i].iconPhrase).toBeDefined()
    }
  }))

it('Should show temperatures for the next 12 hours', () => requestHourTemperatures('arequipa')
  .then((hourPredictions) => {
    for (let i = 0; i < 12; i += 1) {
      expect(hourPredictions[i].temperature).toBeDefined()
      expect(hourPredictions[i].iconPhrase).toBeDefined()
    }
  }))
