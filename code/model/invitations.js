const { Schema, model } = require('mongoose')

// TODO: add validation
const invitationSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  expiredAt: Date,
});

module.exports = model('Invitation', invitationSchema)