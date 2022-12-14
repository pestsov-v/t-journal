import React from "react";
import {SidebarProps} from "./Sidebar.props";
import {Menu} from "../Menu/menu";
import Logo from '../../public/logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import {Search} from "../../components";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props} className={(cn(className, styles.sidebar))}>
            <Logo className={styles.logo}  />
            <Search />
            <Menu />
        </div>
    )
}