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

    updateVolunteer(id, body, callback) {
        console.log('*** VolunteersRepository.editVolunteer');

        let editQualification = { 'id': body.qualification.id, 'name': body.qualification.name };
        let editState = { 'id': body.state.id, 'abbreviation': body.state.abbreviation, 'name': body.state.name };
        let editCity = { 'id': body.city.id, 'abbreviation': body.city.abbreviation, 'name': body.city.name, 'state': editState, 'stateId': editState.id };
        let user = { 'firstName': body.user.firstName, 'lastName': body.user.lastName, 'email': body.user.email, 'phone': body.user.phone, 'password': 'dummy' };

        Volunteer.findById(id, (err, volunteer) => {
            if (err) {
                console.log(`*** VolunteersRepository.editVolunteer error: ${err}`);
                return callback(err);
            }

            volunteer.prefix = body.prefix || volunteer.prefix;
            volunteer.dateOfBirth = body.dateOfBirth || volunteer.dateOfBirth;
            volunteer.gender = body.gender || volunteer.gender;
            volunteer.address1 = body.address1 || volunteer.address1;
            volunteer.address2 = body.address2 || volunteer.address2;
            volunteer.qualification = editQualification || volunteer.qualification;
            volunteer.qualificationId = editQualification.id || volunteer.qualificationId;
            volunteer.state = editState || volunteer.state;
            volunteer.stateId = editState.id || volunteer.stateId;
            volunteer.city = editCity || volunteer.city;
            volunteer.cityId = editCity.id || volunteer.cityId;
            volunteer.workAreas = body.workAreas || volunteer.workAreas;
            volunteer.pincode = isNaN(body.pincode) ? volunteer.pincode : Number(body.pincode);
            volunteer.user = user || volunteer.user;
            volunteer.createdOn = volunteer.createdOn;
            volunteer.updatedOn = body.updatedOn || volunteer.updatedOn;

            volunteer.save((err, volunteer) => {
                if (err) {
                    console.log(`*** VolunteersRepository.editVolunteer error: ${err}`);
                    return callback(err, null);
                }

                callback(null, volunteer);
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