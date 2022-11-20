import React from "react";
import styles from './menu.module.css';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import CoursesIcon from '../../public/menu/graduation-hat.svg';
import BoxIcon from '../../public/menu/box.svg';
import BooksIcon from '../../public/menu/books.svg';
import CloudIcon from '../../public/menu/cloud.svg';
import {TopLevelCategory} from "../../interfaces/page.interface";
import cn from "classnames";
import Link from 'next/link';


const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses  },
    {route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services  },
    {route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books  },
    {route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
    const {menu, firstCategory, setMenu} = React.useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => {
                        return (<div key={m.route}>
                            <Link href={`/${m.route}`}>
                                    <div className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]: m.id === firstCategory
                                    })
                                    }>
                                        {m.icon}
                                        <span>{m.name}</span>
                                    </div>
                            </Link>

                            {m.id === firstCategory && buildSecondLevel(m)}
                        </div>);
                    }
                )}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBLockOpened]: m.isOpened
                            }
                            )}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => {
               return (
                   <Link href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                           [styles.thirdLevelActive]: false
                       }
                   )} key={page._id}>
                       {page.category}
                   </Link>
               );
            })
        );
    };

    return (
        <div className={styles.menu}>
            <ul>
                {buildFirstLevel()}
            </ul>
        </div>
    );
};