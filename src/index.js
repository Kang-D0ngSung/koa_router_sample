const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const model = require('./model');

const router = new Router();

const bodyParser = () => {
    return koaBody({ multipart: true });
}

const app = new Koa();

const main = async (ctx) => {
    const { description, replyText, userId} = ctx.request.body;

    const ret = await model.main({description, replyText, userId});
}
router.post('/', bodyParser(), main);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
