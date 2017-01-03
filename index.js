var Alexa = require('alexa-sdk');
var noaaWeather = require('noaa-weather');
var alexa;

function noaaResultsHandler(currentConditions) {
    var phraseToSay = 'Dave and Tom, The current conditions for Today: ' + currentConditions.data.temperature[0];
    console.log(phraseToSay);
    this.emit(':tellWithCard', phraseToSay, 'Todays weather', phraseToSay);
}

noaaWeather('ELK GROVE VILLAGE, IL').then(noaaResultsHandler.bind(this));

var handlers = {
    'LaunchRequest': function () {
        this.emit('getCurrentWeather');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', 'Ask to get current weather');
    },
    'Unhandled': function () {
        this.emit(':ask', 'Sorry, I didn\'t get that.', 'Ask to get current weather');
    },

    'getCurrentWeather': function () {
        noaaWeather('ELK GROVE VILLAGE, IL').then(noaaResultsHandler.bind(this));
    }
};

exports.handler = function (event, context, callback) {
    if (event && context) {
        alexa = Alexa.handler(event, context);
        alexa.registerHandlers(handlers);
        alexa.execute();
    } else {
        console.log('there was an issue with the way the app was called.');
    }
};
