const volunteersRepo = require('../../../lib/volunteersRepository'),
    statesRepo = require('../../../lib/statesRepository'),   
    util = require('util');

class CustomersController {

    constructor(router) {
       // router.get('/:id', this.getVolunteer.bind(this));
        router.get('/:user', this.getVolunteerByUser.bind(this));
        router.post('/', this.insertVolunteer.bind(this));
        router.put('/:id', this.updateVolunteer.bind(this));
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

    getVolunteerByUser(req, res) {
        console.log('*** getVolunteerByUser');
        const user = req.params.user;
        console.log(user);

        volunteersRepo.getVolunteerByUser(user, (err, volunteer) => {
            if (err) {
                console.log('*** getVolunteerByUser error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getVolunteerByUser ok');
                res.json(volunteer);
            }
        });
    }

    insertVolunteer(req, res) {
        console.log('*** insertVolunteer');
        volunteersRepo.insertVolunteer(req.body, (err, volunteer) => {

            if (err) {
                console.log('*** customersRepo.insertVolunteer error: ' + util.inspect(err));
                res.json({ status: false, error: 'Insert failed', volunteer: null });
            } else {
                console.log('*** insertVolunteer ok');
                res.json({ status: true, error: null, volunteer: volunteer });
            }
        });
    }

    updateVolunteer(req, res) {
        console.log('*** updateVolunteer');
        console.log('*** req.body');
        console.log(req.body);

        if (!req.body || !req.body.stateId || !req.body.qualificationId || !req.body.cityId) {
            throw new Error('Volunteer and associated properties are required');
        }

        // statesRepo.getState(req.body.stateId, (err, state) => {
        //     if (err) {
        //         console.log('*** statesRepo.getState error: ' + util.inspect(err));
        //         res.json({ status: false, error: 'State not found', customer: null });
        //     } else {
        //         customersRepo.updateCustomer(req.params.id, req.body, state, (err, customer) => {
        //             if (err) {
        //                 console.log('*** updateCustomer error: ' + util.inspect(err));
        //                 res.json({ status: false, error: 'Update failed', customer: null });
        //             } else {
        //                 console.log('*** updateCustomer ok');
        //                 res.json({ status: true, error: null, customer: customer });
        //             }
        //         });
        //     }
        // });

        volunteersRepo.updateVolunteer(req.params.id, req.body, (err, volunteer) => {
            if (err) {
                console.log('*** updateVolunteer error: ' + util.inspect(err));
                res.json({ status: false, error: 'Update failed', volunteer: null });
            } else {
                console.log('*** updateVolunteer ok');
                res.json({ status: true, error: null, volunteer: volunteer });
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