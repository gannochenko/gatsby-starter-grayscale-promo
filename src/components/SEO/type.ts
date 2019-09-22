export interface Props {
    description?: string;
    lang?: string;
    meta?: Meta[];
    keywords?: string[];
    title: string;
}

export interface Meta {
    name: string;
    content: string;
}
