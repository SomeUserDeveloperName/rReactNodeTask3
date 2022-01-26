const noteSchema = yup.object({
    body: yup.object({
            id: yup.number().required(),
            name: yup.string().min(3).max(32).required(),
            dateCreated: yup.string().matches(),
            dateEdited: yup.string(),
            category: yup.string().min(2).max(20).required(),
            content: yup.string().min(2).max(50).required(),
            archived: yup.bool().required(),
  }),
//   params: yup.object({
//     id: yup.number().required(),
//   }),
});

const noteIdSchema = yup.object({
    body: yup.object({
            id: yup.number().required(),
  }),
});

module.exports = schemas;