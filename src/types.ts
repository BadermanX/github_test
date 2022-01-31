import { ReactElement } from "react";

export interface MenuItemInterface{
    name: string;
    link: string;
}

export interface RenderEntriesInterface{
    entries: RenderEntryInterface[];
}

export interface GetDataInterface{
    search: SearchItemInterface[];
    per_page: number;
    page: number;
    sort: string;
    order: "asc" | "desc";
}

export interface RenderEntryInterface{
    [key: string]: number | string | object | boolean;
    id: number;
    name: string
    stargazers_count: number;
    watchers_count: number;
    owner: OwnerInterface;
}

export interface GithubResponseInterface{
    total_count?: number;
    items?: RenderEntryInterface[];
    error?: string;
}

export interface OwnerInterface{
    login: string;
    id: number;
    avatar_url: string;
}

export interface RenderEntryCardInterface{  
    entry: RenderEntryInterface;
    fieldsToDisplay?: string[];
}

export interface RenderCardInterface{
    children?: ReactElement | ReactElement[];
    link?: string;
}

export interface BannerInterface {
    title: string;
    body: string;
}

export interface ButtonInterface{
    onClick: () => void;
    children: ReactElement;
    className?: string;
    role?: string
}

export interface SearchItemInterface {
    key: string;
    value: string | string[];
    operator: "in" | ">" | "!=" | "=" | "contains";
}

export interface DisplayedSearchesInterface{
    editCallback?: (index: number) => void; 
    deleteCallback?: (index: number) => void; 
    searches: SearchItemInterface[];
}

export interface SearchBarInterface{
    fieldsToDisplay:{         
        type: string;           
        value: string;
    }[],    
    filters: SearchItemInterface[];
    setFilter: (filter: SearchItemInterface[]) => void;
}

export interface SectionInterface{
    backgroundImage: string;
    children?: React.ReactElement | React.ReactElement[];
    className? : string;
    backgroundColor?: string;
}