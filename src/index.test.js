const imdbScraper = require('./index')

describe('imdbScraper', () => {
  test('imdbScraper.getInfoByID searches steam market to find appids that includes the title.',
    async () => {
      const result = await imdbScraper.getInfoByID('tt0118715')
      console.log(result.duration)
      expect(result.duration).toEqual('PT1H57M')
    }
  )

  test('imdbScraper.getInfoByID throws an error if the ID is not found',
    () => {
      expect(() => {
        const result = imdbScraper.getInfoByID(1).rejects.toThrow()
      })
    }
  )
})


