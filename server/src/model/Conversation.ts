import mongoose, { Schema } from 'mongoose';

const ConversationSchma: Schema = new Schema(
  {
    _id: {
      type: String,
      require: true,
    },
    participants_id: {
      type: [String],
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const Conversation = mongoose.model('User', ConversationSchma);

export default Conversation;
