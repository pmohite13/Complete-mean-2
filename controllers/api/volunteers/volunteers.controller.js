const volunteersRepo = require('../../../lib/volunteersRepository'),
    statesRepo = require('../../../lib/statesRepository'),
    citiesRepo = require('../../../lib/citiesRepository'),
    qualificationsRepo = require('../../../lib/qualificationRepository'),
    workAreasRepo = require('../../../lib/workAreasRepository'),
    // VolunteerVm = require('../models/vm/volunteerVm')(),
    util = require('util');

class CustomersController {

    constructor(router) {
        router.get('/:id', this.getVolunteer.bind(this));
        router.post('/', this.insertVolunteer.bind(this));
        // router.put('/:id', this.updateCustomer.bind(this));
        // router.delete('/:id', this.deleteCustomer.bind(this));
    }



    getVolunteer(req, res) {
        console.log('*** getVolunteer');
        const id = req.params.id;
        console.log(id);

        volunteersRepo.getVolunteer(id, (err, volunteer) => {
            if (err) {
                console.log('*** getVolunteer error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getVolunteer ok');
                res.json(volunteer);
            }
        });
    }

    insertVolunteer(req, res) {
        console.log('*** insertVolunteer');
        let VolunteerVm = {};
        statesRepo.getState(req.body.stateId, (err, state) => {
            if (err) {
                console.log('*** statesRepo.getState error: ' + util.inspect(err));
                res.json({ status: false, error: 'State not found', volunteer: null });
            } else {
                console.log('state value: ' + state);
                VolunteerVm.state = state;
                console.log('state value 1: ' + VolunteerVm.state);
            }
        });
        citiesRepo.getCitiesForState(req.body.stateId, (err, city) => {
            if (err) {
                console.log('*** citiesRepo.getCitiesForState error: ' + util.inspect(err));
                res.json({ status: false, error: 'City not found', volunteer: null });
            } else {
                console.log('city value: ' + city);
                VolunteerVm.city = city[0];
                console.log('city value 1: ' + VolunteerVm.city);
               
            }
        });
        qualificationsRepo.getQualification(req.body.qualificationId, (err, qualification) => {
            if (err) {
                console.log('*** qualificationsRepo.getQualification error: ' + util.inspect(err));
                res.json({ status: false, error: 'Qualification not found', volunteer: null });
            } else {
                console.log('qualification value: ' + qualification);
                VolunteerVm.qualification = qualification[0];
                console.log('qualification value 1: ' + VolunteerVm.qualification);
               
            }
        });
        console.log('workarea before: ', req.body.workAreas);
        workAreasRepo.getWorkAreasById(req.body.workAreas, (err, workAreas1) => {
            if (err) {
                console.log('*** workAreasRepo.getWorkAreasById error: ' + util.inspect(err));
                res.json({ status: false, error: 'Work Areas not found', volunteer: null });
            } else {
                console.log('Work area value: ' + workAreas1);
                VolunteerVm.workAreas = workAreas1;
                console.log('Work area value 1: ' + VolunteerVm.workAreas);
              
            }
        });
        console.log('outside now: ');
        // volunteersRepo.insertVolunteer(req.body, VolunteerVm, (err, volunteer) => {
        //     if (err) {
        //         console.log('*** customersRepo.insertVolunteer error: ' + util.inspect(err));
        //         res.json({ status: false, error: 'Insert failed', volunteer: null });
        //     } else {
        //         console.log('*** insertVolunteer ok');
        //         res.json({ status: true, error: null, volunteer: volunteer });
        //     }
        // });
    }

    updateCustomer(req, res) {
        console.log('*** updateCustomer');
        console.log('*** req.body');
        console.log(req.body);

        if (!req.body || !req.body.stateId) {
            throw new Error('Customer and associated stateId required');
        }

        statesRepo.getState(req.body.stateId, (err, state) => {
            if (err) {
                console.log('*** statesRepo.getState error: ' + util.inspect(err));
                res.json({ status: false, error: 'State not found', customer: null });
            } else {
                customersRepo.updateCustomer(req.params.id, req.body, state, (err, customer) => {
                    if (err) {
                        console.log('*** updateCustomer error: ' + util.inspect(err));
                        res.json({ status: false, error: 'Update failed', customer: null });
                    } else {
                        console.log('*** updateCustomer ok');
                        res.json({ status: true, error: null, customer: customer });
                    }
                });
            }
        });
    }

    deleteCustomer(req, res) {
        console.log('*** deleteCustomer');

        customersRepo.deleteCustomer(req.params.id, (err) => {
            if (err) {
                console.log('*** deleteCustomer error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deleteCustomer ok');
                res.json({ status: true });
            }
        });
    }

}

module.exports = CustomersController;