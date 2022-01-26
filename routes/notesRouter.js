var express = require('express');
var router = express.Router();
const notesIface = require('../services/notesInterface')

/* GET all notes. */
router.get('/', function(req, res, next) {
  
    //res.send('respond with a resource');
  res.send(pipeline(req, notesIface.getAll, res))
});

/* GET only visible notes by Flag [active|archive] */
router.get('/visible/:flag', function(req, res, next) {

   res.send(pipeline(req, notesIface.getVisible, res))
});

/* GET selected note. */
router.get('/:id', function(req, res, next) {

   res.send(pipeline(req, notesIface.getOne, res))
});

/* GET notes computed stat. */
router.get('/stats', function(req, res, next) {
  
  res.send(pipeline(req, notesIface.getSummary, res))
});

/* ADD new note to the store. */
router.post('/', function(req, res, next) {
    
  res.send(pipeline(req, notesIface.addNew, res))
});

/* EDIT  selected note in store. */
router.patch('/:id', function(req, res, next) {

  res.send(pipeline(req, notesIface.editNote, res))
});

/* REMOVE all showed notes from store. */
router.delete('/visible', function(req, res, next) {
  
  res.send(pipeline(req, notesIface.removeVisible, res))
});

/* REMOVE all notes from store. */
router.delete('/all', function(req, res, next) {

  res.send(pipeline(req, notesIface.removeAll, res))
});

/* REMOVE selected note from store. */
router.delete('/:id', function(req, res, next) {

  res.send(pipeline(req, notesIface.removeOne, res))
});

module.exports = router;
