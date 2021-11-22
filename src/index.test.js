const posInString = require('./index')

describe('posInString', () => {
  describe('search()', () => {
    context('when no string is given', () => {
      it('throws an error', () => {
        expect(() => {
          posInString.search()
        }).to.throw(Error, 'no search given')
      })
    })
  })
})
