const pipelineInit = ({storage}) => {

    const auth = require('./auth')
    const successPrepare = require('../helpers/successPrepare')
    const errorPrepare = require('../helpers/errorPrepare')
    const methodValidate = require('../helpers/methodValidate')
    const methodArgsValidate = require('../helpers/methodArgsValidate')
    const notesService = require('../services/notesService')(storage)

    return pipeline = async (req, method, res) => {
    
        let outResponse = {}
        await auth(req)
                    .then(methodValidate(method))
                    .then(_ => methodArgsValidate(method, req))
                    //.then(r => console.log(`AAAa`,r))
                    .then((methodArgs, e) => {console.log(`pipe`, methodArgs); return notesService[method](methodArgs, req)})
                    .then(r => outResponse = successPrepare(r))
                    .catch(e => outResponse = errorPrepare(e))
                    console.log(`resp`, outResponse)
        return outResponse
    }
}
module.exports = pipelineInit