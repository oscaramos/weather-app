import { requestDayMinMaxTemperatures, requestHourTemperatures } from './api';

it('Should show minimum and maximum temperature for the next 5 days', () => {
  return requestDayMinMaxTemperatures('arequipa')
    .then(dayTemperatures => {
      for (let i = 0; i < 5; i++) {
        expect(dayTemperatures[i].minimum).toBeDefined()
        expect(dayTemperatures[i].maximum).toBeDefined()
        expect(dayTemperatures[i].iconPhrase).toBeDefined()
      }
    })
});

it('Should show temperatures for the next 12 hours', () => {
  return requestHourTemperatures('arequipa')
    .then(hourTemperatures => {
      for (let i=0; i<12; ++i) {
        expect(hourTemperatures[i].temperature).toBeDefined()
        expect(hourTemperatures[i].iconPhrase).toBeDefined()
      }
    })
});
