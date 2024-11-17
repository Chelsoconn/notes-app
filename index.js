const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(express.static('dist'));
app.use(cors())


//MONGO DATABASE LOGIC 
  require('dotenv').config(); 
  const mongoose = require('mongoose')
  
  const url = process.env.MONGODB_URI;
    
  mongoose.set('strictQuery',false)
  
  mongoose
  .connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));
  
  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })
  
  const Note = mongoose.model('Note', noteSchema)
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
    const id = request.params.id 
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
  )

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => Number(n.id)))
      : 0
    return String(maxId + 1)
  }
  
  app.post('/api/notes', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const note = {
      content: body.content,
      important: Boolean(body.important) || false,
      id: generateId(),
    }
  
    notes = notes.concat(note)
  
    response.json(note)
  })

  app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id 
    notes = notes.filter(note => note.id !== id) 

    response.status(204).end()
  })
  
 
//PORT

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })