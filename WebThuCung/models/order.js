const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var OrderSchema = new mongoose.Schema({
  orderId: { type: Number, unique: true },
  products: {
    type: Object,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

OrderSchema.plugin(AutoIncrement, { inc_field: 'orderId' });
module.exports = mongoose.model('Order', OrderSchema);