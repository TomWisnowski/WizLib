# noaa-weather [![Build Status](https://travis-ci.org/nperez0111/noaa-weather.svg?branch=master)](https://travis-ci.org/nperez0111/noaa-weather)

> A Small Web app for displaying the text Marine Forecast straight from NOAA.


## Install

```
$ npm install --save noaa-weather
```


## Usage

```js
const noaaWeather = require('noaa-weather');

noaaWeather('Miami, Fl');
//=> returns json of current conditions in Miami Florida
```


## API

### noaaWeather(location[latitude], [longitude])

#### location

Type: `string`

If location is a string and a valid location,will return a json promise of the current conditions in that location

#### latitude

Type: `Number`

If the location is not a string but rather a number, will search using latitude and longitude specified

### longitude

Type:`Number`

Same as above. 


## License

MIT © [Nick The Sick](http://nickthesick.com)
