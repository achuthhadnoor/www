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

const Entries = (entries: IEntry) => (
    <div>
        {renderEntries(entries)}
    </div>
)
export default Entries;