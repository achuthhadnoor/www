
export interface IMonths {
    month:   string;
    year:string;
    entries: IEntry[];
}

export interface IEntry {
    type:   string;
    BLOG?:  IBlog;
    NOTES?: INotes;
}

export interface IBlog {
    title:    string;
    summary:  string;
    link:     string;
    views:    number;
    readTime: string;
}

export interface INotes {
    title: string;
    note:  string;
}
