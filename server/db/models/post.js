const db = require('../db');
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let postSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
});

let postModel = db.model('Articles', postSchema);
module.exports = postModel;
