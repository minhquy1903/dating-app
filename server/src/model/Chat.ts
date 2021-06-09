import mongoose, { Schema } from 'mongoose';

const MatchSchma: Schema = new Schema({});

const Match = mongoose.model('User', MatchSchma);

export default Match;
