var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MusicianSchemaduo = new Schema({
  name: String,
  band: String,
  instrument: String
});

mongoose.model('Musiciandemos', MusicianSchemaduo);