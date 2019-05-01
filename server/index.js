const Koa = require('koa')
const views = require('koa-views')
const mongoose = require('mongoose')
const { resolve } = require('path')
const { connect, initSchemas } = require('./database/init')

  ; (async () => {
    await connect()
    initSchemas()
    // const Movie = mongoose.model('Movie')
    // const movies = await Movie.find({})
    // console.log(movies)
    
    // require('./tasks/movie')
    require('./tasks/api')
  })()

const app = new Koa()

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'you..',
    me: 'me,,'
  })
})

app.listen(8099)
