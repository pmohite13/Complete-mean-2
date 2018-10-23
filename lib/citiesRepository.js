const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    State = require('../models/state'),
    City = require('../models/city');

class CitiesRepository {
    // get all the cities
    getCities(callback) {
        console.log('*** CitiesRepository.getCities');
        City.find({}, {}, { sort: { name: 1 } }, (err, cities) => {
            if (err) {
                console.log(`*** CitiesRepository.getCities err: ${err}`);
                return callback(err);
            }
            callback(null, cities);
        });
    }

    // get cities for state
    getCitiesForState(stateId, callback) {
        console.log('*** CitiesRepository.getCitiesForState');
        City.find({ 'stateId': stateId }, {}, (err, cities) => {
            if (err) {
                console.log(`*** CitiesRepository.getCitiesForState err: ${err}`);
                return callback(err);
            }
            callback(null, cities);
        });
    }
}

module.exports = new CitiesRepository();

