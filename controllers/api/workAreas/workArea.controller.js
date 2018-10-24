const workAreasRepo = require('../../../lib/workAreasRepository'),
    util = require('util');

class WorkAreaController {

    constructor(router) {
        router.get('/', this.getWorkAreas.bind(this));
    }

    getWorkAreas(req, res) {
        console.log('*** get all workareas');

        workAreasRepo.getWorkAreas((err, data) => {
            if (err) {
                console.log('*** get all workareas error: ' + util.inspect(err));
                res.json({
                    workAreas: null
                });
            } else {
                console.log('*** get all workareas ok');
                res.json(data);
            }
        });
    }

}

module.exports = WorkAreaController;