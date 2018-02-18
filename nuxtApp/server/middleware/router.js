import Router from 'koa-router'

export const router = app => {
  const router = new Router()
  router.get('/test', (ctx, next) => {

  })

  app.use(router.routes())
  app.use(router.allowedMethods())
}
