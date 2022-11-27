import React from "react";
import styles from './menu.module.css';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import cn from "classnames";
import Link from 'next/link';
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";
import {motion} from 'framer-motion';


export const Menu = (): JSX.Element => {
    const {menu, firstCategory, setMenu} = React.useContext(AppContext);
    const router = useRouter();
    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };
    
    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
            }
        },
        hidden: {
            marginBottom: 0
        }
    };

    const childVariants = {
        visible: {
            opacity: 1,
            height: 39
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => {
                        return (<div key={m.route}>
                            <Link href={`/${m.route}`}>
                                    <div className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]: m.id == firstCategory
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
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <motion.div 
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={cn(styles.secondLevelBlock)}
                            >
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </motion.div>
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
                   <motion.div
                       key={page._id}
                       variants={childVariants}
                   >
                       <Link href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, {
                               [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
                           }
                       )}>
                           {page.category}
                       </Link>
                   </motion.div>
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