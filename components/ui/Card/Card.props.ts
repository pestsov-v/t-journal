import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface CardProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color?: 'white' | 'blue'
    children: ReactNode
}