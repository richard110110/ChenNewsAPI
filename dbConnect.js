const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://richard:200824australia@cluster0.kq38b.mongodb.net/chennews?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true})
const connection = mongoose.connection
connection.on('connected', () => {
    console.log(`Mongodb connection successful: ${connection.name}`)
})

connection.on('error', () => {
    console.log("Mongodb connection error")
})

module.exports = mongoose