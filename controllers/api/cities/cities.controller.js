const citiesRepo = require('../../../lib/citiesRepository'),
    util = require('util');

class CitiesController {

    constructor(router) {
        router.get('/', this.getCities.bind(this));
        router.get('/:id', this.getCitiesForState.bind(this));
    }

    getCities(req, res) {
        console.log('*** get all cities');

        citiesRepo.getCities((err, data) => {
            if (err) {
                console.log('*** get all cities error: ' + util.inspect(err));
                res.json({
                    cities: null
                });
            } else {
                console.log('*** get all cities ok');
                res.json(data);
            }
        });
    }

    getCitiesForState(req, res) {
        console.log('*** get cities for State');
        const id = req.params.id;
        console.log(id);

        citiesRepo.getCitiesForState(id, (err, cities) => {
            if (err) {
                console.log('*** get cities for State error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** get cities for State ok');
                res.json(cities);
            }
        });
    }

}

module.exports = CitiesController;