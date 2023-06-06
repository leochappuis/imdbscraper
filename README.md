**imdbscraper**

Provides an easy way to retrieve info about content on IMDB.
https://www.npmjs.com/package/imdbscraper

it takes a name string containing the id of the movie, eg tt0118715

```js
const imdbScraper = require('imdbscraper')

async function getInfoAboutMovie (id) {
  const info = await imdbScraper.getInfoByID(id)
  console.log(info)
}

getInfoAboutMovie('tt0118715')
```