const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  State = require('./state');


const CitySchema = new Schema({
  id: { type: Number, required: true },
  abbreviation: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  state: State.schema,
  stateId: { type: Number, required: true },
});



module.exports = mongoose.model('City', CitySchema);
