//import './App.css'
import { useState, useEffect } from "react"
import Note from "./components/Note"
import noteService from "./services/notes"

interface NoteType {
  id: number;
  content: string;
  important: boolean;
}

const App = () => {
  const [notes, setNotes] = useState<NoteType[]>([])
  const [currentNote, setCurrentNote] = useState("")

  const hook = () => { noteService.getAll().then((response) => { setNotes(response.data) }) }

  useEffect(hook, [])

  const addNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentNote === "") return
    const noteObject: NoteType = {
      id: notes.length + 1,
      content: currentNote,
      important: Math.random() < 0.5,
    }
    noteService.create(noteObject)
    setNotes(notes.concat(noteObject))
    setCurrentNote("")
  }
  const noteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentNote(event.target.value)
    console.log("value is : ", event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
          return <Note key={note.id} note={note} />}
        )}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={noteChange} value={currentNote} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
