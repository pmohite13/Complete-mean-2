const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  City = require('./city');


const TalukaSchema = new Schema({
  id: { type: Number, required: true },
  abbreviation: { type: String, trim: true },
  name: { type: String, required: true, trim: true },
  city: City.schema,
  cityId: { type: Number, required: true },
});



module.exports = mongoose.model('Taluka', TalukaSchema);
