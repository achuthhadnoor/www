import { INotes } from "../../../../types/timeline";
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { paperclip } from 'react-icons-kit/feather/paperclip'

const Notes = (note: INotes) => (
    <>
        <EntryIcon>
            <Icon icon={paperclip} />
        </EntryIcon>
        <NoteWrapper>
            <NoteTitle>
                {note.title}
            </NoteTitle>
            <NoteSummary>
                {note.note}
            </NoteSummary>
            </NoteWrapper>
    </>
)

 const EntryIcon = styled.span`
    padding:10px;
    background:${({ theme }) => theme.note.bg};
    color:${({ theme }) => theme.note.color};
    border-radius:50%;
`;


const NoteWrapper = styled.a` 
    padding: 1em ;
    border-radius:5px; 
`;

const NoteTitle = styled.h3`
    font-weight:600;
    padding:.5em 0em;
`;

const NoteSummary = styled.p` 
    font-size:.9em;
    line-height:1.5em;
`;


export default Notes;