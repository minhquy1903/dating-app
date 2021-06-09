import mongoose, { Schema } from 'mongoose';

const MessageSchma: Schema = new Schema(
  {
    user_id: {
      require: true,
      type: String,
    },
    conversation_id: {
      require: true,
      type: { String, ref: 'Conversation' },
    },
    message_text: String,
    message_type: Number,
  },
  {
    timestamps: true,
  },
);

const Message = mongoose.model('User', MessageSchma);

export default Message;
