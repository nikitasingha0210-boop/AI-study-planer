const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true, trim: true, maxlength: 200 },
  done: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);