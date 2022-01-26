const auth = require('./auth')
const successPrepare = require('../helpers/successPrepare')
const errorPrepare = require('../helpers/errorPrepare')
const methodValidate = require('../helpers/methodValidate')
const methodArgsValidate = require('../helpers/methodArgsValidate')
const notesService = require('./notesService')

const pipeline = (req, method, res) => {

    let outResponse
    auth(req)
             .then(methodValidate(method))
             .then(methodArgsValidate(method, req))
             .then(methodArgs => notesService[method](methodArgs, req))
             .then(r =>  successPrepare(r,outResponse))
             .catch(e => errorPrepare(e,outResponse))
            // .finally(return outResponse)
    return outResponse
}

module.exports = pipeline