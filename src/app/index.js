const Koa = require('koa');
const database = require('../database');
const router = require('../routing');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-morgan');
const responseTime = require('koa-response-time');

const app = new Koa();

app.use(responseTime());
app.use(logger('combined'));
app.use(bodyparser());
app.use(router.routes());
app.use((ctx) => {
  ctx.type = 'json';
});


exports.start = async () => {
  try {
    await database.connect();
    await app.listen(3000);

    console.log('connected to db & port');
  } catch (error) {
    console.log('Failed to connect to db');
    console.log(error);
  }
};
