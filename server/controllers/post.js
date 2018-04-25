const postService = require('../services/post');

class PostController {
  static async getPostAll(ctx) {
    const postAll = await postService.getPostAll();
    ctx.body = postAll;
  }
}

module.exports = PostController
