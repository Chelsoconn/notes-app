const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(express.static('dist'));
app.use(cors())


//MONGO DATABASE LOGIC 
  require('dotenv').config();
  const Note = require('./models/note')
//




//ROUTES

  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes)
    })
  })

  app.get('/api/notes/:id', ((request, response) => {
    Note.findById(request.params.id).then(note => {
      response.json(note)
    })
    })
  )

  app.post('/api/notes', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({error: 'content missing'})
    }

    const note = new Note({
      content: body.content,
      important: body.important || false,
    })

    note.save().then(savedNote => {
      response.json(savedNote)
    })
  })

  app.put('/api/notes/:id', (request, response, next) => {
    const body = request.body
  
    const note = {
      content: body.content,
      important: body.important,
    }
  
    Note.findByIdAndUpdate(request.params.id, note, { new: true })
      .then(updatedNote => {
        response.json(updatedNote)
      })
      //.catch(error => next(error))
  })



  app.delete('/api/notes/:id', (request, response) => {
    Note.findByIdAndDelete(request.params.id).then(note => {
      response.status(204).end()
    })
    .catch(error => {
      console.error('Error deleting the note:', error);
      response.status(500).json({ error: 'Failed to delete the note' });
    });
  })




//PORT

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })