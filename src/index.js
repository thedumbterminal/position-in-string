const posInString = module.exports = {}

posInString.search = (orginal, search) => {
  if (!search) {
    throw new Error('no search given')
  }

  const lenOfSearch = search.length
  const chars = orginal.split('')

  const lenOfChars = chars.length

  for (let i = 0; i <= lenOfChars; i++) {
    const compareChars = chars.slice(i, lenOfSearch)
    console.log('compare chars', compareChars)

    const compareString = compareChars.join('')

    if (search === compareString) {
      return i
    }
  }

  // logic actaully here
  return null
}
