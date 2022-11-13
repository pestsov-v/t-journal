import React, {FunctionComponent} from "react";
import {LayoutProps} from "./Layout.props";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Sidebar} from "./Sidebar/Sidebar";

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
                <div>
                    <Sidebar />
                    <div>{children}</div>
                </div>
                <Footer />
        </>
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