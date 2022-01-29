const yup = require("yup");
const notesCategories = require("./notesCategories");

const noteIdSchema = yup.object({
  body: yup.object({
          id: yup.number().required(),
  }),
});

const noteGetVisibleSchema = yup.object({
    flag: yup.mixed().oneOf(['active', 'archived']),
})

const noteCategory = yup.object({
     category: yup.mixed().oneOf(notesCategories),
})

const noteSchema = yup.object({
    body: yup.object({
            id: noteIdSchema,
            name: yup.string().min(3).max(32).required(),
            dateCreated: yup.string().matches(),
            dateEdited: yup.string(),
            category: noteCategory,
            content: yup.string().min(2).max(50).required(),
            archived: yup.bool().required(),
  }),
//   params: yup.object({
//     id: yup.number().required(),
//   }),
});

const schemas = {
    noteSchema,
    noteIdSchema,
    noteGetVisibleSchema,
    noteCategory,
}

module.exports = schemas;