const chai = require('chai')
const sinon = require('sinon')
chai.config.includeStack = true

chai.use(require('sinon-chai'))
chai.use(require('chai-as-promised'))
chai.use(require('dirty-chai'))

global.expect = chai.expect
global.sinon = sinon
