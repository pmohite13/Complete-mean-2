const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectName: { type: String, required: true, trim: true },
  projectDescription: { type: String, required: true, trim: true },

});

module.exports = mongoose.model('Project', ProjectSchema, 'projects');
