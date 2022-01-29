const noteRouterInit = (dependencies) => { 

    var express = require('express');
    var router = express.Router();
    const pipeline = require('../services/pipeline')(dependencies);
    const notesIface = require('../services/notesInterface');

    /* GET all notes. */
    router.get('/', async function(req, res, next) {
  
      res.send(await pipeline(req, notesIface.getAll, res))
    });

    /* GET only visible notes by Flag [active|archive] */
    router.get('/visible/:flag', async function(req, res, next) {

      res.send(await pipeline(req, notesIface.getVisible, res))
    });

    /* GET notes computed stat. */
    router.get('/stats', async function(req, res, next) {
    
      res.send(await pipeline(req, notesIface.getSummary, res))
    });

    /* GET selected note. */
    router.get('/:id', async function(req, res, next) {

      res.send(await pipeline(req, notesIface.getOne, res))
    });

    /* ADD new note to the store. */
    router.post('/', async function(req, res, next) {
        
      res.send(await pipeline(req, notesIface.addNew, res))
    });

    /* EDIT  selected note in store. */
    router.patch('/:id', async function(req, res, next) {

      res.send(await pipeline(req, notesIface.editNote, res))
    });

    /* REMOVE all showed notes from store by Flag [active|archive]. */
    router.delete('/visible/:flag', async function(req, res, next) {
      
      res.send(await pipeline(req, notesIface.removeVisible, res))
    });

    /* REMOVE all notes from store. */
    router.delete('/all', async function(req, res, next) {

      res.send(await pipeline(req, notesIface.removeAll, res))
    });

    /* REMOVE selected note from store. */
    router.delete('/:id', async function(req, res, next) {

      res.send(await pipeline(req, notesIface.removeOne, res))
    });

    return router
}
module.exports = noteRouterInit;
