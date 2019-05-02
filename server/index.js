const Koa = require('koa')
// const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchemas } = require('./database/init')
const R = require('ramda')
const MIDDLEWARES = ['router']

const useMiddlewares = app => {
  R.map(
    R.compose(
      R.forEachObjIndexed(
        initWith => initWith(app)
      ),
      require,
      name => resolve(__dirname, `./middlewares/${name}`)
    )
  )(MIDDLEWARES)
}

  ; (async () => {
    await connect()
    initSchemas()
    // const Movie = mongoose.model('Movie')
    // const movies = await Movie.find({})

    // require('./tasks/movie')
    // require('./tasks/api')
    const app = new Koa()
    await useMiddlewares(app)
    app.listen(8099)
  })()

// app
//   .use(router.routes())
//   .use(router.allowedMethods())

// app.use(views(resolve(__dirname, './views'), {
//   extension: 'pug'
// }))

// app.use(async (ctx, next) => {
//   await ctx.render('index', {
//     you: 'you..',
//     me: 'me,,'
//   })
// })

