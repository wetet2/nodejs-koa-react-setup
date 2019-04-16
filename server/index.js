const Koa = require('koa');
const Router = require('koa-router');
const KoaStatic = require('koa-static');
const path = require('path');
const app = new Koa();
const router = new Router();
const api = require('./api')

app.use(KoaStatic(path.resolve(__dirname, '../public')))
router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Server is listening to port 4000');
});
