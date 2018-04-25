const postDao = require('../dao/post');

let getPostAll = async () => {
  let postAll = await postDao.getPostAll();
  return postAll;
};


module.exports = {
  getPostAll
}
