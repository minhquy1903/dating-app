import mongoose, { Schema } from 'mongoose';

const MatchListSchma: Schema = new Schema({
  user_id: {
    type: { String, ref: 'User' },
    require: true,
  },
  list_like: {
    type: [String],
    default: [],
  },
  list_match: {
    type: [String],
    default: [],
  },
  list_dislike: {
    type: [String],
    default: [],
  },
});

const MatchList = mongoose.model('MatchList', MatchListSchma);

export default MatchList;
