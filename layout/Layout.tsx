import React, {FunctionComponent} from "react";
import {LayoutProps} from "./Layout.props";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Sidebar} from "./Sidebar/Sidebar";
import styles from './Layout.module.css'

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body}>{children}</div>
            <Footer className={styles.footer} />
        </div>
    );
};

export const WithLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function WithLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}