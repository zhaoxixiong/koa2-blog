const Router = require('koa-router');
const PostController = require('../controllers/post');


const Routers = new Router({
  prefix: '/api'
});
// Routers.get('/', (ctx, next) => {
//   // ctx.router available
// });

Routers.get('/getPostAll', PostController.getPostAll);

module.exports = Routers;
