const Router = require('koa-router');
const api = new Router();

api.get('/search', (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path;
});

module.exports = api;
