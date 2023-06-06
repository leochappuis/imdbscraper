const axios = require('axios')

axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'

exports.getInfoByID = async function(id) {
  try {
    const req = await axios.get('https://www.imdb.com/title/' + id, {headers: {
      
      "Accept-Encoding": "gzip,deflate,compress"
    }
    })
    const data = req.data
    
    let json = data.match(/<script type="application\/ld\+json">(.*?)<\/script>/)[1]
    json = JSON.parse(json)

    const title = data.match(/<title>(.*?)<\/title>/)[1]
    const rating = json.aggregateRating.ratingValue
    const poster = data.match(/<meta property="og:image" content="(.*?)"/)[1]
    const description = data.match(/<meta property="og:description" content="(.*?)"/)[1]
    const releaseDate = json.datePublished

    const genre = json.genre
    const director = json.director
    const actors = json.actor
    const duration = json.duration
    const movie = {
       title,
       rating,
       poster,
       description,
       releaseDate,
       duration,
       genre,
       director,
       actors
    }
    return movie
  } catch (err) {
    return Error(err)
  }
}
