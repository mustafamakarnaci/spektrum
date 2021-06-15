const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('bookmark', bookmarkSchema);
