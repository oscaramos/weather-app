const API_KEY = 'L8EcQiSmmJ6sGDNbeATqRolT6X6b40L7';
const LOCATION_KEY = '256930'; // Arequipa city. Only for debugging

const example5DaysForecast = {
  Headline: {
    EffectiveDate: "2020-06-29T07:00:00-05:00",
    EffectiveEpochDate: 1593432000,
    Severity: 7,
    Text: "Seasonal temperatures for the next 5 days",
    Category: "",
    EndDate: null,
    EndEpochDate: null,
    MobileLink: "http://m.accuweather.com/en/pe/arequipa/256930/extended-weather-forecast/256930?lang=en-us",
    Link: "http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?lang=en-us"
  },
  DailyForecasts: [
    {
      Date: "2020-06-27T07:00:00-05:00",
      EpochDate: 1593259200,
      Temperature: {
        Minimum: {
          Value: 43,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 68,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=1&lang=en-us"
    },
    {
      Date: "2020-06-28T07:00:00-05:00",
      EpochDate: 1593345600,
      Temperature: {
        Minimum: {
          Value: 44,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 70,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=2&lang=en-us"
    },
    {
      Date: "2020-06-29T07:00:00-05:00",
      EpochDate: 1593432000,
      Temperature: {
        Minimum: {
          Value: 40,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 68,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=3&lang=en-us"
    },
    {
      Date: "2020-06-30T07:00:00-05:00",
      EpochDate: 1593518400,
      Temperature: {
        Minimum: {
          Value: 42,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 71,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=4&lang=en-us"
    },
    {
      Date: "2020-07-01T07:00:00-05:00",
      EpochDate: 1593604800,
      Temperature: {
        Minimum: {
          Value: 41,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 70,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://m.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/pe/arequipa/256930/daily-weather-forecast/256930?day=5&lang=en-us"
    }
  ]
};

const example12HoursForecast = [
  {
    "DateTime": "2020-06-27T18:00:00-05:00",
    "EpochDateTime": 1593298800,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 60,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=18&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=18&lang=en-us"
  },
  {
    "DateTime": "2020-06-27T19:00:00-05:00",
    "EpochDateTime": 1593302400,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 55,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=19&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=19&lang=en-us"
  },
  {
    "DateTime": "2020-06-27T20:00:00-05:00",
    "EpochDateTime": 1593306000,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 52,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=20&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=20&lang=en-us"
  },
  {
    "DateTime": "2020-06-27T21:00:00-05:00",
    "EpochDateTime": 1593309600,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 50,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=21&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=21&lang=en-us"
  },
  {
    "DateTime": "2020-06-27T22:00:00-05:00",
    "EpochDateTime": 1593313200,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 48,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=22&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=22&lang=en-us"
  },
  {
    "DateTime": "2020-06-27T23:00:00-05:00",
    "EpochDateTime": 1593316800,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 47,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=23&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=1&hbhhour=23&lang=en-us"
  },
  {
    "DateTime": "2020-06-28T00:00:00-05:00",
    "EpochDateTime": 1593320400,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 46,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=0&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=0&lang=en-us"
  },
  {
    "DateTime": "2020-06-28T01:00:00-05:00",
    "EpochDateTime": 1593324000,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 43,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=1&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=1&lang=en-us"
  },
  {
    "DateTime": "2020-06-28T02:00:00-05:00",
    "EpochDateTime": 1593327600,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 46,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=2&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=2&lang=en-us"
  },
  {
    "DateTime": "2020-06-28T03:00:00-05:00",
    "EpochDateTime": 1593331200,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 46,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=3&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=3&lang=en-us"
  },
  {
    "DateTime": "2020-06-28T04:00:00-05:00",
    "EpochDateTime": 1593334800,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 46,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=4&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=4&lang=en-us"
  },
  {
    "DateTime": "2020-06-28T05:00:00-05:00",
    "EpochDateTime": 1593338400,
    "WeatherIcon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 47,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=5&lang=en-us",
    "Link": "http://www.accuweather.com/en/pe/arequipa/256930/hourly-weather-forecast/256930?day=2&hbhhour=5&lang=en-us"
  }
];

function requestForecastNext5Days(city) {
  return example5DaysForecast;
}

function requestForecastNext12Hours(city) {
  return example12HoursForecast;
}

const requestDayMinMaxTemperatures = async (city) => {
  const data = requestForecastNext5Days(city);
  return data.DailyForecasts.map(value => ({
    minimum: value.Temperature.Minimum.Value,
    maximum: value.Temperature.Maximum.Value,
    iconPhrase: value.Day.IconPhrase
  }))
}

const requestHourTemperatures = async (city) => {
  const data = requestForecastNext12Hours(city);
  return data.map(value => ({
    temperature: value.Temperature.Value,
    iconPhrase: value.IconPhrase
  }));
}

module.exports = {
  requestDayMinMaxTemperatures,
  requestHourTemperatures
};
