
const rp = require('request-promise-native')

async function fetchMovie (item) {
  const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`
  const res = await rp(url)
  return res
}

module.exports = async function (movies) {
  movies.map(async movie => {
    let movieData = await fetchMovie(movie)
    try {
      movieData = JSON.parse(movieData)
      console.log(movieData)
    } catch (err) {
      console.log(err)
    }
  })
}
