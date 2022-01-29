const notesInterface = require("./notesInterface")

const notesServiceInit = (storage) => {

  const notesService = ({...notesInterface})

  notesService.getAll = () => storage.notes

  notesService.getVisible = (flag, _) => storage.notes.filter(note => note.archived === (flag === 'active' ? false: true))

  notesService.getOne = (id,_) => {
    console.log(`getOne`, id)//, storage)
    return storage.notes.filter(note => note.id == id)
  }

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
        console.log(`stat`, notesMapArray)
    return notesMapArray;   
  }

  notesService.editNote = (editedNote,_) => {
    storage.notes.forEach((note, idx) => (note.id === editedNote.id ? (storage.notes[idx] = editedNote) : ''))
    return [] 
  }

  notesService.addNew = (newNote,_) => {storage.notes.push(newNote); return []}

  notesService.removeAll = () => {storage.notes = [];return []}

  notesService.removeVisible = (flag) => {storage.notes = storage.notes.filter(note => note.archived !== (flag === 'active' ? false: true)); return []}

  notesService.removeOne = (id) => {storage.notes = storage.notes.filter(note => note.id !== id); return []}

  return notesService;
}

module.exports = notesServiceInit