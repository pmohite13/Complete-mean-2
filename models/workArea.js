const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const WorkAreaSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('WorkArea', WorkAreaSchema);

