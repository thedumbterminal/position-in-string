# position-in-string

[![Node.js CI](https://github.com/thedumbterminal/position-in-string/actions/workflows/node.js.yml/badge.svg)](https://github.com/thedumbterminal/position-in-string/actions/workflows/node.js.yml)

Example of finding the position of a given start of a string inside another string

## Usage

```
const posInString = require('posInString')

const index = posInString.search('sentence', 'word')
```

### search()
Finds the index of the first character of the given search string inside the provided sentence string.



## Developing
### Install

```
npm install
```

### Tasks
Please see the available NPM run tasks available to help with your workflow using the command:

```
npm run
```

## Future features

Possible ideas for extending this library:

* Option to specify case sensitivity.
* Option to return an array of starting positions if multiple matches are found.
* Able to specify multiple search words.
* Integrate a library such as [misspellings](https://www.npmjs.com/package/misspellings) to support alternative spellings of the search word.
