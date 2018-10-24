const qualificationRepo = require('../../../lib/qualificationRepository'),
    util = require('util');

class QualificationController {

    constructor(router) {
        router.get('/', this.getQualifications.bind(this));
    }

    getQualifications(req, res) {
        console.log('*** get all workareas');

        qualificationRepo.getQualifications((err, data) => {
            if (err) {
                console.log('*** get all qualifications error: ' + util.inspect(err));
                res.json({
                    qualifications: null
                });
            } else {
                console.log('*** get all qualifications ok');
                res.json(data);
            }
        });
    }

}

module.exports = QualificationController;