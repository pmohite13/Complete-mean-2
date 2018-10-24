const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  State = require('./state'),
  City = require('./city'),
  WorkArea = require('./workArea'),
  Qualification = require('./qualification');

const VolunteerSchema = new Schema({
  prefix: { type: Number, required: true, trim: true },
  dateOfBirth: { type: Date, required: true, trim: true },
  gender: { type: Number, required: true, trim: true },
  workAreas: [WorkArea.schema],
  qualification: Qualification.schema,
  qualificationId: { type: Number, required: true },
  address1: { type: String },
  address2: { type: String },
  pincode: { type: Number, required: true },
  state: State.schema,
  stateId: { type: Number, required: true },
  city: City.schema,
  cityId: { type: Number, required: true },
});



module.exports = mongoose.model('Volunteer', VolunteerSchema);
