**easyimdbscraper**

Provides an easy way to retrieve info about content on IMDB.
https://www.npmjs.com/package/easyimdbscraper

it takes a name string containing the id of the movie, eg tt0118715

npm i easyimdbscrapper

```js
const imdbScraper = require('easyimdbscraper')

async function getInfoAboutMovie (id) {
  const info = await imdbScraper.getInfoByID(id)
  console.log(info)
}

getInfoAboutMovie('tt0118715')
```