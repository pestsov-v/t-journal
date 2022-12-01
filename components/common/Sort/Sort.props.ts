import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortKind,
    setSort: (sort: SortKind) => void
}

export enum SortKind {
    Rating,
    Price
}