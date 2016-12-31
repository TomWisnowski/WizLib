'use strict';
let fetch = require( 'isomorphic-fetch' ),
    toCoord = require( 'city-to-coords' );
module.exports = ( city, long ) => {
    let str = "http://forecast.weather.gov/MapClick.php?FcstType=json&";

    if ( long === Number( long ) && city === Number( city ) ) {

        return fetch( str + `lat=${city}&lon=${long}` )

    } else if ( city !== Number( city ) ) {

        return toCoord( city ).then( a => {

            return fetch( str + `lat=${a.lat}&lon=${a.lng}` ).then( response => {

                if ( response.status >= 400 ) {

                    throw new Error( 'Bad response from server' )

                }

                return response.json()

            } )

        } )

    }

    return false;
};
