const {Router} = require('express');
const router = Router()

const { renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote } = require('../controllers/notes.controller');

//get optener datos, post enviar datos

const {isAuthenticated} = require ('../helpers/auth')
//Nueva operacion
router.get('/notes/add', isAuthenticated, renderNoteForm);

router.post('/notes/new-note', isAuthenticated, createNewNote);

//Get Todas las operaciones
router.get('/notes', isAuthenticated, renderNotes);

//Editar operaciones, mostrar formulario
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
//Actualizar datos del formulario
router.put('/notes/edit/:id', isAuthenticated, updateNote);

//Eliminar operaciones
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;
