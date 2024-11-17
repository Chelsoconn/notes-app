// const mongoose = require('mongoose')

// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url =
//   `mongodb+srv://chelseaaoconnor1:${password}@notes-app.tjoj8.mongodb.net/NotesApp?retryWrites=true&w=majority&appName=Notes-App`



// mongoose.set('strictQuery',false)

// mongoose.connect(url)

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

// // const note = new Note({
// //   content: 'HTML is easy',
// //   important: true,
// // })

// // const note2 = new Note({
// //   content: 'Mongoose makes things easy',
// //   important: true,
// // })

// // const note3 = new Note({
// //   content: 'CSS is hard',
// //   important: true,
// // })

// // note2.save().then(result => {
// //   console.log('note saved!')
// //   mongoose.connection.close()
// // })

// // note3.save().then(result => {
// //     console.log('note saved!')
// //     mongoose.connection.close()
// //   })

// Note.find({}).then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
//     mongoose.connection.close()
//   })