const yup = require("yup");
const schemas = require("");

const methodToArgsMap = { 
	getAll: () => true,
	getVisible: (arg) => schemas.noteGetVisibleSchema.isValid(arg),
	getOne: (arg) => schemas.noteIdSchema.isValid(arg),
	getSummary: () => true,
	addNew: (arg) => schemas.noteSchema.isValid(arg),
	removeVisible: () => true,
	removeAll: () => true,
	removeOne:(arg) => schemas.noteIdSchema.isValid(arg),
	editNote: (arg) => schemas.noteSchema.isValid(arg),
}

const methodArgsValidate = (method, arg) => { 
	methodToArgsMap[method](arg) ? resolve(true) 
								 : reject ({error: `invalid args ${args} for method: ${method}`, type: "internal"})	
}

module.exports = methodArgsValidate