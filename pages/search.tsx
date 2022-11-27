import React from "react";
import {WithLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import api from "../helpers/api";

function Search(): JSX.Element {

    return (
        <>

        </>
    );
}

export default WithLayout(Search);

// TODO разобраться с типизацией картинок и приватными переменными

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(api.TOP_PAGE.FIND, {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory: number
}