// const API_KEY = 'L8EcQiSmmJ6sGDNbeATqRolT6X6b40L7'
// const LOCATION_KEY = '256930' // Arequipa city. Only for debugging
import { ReactComponent as cloudyIcon } from '../icons/weather/cloudy.svg'
import { ReactComponent as foggyIcon } from '../icons/weather/foggy.svg'
import { ReactComponent as partlyCloudyIcon } from '../icons/weather/partly-cloudy.svg'
import { ReactComponent as rainyIcon } from '../icons/weather/rainy.svg'
import { ReactComponent as snowdyIcon } from '../icons/weather/snowdy.svg'
import { ReactComponent as sunnyIcon } from '../icons/weather/sunny.svg'
// API: https://developer.accuweather.com/
const example5DaysForecast = {
  Headline: {
    EffectiveDate: '2020-06-29T07:00:00-05:00',
    EffectiveEpochDate: 1593432000,
    Severity: 7,
    Text: 'Seasonal temperatures for the next 5 days',
    Category: '',
    EndDate: null,
    EndEpochDate: null,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/extended-weather-forecast/256930?lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2020-06-27T07:00:00-05:00',
      EpochDate: 1593259200,
      Temperature: {
        Minimum: {
          Value: 43,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 68,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: [
        'AccuWeather',
      ],
      MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=1&lang=en-us',
      Link: 'http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=1&lang=en-us',
    },
    {
      Date: '2020-06-28T07:00:00-05:00',
      EpochDate: 1593345600,
      Temperature: {
        Minimum: {
          Value: 44,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 70,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 11,
        IconPhrase: 'Fog',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: [
        'AccuWeather',
      ],
      MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=2&lang=en-us',
      Link: 'http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=2&lang=en-us',
    },
    {
      Date: '2020-06-29T07:00:00-05:00',
      EpochDate: 1593432000,
      Temperature: {
        Minimum: {
          Value: 40,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 68,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: [
        'AccuWeather',
      ],
      MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=3&lang=en-us',
      Link: 'http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=3&lang=en-us',
    },
    {
      Date: '2020-06-30T07:00:00-05:00',
      EpochDate: 1593518400,
      Temperature: {
        Minimum: {
          Value: 42,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 71,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: [
        'AccuWeather',
      ],
      MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=4&lang=en-us',
      Link: 'http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=4&lang=en-us',
    },
    {
      Date: '2020-07-01T07:00:00-05:00',
      EpochDate: 1593604800,
      Temperature: {
        Minimum: {
          Value: 41,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 70,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
      },
      Sources: [
        'AccuWeather',
      ],
      MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=5&lang=en-us',
      Link: 'http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=5&lang=en-us',
    },
  ],
}

const example12HoursForecast = [
  {
    DateTime: '2020-06-27T18:00:00-05:00',
    EpochDateTime: 1593298800,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 60,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=18&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=18&lang=en-us',
  },
  {
    DateTime: '2020-06-27T19:00:00-05:00',
    EpochDateTime: 1593302400,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 55,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=19&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=19&lang=en-us',
  },
  {
    DateTime: '2020-06-27T20:00:00-05:00',
    EpochDateTime: 1593306000,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 52,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=20&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=20&lang=en-us',
  },
  {
    DateTime: '2020-06-27T21:00:00-05:00',
    EpochDateTime: 1593309600,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 50,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=21&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=21&lang=en-us',
  },
  {
    DateTime: '2020-06-27T22:00:00-05:00',
    EpochDateTime: 1593313200,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 48,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=22&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=22&lang=en-us',
  },
  {
    DateTime: '2020-06-27T23:00:00-05:00',
    EpochDateTime: 1593316800,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 47,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=23&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=23&lang=en-us',
  },
  {
    DateTime: '2020-06-28T00:00:00-05:00',
    EpochDateTime: 1593320400,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 46,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=0&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=0&lang=en-us',
  },
  {
    DateTime: '2020-06-28T01:00:00-05:00',
    EpochDateTime: 1593324000,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 43,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=1&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=1&lang=en-us',
  },
  {
    DateTime: '2020-06-28T02:00:00-05:00',
    EpochDateTime: 1593327600,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 46,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=2&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=2&lang=en-us',
  },
  {
    DateTime: '2020-06-28T03:00:00-05:00',
    EpochDateTime: 1593331200,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 46,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=3&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=3&lang=en-us',
  },
  {
    DateTime: '2020-06-28T04:00:00-05:00',
    EpochDateTime: 1593334800,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 46,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=4&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=4&lang=en-us',
  },
  {
    DateTime: '2020-06-28T05:00:00-05:00',
    EpochDateTime: 1593338400,
    WeatherIcon: 33,
    IconPhrase: 'Clear',
    HasPrecipitation: false,
    IsDaylight: false,
    Temperature: {
      Value: 47,
      Unit: 'F',
      UnitType: 18,
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=5&lang=en-us',
    Link: 'http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=5&lang=en-us',
  },
]

const exampleCurrentCondition = [
  {
    "LocalObservationDateTime": "2020-06-29T15:20:00-05:00",
    "EpochTime": 1593462000,
    "WeatherText": "Sunny",
    "WeatherIcon": 1,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 17.8,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 64,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "RealFeelTemperature": {
      "Metric": {
        "Value": 18.4,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 65,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "RealFeelTemperatureShade": {
      "Metric": {
        "Value": 16.2,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 61,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "RelativeHumidity": 16,
    "IndoorRelativeHumidity": 29,
    "DewPoint": {
      "Metric": {
        "Value": -7.8,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 18,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Wind": {
      "Direction": {
        "Degrees": 248,
        "Localized": "WSW",
        "English": "WSW"
      },
      "Speed": {
        "Metric": {
          "Value": 14.8,
          "Unit": "km/h",
          "UnitType": 7
        },
        "Imperial": {
          "Value": 9.2,
          "Unit": "mi/h",
          "UnitType": 9
        }
      }
    },
    "WindGust": {
      "Speed": {
        "Metric": {
          "Value": 14.8,
          "Unit": "km/h",
          "UnitType": 7
        },
        "Imperial": {
          "Value": 9.2,
          "Unit": "mi/h",
          "UnitType": 9
        }
      }
    },
    "UVIndex": 3,
    "UVIndexText": "Moderate",
    "Visibility": {
      "Metric": {
        "Value": 16.1,
        "Unit": "km",
        "UnitType": 6
      },
      "Imperial": {
        "Value": 10,
        "Unit": "mi",
        "UnitType": 2
      }
    },
    "ObstructionsToVisibility": "",
    "CloudCover": 0,
    "Ceiling": {
      "Metric": {
        "Value": 7833,
        "Unit": "m",
        "UnitType": 5
      },
      "Imperial": {
        "Value": 25700,
        "Unit": "ft",
        "UnitType": 0
      }
    },
    "Pressure": {
      "Metric": {
        "Value": 1026,
        "Unit": "mb",
        "UnitType": 14
      },
      "Imperial": {
        "Value": 30.3,
        "Unit": "inHg",
        "UnitType": 12
      }
    },
    "PressureTendency": {
      "LocalizedText": "Steady",
      "Code": "S"
    },
    "Past24HourTemperatureDeparture": {
      "Metric": {
        "Value": -1.1,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": -2,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "ApparentTemperature": {
      "Metric": {
        "Value": 17.8,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 64,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "WindChillTemperature": {
      "Metric": {
        "Value": 17.8,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 64,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "WetBulbTemperature": {
      "Metric": {
        "Value": 7.2,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 45,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Precip1hr": {
      "Metric": {
        "Value": 0,
        "Unit": "mm",
        "UnitType": 3
      },
      "Imperial": {
        "Value": 0,
        "Unit": "in",
        "UnitType": 1
      }
    },
    "PrecipitationSummary": {
      "Precipitation": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PastHour": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past3Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past6Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past9Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past12Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past18Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "Past24Hours": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      }
    },
    "TemperatureSummary": {
      "Past6HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 16.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 61,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 18.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 66,
            "Unit": "F",
            "UnitType": 18
          }
        }
      },
      "Past12HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 4,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 18.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 66,
            "Unit": "F",
            "UnitType": 18
          }
        }
      },
      "Past24HourRange": {
        "Minimum": {
          "Metric": {
            "Value": 4,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Maximum": {
          "Metric": {
            "Value": 18.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 66,
            "Unit": "F",
            "UnitType": 18
          }
        }
      }
    },
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/current-weather/256930?lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/current-weather/256930?lang=en-us"
  }
]

function requestForecastNext5Days(city) {
  return example5DaysForecast
}

function requestForecastNext12Hours(city) {
  return example12HoursForecast
}

function requestForecastCurrentCondition(city) {
  return exampleCurrentCondition
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

// Para conseguir key
// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09L8EcQiSmmJ6sGDNbeATqRolT6X6b40L7&q=arequipa
// [
// {
// Version: 1,
// Key: "256930",
// ...
// 5 Dias
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/256930?apikey=L8EcQiSmmJ6sGDNbeATqRolT6X6b40L7
//
// 12 hours
// http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/256930?apikey=L8EcQiSmmJ6sGDNbeATqRolT6X6b40L7
// Current condition
// http://dataservice.accuweather.com/currentconditions/v1/256930?apikey=L8EcQiSmmJ6sGDNbeATqRolT6X6b40L7&details=true

// var str = Object.keys(obj).map(function(key) {
//   return key + '=' + encodeURIComponent(obj[key]);
// }).join('&');

export const requestDayMinMaxTemperatures = async (city) => {
  const data = requestForecastNext5Days(city)
  return data.DailyForecasts.map((value) => ({
    minimum: Math.round(fahrenheitToCelsius(value.Temperature.Minimum.Value)),
    maximum: Math.round(fahrenheitToCelsius(value.Temperature.Maximum.Value)),
    icon: value.Day.Icon,
  }))
}

export const requestHourTemperatures = async (city) => {
  const data = requestForecastNext12Hours(city)
  return data.map((value) => ({
    temperature: Math.round(fahrenheitToCelsius(value.Temperature.Value)),
    icon: value.WeatherIcon,
  }))
}

export const requestCurrentCondition = async (city) => {
  const data = requestForecastCurrentCondition(city)
  return {
    temperature: data[0].Temperature.Metric.Value,
    weatherDescription: data[0].WeatherText,
    humidity: data[0].RelativeHumidity,
  }
}

export const getIconComponentFromIconNumber = (iconNumber) => {
  switch (iconNumber) {
    case 1: return sunnyIcon
    case 6: return partlyCloudyIcon
    case 7: return cloudyIcon
    case 11: return foggyIcon
    case 18: return rainyIcon
    case 22: return snowdyIcon
    case 33: return sunnyIcon // Revisar
    default:
      // eslint-disable-next-line no-console
      console.log(`Unrecognized icon number ${iconNumber}`)
      return sunnyIcon
  }
}
