const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    State = require('../models/state'),
    City = require('../models/city');

class CitiesRepository {
    // get all the cities
    getCities(callback) {
        console.log('*** CitiesRepository.getCities');
        City.find({}, { _id: 0, __v: 0, state: 0, stateId: 0 }, { sort: { name: 1 } }, (err, cities) => {
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
        City.find({ 'stateId': stateId }, { _id: 0, __v: 0, state: 0, stateId: 0 }, {}, (err, cities) => {
            if (err) {
                console.log(`*** CitiesRepository.getCitiesForState err: ${err}`);
                return callback(err);
            }
            callback(null, cities);
        });
    }
}

module.exports = new CitiesRepository();

