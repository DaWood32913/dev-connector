const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: string
  },
  likes: [
    {
      users: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  comments: [
    {
      users: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      text: {
          type: String,
          required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: string
      },
      date: {
          type: Date,
          default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
}
});

module.exports = Post = mongoose.model('post', PostSchema);
