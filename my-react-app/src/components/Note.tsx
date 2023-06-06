interface NoteType {
  id: number;
  content: string;
  important: boolean;
}

const Note = ({ note }: { note: NoteType }) => {

  return (
    <li>{note.content}</li>
  )
}

export default Note