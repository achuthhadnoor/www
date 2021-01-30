import Icon from "react-icons-kit";
import styled from 'styled-components'

import { IEntry } from "../../../types/timeline";
import Blog from "./Blog";
import Notes from "./Notes";

interface IProps {
    entries: IEntry[],
}

const renderEntries = (entry: IEntry) => {
    switch (entry.type) {
        case 'BLOG':
            return (
                <Blog {...entry.BLOG} />
            )
        case 'NOTES':
            return (
                <Notes {...entry.NOTES} />
            )
        default:
            break;
    }
}

const Entries = ({ entries }: IProps) => (
    <>
        {
            entries.map((entry: IEntry, i: number) => (
            <EntryWrapper key={i}>
                {renderEntries(entry)}
            </EntryWrapper>
            ))
        }
    </>
)

const EntryWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;
export default Entries;