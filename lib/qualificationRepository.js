const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Qualification = require('../models/qualification');

class QualificationRepository {

    getQualifications(callback) {
        console.log('*** QualificationRepository.getQualifications');
        Qualification.find({}, {}, { sort: { name: 1 } }, (err, qualifications) => {
            if (err) {
                console.log(`*** QualificationRepository.getQualifications err: ${err}`);
                return callback(err);
            }
            callback(null, qualifications);
        });
    }

    // get a qualification
    getQualification(qualificationId, callback) {
        console.log('*** QualificationRepository.getQualification');
        Qualification.find({ 'id': qualificationId }, {}, (err, qualification) => {
            if (err) {
                console.log(`*** QualificationRepository.getQualification err: ${err}`);
                return callback(err);
            }
            callback(null, qualification);
        });
    }


}

module.exports = new QualificationRepository();

