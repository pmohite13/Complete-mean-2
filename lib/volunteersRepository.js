const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
   // VolunteerVm = require('../models/vm/volunteerVm')(),
    Volunteer = require('../models/volunteer');

class VolunteersRepository {


    // get a  volunteer
    getVolunteer(id, callback) {
        console.log('*** VolunteersRepository.getVolunteer');
        Volunteer.findById(id, (err, volunteer) => {
            if (err) {
                console.log(`*** VolunteersRepository.getVolunteer error: ${err}`);
                return callback(err);
            }
            callback(null, volunteer);
        });
    }

    // insert a  volunteer
    insertVolunteer(body, VolunteerVm, callback) {
        console.log('*** VolunteersRepository.insertVolunteer');
        console.log('Volunteer', VolunteerVm);
        console.log('Volunteer State', VolunteerVm.state.name);
        console.log('Volunteer City', VolunteerVm.city.name);
        console.log('Volunteer Qualification', VolunteerVm.qualification.name);
        console.log('Volunteer workAreas', VolunteerVm.workAreas.name);

        let volunteer = new Volunteer();
        let newQualification = { 'id': VolunteerVm.qualification[0].id, 'name': VolunteerVm.qualification[0].name };
        let newState = { 'id': VolunteerVm.state[0].id, 'abbreviation': VolunteerVm.state[0].abbreviation, 'name': VolunteerVm.state[0].name };
        let newCity = { 'id': VolunteerVm.city[0].id, 'abbreviation': VolunteerVm.city[0].abbreviation, 'name': VolunteerVm.city[0].name };

        console.log(body);

        volunteer.prefix = body.prefix;
        volunteer.dateOfBirth = body.dateOfBirth;
        volunteer.gender = body.gender;
        volunteer.address1 = body.address1;
        volunteer.address2 = body.address2;
        volunteer.qualification = newQualification;
        volunteer.qualificationId = newQualification.id;
        volunteer.state = newState;
        volunteer.stateId = newState.id;
        volunteer.city = newCity;
        volunteer.cityId = newCity.id;
        volunteer.workAreas = VolunteerVm.workAreas;

        volunteer.save((err, volunteer) => {
            if (err) {
                console.log(`*** VolunteersRepository insertVolunteer error: ${err}`);
                return callback(err, null);
            }

            callback(null, volunteer);
        });
    }

    updateCustomer(id, body, state, callback) {
        console.log('*** CustomersRepository.editCustomer');

        let stateObj = { 'id': state[0].id, 'abbreviation': state[0].abbreviation, 'name': state[0].name }

        Customer.findById(id, (err, customer) => {
            if (err) {
                console.log(`*** CustomersRepository.editCustomer error: ${err}`);
                return callback(err);
            }

            customer.firstName = body.firstName || customer.firstName;
            customer.lastName = body.lastName || customer.lastName;
            customer.email = body.email || customer.email;
            customer.address = body.address || customer.address;
            customer.city = body.city || customer.city;
            customer.state = stateObj;
            customer.stateId = stateObj.id;
            customer.zip = body.zip || customer.zip;
            customer.gender = body.gender || customer.gender;


            customer.save((err, customer) => {
                if (err) {
                    console.log(`*** CustomersRepository.updateCustomer error: ${err}`);
                    return callback(err, null);
                }

                callback(null, customer);
            });

        });
    }

    // delete a customer
    deleteCustomer(id, callback) {
        console.log('*** CustomersRepository.deleteCustomer');
        Customer.remove({ '_id': id }, (err, customer) => {
            if (err) {
                console.log(`*** CustomersRepository.deleteCustomer error: ${err}`);
                return callback(err, null);
            }
            callback(null, customer);
        });
    }

}

module.exports = new VolunteersRepository();