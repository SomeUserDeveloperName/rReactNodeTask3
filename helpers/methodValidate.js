const notesIface = require('../services/notesInterface') 
const methods = Object.keys(notesIface)

const methodValidate = (method) => methods.includes(method) 
                                 ? true//Promise.resolve(true)
                                 : ({error: "method undefined", type: "internal"})
                        
module.exports = methodValidate