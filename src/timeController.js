const weekday = new Array(7)
weekday[0] = 'sunday'
weekday[1] = 'monday'
weekday[2] = 'tuesday'
weekday[3] = 'wednesday'
weekday[4] = 'thursday'
weekday[5] = 'friday'
weekday[6] = 'saturday'

let date = new Date()

export const getWeekdayString = (day) => weekday[day]

export const getCurrentDay = () => date.getDay()

export const getCurrentTime = () => {
  // Update date
  date = new Date()

  // Get weekday, hour:minutes am/pm
  const weekdayCurrent = getWeekdayString(date.getDay())
    .toUpperCase()

  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours %= 12
  hours = hours || 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes
  const hourMinutes = `${hours}:${minutes}${ampm}`

  return `${weekdayCurrent}, ${hourMinutes}`
}

