import { INotes } from "../../../../types/timeline";

const Notes = (note:INotes)=>(
    <div>
        {note.title}
        {note.note}
    </div>
)
export default Notes;