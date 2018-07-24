const Koa = require('koa')
const app = new Koa()

// response
app.use(ctx => {
  ctx.body = {
    test: 'hello world',
  }
})

app.listen(3000)
