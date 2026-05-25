import { useState } from "react"

function App() {
  
  const [ notes , setNotes ] = useState([])
  const [ text , setText ] = useState("")
  const [ editeId , setEditId ] = useState(null)

  function Add(){
    if ( editeId !== null) {
      const updateNote = notes.map((note , i ) =>(
        i === editeId ? text : note))
        setNotes(updateNote)
        setEditId(null)
    } else {  
    setNotes([...notes , text])
    }
    setText("")
  }
  function Delete(index) {
    setNotes(notes.filter((_,i) => i !== index))
  }

  function EditNote(index){
    setText(notes[index])
    setEditId(index)
  }
  return(
    <div className="shadow-md border-solid rounded-2xl w-lg p-6 mt-30 ml-110">
      <h3 className="font-bold text-center">Notes</h3>

      <input placeholder="typing..." value={text} 
      className="border border-gray-300 rounded-l-lg px-3 py-2 w-90 mt-6 ml-8 outline-none focus:border-blue-500"
      onChange={(e) => setText(e.target.value)}/>

      <button onClick={Add}
      className=" bg-black text-white p-2 rounded-r-xl ">{editeId !== null ? "done" : "add"}</button>
      <ul> 
      {notes.map((note , index) => (
        <li key={index}
        className="flex items-center justify-between p-4">{note}
        <div className="flex gap-1">
        <button className="bg-gray-300 p-1 rounded-lg" onClick={() => EditNote(index)}>edit</button>
        <button className="bg-red-600 rounded-lg p-1 text-white "
        onClick={() => Delete(index)}>delete</button>
        </div></li>
      ))}
      </ul>
    </div>
  )
  
}

export default App