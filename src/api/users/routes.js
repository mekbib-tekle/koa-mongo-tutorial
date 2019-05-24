const router = require('koa-router')();
const controller = require('./controller');

router.get('/:name', async (ctx) => {
  console.log(`find user by name ${ctx.params.name}`);
  const user = await controller.find(ctx.params.name);
  console.log(user);
  ctx.body = user;
});


router.get('/', async (ctx) => {
  const users = await controller.read();
  console.log(users);
  ctx.body = users;
});


router.post('/', async (ctx) => {
  const data = ctx.request.body;
  const user = await controller.create({ data });
  ctx.body = user;
});

module.exports = router.routes();
