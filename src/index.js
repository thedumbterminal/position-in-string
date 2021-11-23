const posInString = module.exports = {}

posInString._validateInput = (sentence, search) => {
  if (!sentence) {
    throw new Error('No sentence given')
  }
  if (!search) {
    throw new Error('No search given')
  }

  if (typeof sentence !== 'string' || typeof search !== 'string') {
    throw new Error('The search and sentence must both be strings')
  }

  if (search.length > sentence.length) {
    throw new Error('The search string must be equal or smaller than the sentence')
  }
}

posInString.search = (sentence = '', search = '') => {
  posInString._validateInput(sentence, search)

  const lenOfSearch = search.length
  const sentenceChars = sentence.split('')
  const lenOfSentence = sentenceChars.length

  for (let position = 0; position <= lenOfSentence; position++) {
    const compareChars = sentenceChars.slice(position, position + lenOfSearch)
    const compareString = compareChars.join('')
    if (search === compareString) {
      return position
    }
  }
  return null
}
