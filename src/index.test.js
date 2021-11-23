const posInString = require('./index')

const SENTENCE = 'An example sentence, that contains some words.'

describe('posInString', () => {
  describe('search()', () => {
    describe('input validation', () => {
      context('when no arguments are given', () => {
        it('fails the first validation check', () => {
          expect(() => {
            posInString.search()
          }).to.throw(Error, 'No sentence given')
        })
      })

      context('when the sentence is not given', () => {
        it('throws an error', () => {
          expect(() => {
            posInString.search(null, 'SEARCH')
          }).to.throw(Error, 'No sentence given')
        })
      })

      context('when the search is not given', () => {
        it('throws an error', () => {
          expect(() => {
            posInString.search(SENTENCE)
          }).to.throw(Error, 'No search given')
        })
      })

      context('when the search and sentence are not strings', () => {
        it('throws an error', () => {
          expect(() => {
            posInString.search(1, 2)
          }).to.throw(Error, 'The search and sentence must both be strings')
        })
      })

      context('when the search is longer than the sentence', () => {
        it('throws an error', () => {
          expect(() => {
            posInString.search('short', 'longer')
          }).to.throw(Error, 'The search string must be equal or smaller than the sentence')
        })
      })
    })

    describe('functionality', () => {
      context('if a string is not found', () => {
        it('returns null', () => {
          const result = posInString.search(SENTENCE, 'grammer')
          expect(result).to.be.null()
        })
      })

      context('if a string is found', () => {
        const testCases = [
          { search: 'An', position: 0 },
          { search: 'example', position: 3 },
          { search: 'sentence', position: 11 },
          { search: 'that', position: 21 },
          { search: 'contains', position: 26 }
        ]

        it('returns the position', () => {
          testCases.forEach((testData) => {
            const result = posInString.search(SENTENCE, testData.search)
            expect(result).to.equal(testData.position)
          })
        })
      })
    })
  })
})
