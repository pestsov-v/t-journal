import {ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Up from '../../../public/up-arrow.svg';
import Close from '../../../public/pirple-close.svg';
import Burger from '../../../public/burger.svg';

export const icons = {
    Up,
    Close,
    Burger
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'white'
    icon: IconName
}