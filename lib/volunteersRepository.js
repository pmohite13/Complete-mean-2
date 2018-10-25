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

    // get a  volunteer by user
    getVolunteerByUser(user, callback) {
        console.log('*** VolunteersRepository.getVolunteerByUser' + user);
        Volunteer.find({ 'user.email': user }, (err, volunteer) => {
            if (err) {
                console.log(`*** VolunteersRepository.getVolunteerByUser error: ${err}`);
                return callback(err);
            }
            callback(null, volunteer);
        });
    }

    // insert a  volunteer
    // insertVolunteer(body, VolunteerVm, callback) {
    insertVolunteer(body, callback) {
        console.log('*** VolunteersRepository.insertVolunteer');

        let volunteer = new Volunteer();

        let newQualification = { 'id': body.qualification.id, 'name': body.qualification.name };
        let newState = { 'id': body.state.id, 'abbreviation': body.state.abbreviation, 'name': body.state.name };
        let newCity = { 'id': body.city.id, 'abbreviation': body.city.abbreviation, 'name': body.city.name, 'state': newState, 'stateId': newState.id };
        let user = { 'firstName': body.user.firstName, 'lastName': body.user.lastName, 'email': body.user.email, 'phone': body.user.phone, 'password': 'dummy' };
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
        volunteer.workAreas = body.workAreas;
        volunteer.pincode = isNaN(body.pincode) ? null : Number(body.pincode);
        volunteer.user = user;

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