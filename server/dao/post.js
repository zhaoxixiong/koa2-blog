let postModel = require('../db/models/post');

// 获取所有文章
let getPostAll = async () => {
  let postAll = await postModel.find().sort({
    _id: -1
  }).exec();

  return postAll;
};
module.exports = {
  getPostAll
}

// https://segmentfault.com/a/1190000009897839
