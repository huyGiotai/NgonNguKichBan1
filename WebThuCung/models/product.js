const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var ProductSchema = new mongoose.Schema({
  productId: { type: Number, unique: true },
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
  desc: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String
  }
});

ProductSchema.plugin(AutoIncrement, { inc_field: 'productId' });
module.exports = mongoose.model('Product', ProductSchema);