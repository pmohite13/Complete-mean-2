const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    WorkArea = require('../models/workArea');

class WorkAreaRepository {
    // get all the work areas
    getWorkAreas(callback) {
        console.log('*** WorkAreaRepository.getWorkAreas');
        WorkArea.find({}, {}, { sort: { name: 1 } }, (err, workAreas) => {
            if (err) {
                console.log(`*** WorkAreaRepository.getWorkAreas err: ${err}`);
                return callback(err);
            }
            callback(null, workAreas);
        });
    }

    // get a work areas by id
    getWorkAreasById(workAreas, callback) {
        let workAreasForVolunteer = [];
        console.log('*** WorkAreaRepository.getWorkAreasById');
        if (workAreas && workAreas.length > 0) {
            workAreas.forEach(workArea => {
                WorkArea.find({ 'id': workArea.id }, {}, (err, workArea) => {
                    if (err) {
                        console.log(`*** WorkAreaRepository.getWorkAreasById err: ${err}`);
                        return callback(err);
                    }
                    workAreasForVolunteer.push(workArea);
                });
            });
            callback(null, workAreasForVolunteer);
        }
        else {
            console.log('*** WorkAreaRepository.getWorkAreasById: no work areas');
        }

    }


}

module.exports = new WorkAreaRepository();

