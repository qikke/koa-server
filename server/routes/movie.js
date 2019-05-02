const { controller, get } = require('../lib/decorator')
const { getAllMovies, getRelativeMovies, getMovieDetail } = require('../service/movie')

@controller('/api/v0/movies')
export class movieController {
  @get('/')
  // @login
  // @admin(['developer'])
  // @log
  async getMovies (ctx, next) {
    const { type, year } = ctx.query
    const movies = await getAllMovies(type, year)
    ctx.body = {
      movies
    }
  }

  // 对于post，可以加验证数据的中间件
  // @post
  // @required({body: ['username', 'doubanId']})

  @get('/:id')
  async getMovieDetail (ctx, next) {
    const id = ctx.params.id
    const movie = await getMovieDetail(id)
    const relativeMovies = await getRelativeMovies(movie)
    ctx.body = {
      data: {
        movie,
        relativeMovies
      },
      success: true
    }
  }
}
