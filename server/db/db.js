const mongoose = require('mongoose');
const dbUrl = "mongodb://localhost/blog";
mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("连接成功！");
});

module.exports = mongoose
