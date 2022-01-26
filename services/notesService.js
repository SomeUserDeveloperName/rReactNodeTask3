const notesInterface = require("./notesInterface")

//req.app.locals.variable.storage
//?? 
let storage = {}
const notesService = ({}.prototype = notesInterface)

  notesService.getAll = (_, _) => storage.notes

  notesService.getVisible = (_ , {flag}) => storage.notes.filter(note => note.archived === (flag === 'active' ? true: false))

  notesService.getOne = (id, _) => storage.notes.filter(note => note.id === id)

  notesService.getSummary = () => {
    const usedNotesCategories = [];
    storage.notes.forEach(note => usedNotesCategories.includes(note.category) 
                                ? "" 
                                : usedNotesCategories.push(note.category))

    const notesMapArray = usedNotesCategories.map(cat => ( 
        { "category": cat,
          "active": storage.notes.filter(note => (note.category == cat && !note.archived)).length,
          "archived": storage.notes.filter(note => (note.category == cat && note.archived)).length,
        }))
    return notesMapArray;   
  }

  notesService.editNote = (editedNote, _) => {
    storage.notes.forEach((note, idx) => (note.id === editedNote.id ? (storage.notes[idx] = editedNote) : '')) 
  }

  notesService.addNew = (newNote, _) => storage.notes.push(newNote)

  notesService.removeAll = () => storage.notes = []

  notesService.removeVisible = (flag) => storage.notes = storage.notes.filter(note => note.archived !== (flag === 'active' ? true: false))

  notesService.removeOne = (id) => storage.notes = storage.notes.filter(note => note.id !== id)

module.exports = notesService