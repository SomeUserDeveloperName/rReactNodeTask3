const notesIface = require('../services/notesInterface') 
const methods = Object.keys(notesIface)

const methodValidate = () => methods.include(method) 
                                ? resolve(true)
                                : reject ({error: "method undefined", type: "internal"})
                        
module.exports = methodValidate