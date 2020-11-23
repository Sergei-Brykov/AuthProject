const { Schema, model } = require('mongoose')

const recoverSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  expiredAt: Date,
});

module.exports = model('recover', recoverSchema, 'oAuth')