const express = require('express')
const app = express()
const cors = require("cors")

app.use(express.json()) // if content-type = application/json it turns it into JS json object
app.use(cors())
let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
    
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/notes/', (request, response) => {
    response.json(notes)
}) 


app.get('/notes/:id/', (request, response) => {

    const note = notes.find((note)=>{return note.id === Number(request.params.id)})
    if (note === undefined){
        response.status(404).send("No note with that ID")
    }
    else {
        response.json(note)
    }
})

app.post("/notes/", (request, response)=>{
    console.log("executing app.post /notes/")
    const note = request.body
    notes = notes.concat(note)
    response.status(200).send("ok")
})

app.delete('/notes/:id/', (request, response)=>{
    const id =  Number(request.params.id)
    notes = notes.filter((note)=>{return note.id !== id})
    response.status(204).end()
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
