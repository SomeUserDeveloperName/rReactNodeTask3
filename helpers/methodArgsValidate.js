const yup = require("yup");
const schemas = require("../repositories/schemas");

const methodToArgsMap = { 
	getAll: () => [true],
	getVisible: (arg) => [true, arg.params.flag], //schemas.noteGetVisibleSchema.isValid(arg)],
	getOne: (arg) => { 
		console.log(`getOne validate`, arg.params.id)
		return [true, arg.params.id] //schemas.noteIdSchema.isValid(arg.params.id), arg.params.id]
	},
	getSummary: () => {console.log(`summary validate`); return [true]},
	addNew: (arg) => [schemas.noteSchema.isValid(arg)],
	removeVisible: (arg) => [true, arg.params.flag],
	removeAll: () => [true],
	removeOne:(arg) => [true, arg.params.id],//schemas.noteIdSchema.isValid(arg)],
	editNote: (arg) => [schemas.noteSchema.isValid(arg)],
}

const methodArgsValidate = (method, arg) => { 
	// console.log(`deb`, methodToArgsMap, method)//, arg)
	const [status, methodArgs] = methodToArgsMap[method](arg)
	console.log(`method validate`, status, methodArgs)
	return status
		   ? methodArgs
		   : ({error: `invalid args ${args} for method: ${method}`, type: "internal"})	
}

module.exports = methodArgsValidate