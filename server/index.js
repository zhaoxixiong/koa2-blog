const Koa = require('koa');
const Routers = require('./routers');
const app = new Koa();

app.use(Routers.routes())
app.use(Routers.allowedMethods())

app.listen(3000);
