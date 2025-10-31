const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var UserSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
});

UserSchema.plugin(AutoIncrement, { inc_field: 'userId' });
module.exports = mongoose.model('User', UserSchema);