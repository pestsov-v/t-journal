import React from "react";
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