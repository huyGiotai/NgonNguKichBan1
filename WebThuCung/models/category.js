const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var CategorySchema = new mongoose.Schema({
  categoryId: { type: Number, unique: true },
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String
  }
});

CategorySchema.plugin(AutoIncrement, { inc_field: 'categoryId' });
module.exports = mongoose.model('Category', CategorySchema);